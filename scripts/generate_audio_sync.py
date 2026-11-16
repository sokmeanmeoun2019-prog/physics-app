#!/usr/bin/env python3
"""
Empirical Sentence-Level Audio-to-PDF Alignment Generator (Grade 9 & Grade 12)
==============================================================================
Generates `audiobooks/sync/<audio_stem>.sync.json` manifests by:
  1. Extracting reading-order words, lines, and sentences + bounding boxes
     from each Grade 9 / Grade 12 eBook PDF via PyMuPDF (`fitz`).
     - Preserves Khmer UTF-8, English, math symbols, subscripts, superscripts,
       and SI units.
     - Automatically falls back to Tesseract OCR (`eng+khm`) on scanned/image
       pages so bounding boxes work even for scanned PDFs.
  2. Transcribing each MP3 track via `faster-whisper` (`word_timestamps=True`)
     to obtain true spoken segment/word timestamps (never reading-speed guesses).
  3. Performing monotonic fuzzy sequence alignment between non-verbatim spoken
     sentences and PDF sentences (handling spoken intros, transitions, outros,
     math-to-prose expansions like `M=Fd` <-> `M equals F times d`, and typos).

Usage examples:
  python scripts/generate_audio_sync.py --all
  python scripts/generate_audio_sync.py --grade 9
  python scripts/generate_audio_sync.py --track g9-ch1-part1
  python scripts/generate_audio_sync.py --audio audiobooks/g9-ch1-part1.mp3.mp3 --pdf ebooks/g9-ch1-ebook.pdf.pdf
"""

from __future__ import annotations

import argparse
import difflib
import json
import math
import re
import sys
import unicodedata
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Optional, Tuple

try:
    import fitz  # PyMuPDF
except ImportError as exc:
    raise SystemExit("Missing dependency: PyMuPDF. Install via: pip install -r scripts/requirements-sync.txt") from exc

try:
    from faster_whisper import WhisperModel
except ImportError as exc:
    raise SystemExit("Missing dependency: faster-whisper. Install via: pip install -r scripts/requirements-sync.txt") from exc

try:
    import pytesseract
    from PIL import Image
    HAS_OCR = True
except ImportError:
    HAS_OCR = False


ROOT_DIR = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT_DIR / "audiobooks"
EBOOK_DIR = ROOT_DIR / "ebooks"
SYNC_DIR = AUDIO_DIR / "sync"

AUDIO_EXTS = (".mp3", ".mp3.mp3", ".m4a", ".wav", ".aac", ".ogg")

SYMBOL_WORD_MAP = {
    "=": " equals ",
    "≡": " equals ",
    "≈": " approximately ",
    "≠": " not equal ",
    "×": " times ",
    "·": " times ",
    "÷": " divided by ",
    "±": " plus or minus ",
    "≤": " less than or equal to ",
    "≥": " greater than or equal to ",
    "<": " less than ",
    ">": " greater than ",
    "°": " degrees ",
    "Ω": " ohms ",
    "µ": " micro ",
    "μ": " micro ",
    "Δ": " delta ",
    "∆": " delta ",
    "θ": " theta ",
    "φ": " phi ",
    "λ": " lambda ",
    "π": " pi ",
    "τ": " tau ",
    "ω": " omega ",
    "ρ": " rho ",
    "→": " yields ",
    "⇒": " implies ",
    "%": " percent ",
}

UNIT_SPOKEN = {
    "kV": "kilovolts", "mV": "millivolts", "V": "volts",
    "kA": "kiloamperes", "mA": "milliamperes", "A": "amperes",
    "kW": "kilowatts", "MW": "megawatts", "W": "watts",
    "kJ": "kilojoules", "MJ": "megajoules", "J": "joules",
    "kHz": "kilohertz", "MHz": "megahertz", "Hz": "hertz",
    "km": "kilometers", "cm": "centimeters", "mm": "millimeters", "nm": "nanometers", "m": "meters",
    "kg": "kilograms", "g": "grams",
    "ms": "milliseconds", "s": "seconds",
    "N": "newtons", "T": "teslas", "Wb": "webers", "H": "henries", "F": "farads", "C": "coulombs", "K": "kelvin",
}
UNIT_EXPAND_RE = re.compile(
    r"\b(\d+(?:\.\d+)?)\s*(kV|mV|V|kA|mA|A|kW|MW|W|kJ|MJ|J|kHz|MHz|Hz|km|cm|mm|nm|m|kg|g|ms|s|N|T|Wb|H|F|C|K)\b"
)

COMMON_PDF_TYPOS = {
    "fore": "force",
    "foxes": "forces",
    "principle": "principal",
    "lends": "lens",
    "isin": "is in",
}

INTRO_OUTRO_PATTERNS = (
    r"^welcome to chapter",
    r"^this is (?:lesson|part) ",
    r"^in this part we will",
    r"^here (?:are|is) the (?:objectives|single most important|summary)",
    r"^that (?:brings us to the end|concludes this lesson)",
    r"^next,\s*we will look",
    r"^before you continue",
    r"^let'?s look at ",
    r"^now let'?s (?:define|look)",
)


# Track-to-PDF mapping matching app.js AUDIO_TRACK_SPEC & Ebook catalog
TRACK_GROUPS: List[Dict] = [
    # Grade 9
    {"grade": 9, "pdf": "g9-ch1-ebook", "base": "g9-ch1", "prefer_part": True, "count": 2},
    {"grade": 9, "pdf": "g9-ch2-1-levers", "base": "g9-ch2-1-levers", "single": True},
    {"grade": 9, "pdf": "g9-ch2-2-incline", "base": "g9-ch2-2-incline", "single": True},
    {"grade": 9, "pdf": "g9-ch2-3-gears", "pdf_alts": ["g9-ch2-4-gears", "g9-ch2-gears"], "base": "g9-ch2-3-gears", "single": True},
    {"grade": 9, "pdf": "g9-ch2-4-pulley", "pdf_alts": ["g9-ch2-3-pulley", "g9-ch2-pulley"], "base": "g9-ch2-4-pulley", "single": True},
    {"grade": 9, "pdf": "g9-ch2-5-wheel-axle", "base": "g9-ch2-5-wheel-axle", "single": True},
    {"grade": 9, "pdf": "g9-ch3-part1", "base": "g9-ch3-part1", "count": 2},
    {"grade": 9, "pdf": "g9-ch3-part2", "base": "g9-ch3-part2", "single": True},
    {"grade": 9, "pdf": "g9-ch4-part1", "base": "g9-ch4", "count": 3},
    {"grade": 9, "pdf": "g9-ch4-part2", "base": "g9-ch4-part2", "single": True},
    {"grade": 9, "pdf": "g9-ch5-1-light-ray", "base": "g9-ch5-1-light-ray", "single": True},
    {"grade": 9, "pdf": "g9-ch5-2-reflection", "base": "g9-ch5-2-reflection", "single": True},
    {"grade": 9, "pdf": "g9-ch5-3-mirrors", "base": "g9-ch5-3-mirrors", "single": True},
    {"grade": 9, "pdf": "g9-ch5-4-refraction", "base": "g9-ch5-4-refraction", "single": True},
    {"grade": 9, "pdf": "g9-ch5-5-lenses", "base": "g9-ch5-5-lenses", "count": 2},
    # Grade 12
    {"grade": 12, "pdf": "g12-ch1-l1-ebook", "base": "g12-ch1-l1", "count": 5},
    {"grade": 12, "pdf": "g12-ch1-l2-ebook", "base": "g12-ch1-l2", "count": 3},
    {"grade": 12, "pdf": "g12-ch1-l3-ebook", "base": "g12-ch1-l3", "count": 4},
    {"grade": 12, "pdf": "g12-ch2-l1-ebook", "base": "g12-ch2-l1", "count": 7},
    {"grade": 12, "pdf": "g12-ch2-l2-ebook", "base": "g12-ch2-l2", "count": 8},
    {"grade": 12, "pdf": "g12-ch3-l1-part1", "base": "g12-ch3-l1", "count": 12},
    {"grade": 12, "pdf": "g12-ch3-l1-part2", "base": "g12-ch3-l2", "count": 4},
    {"grade": 12, "pdf": "g12-ch3-l1-part2", "base": "g12-ch3-l3", "count": 4},
    {"grade": 12, "pdf": "g12-ch3-l2-ebook", "base": "g12-ch3-l4", "count": 14},
]


@dataclass
class WordBox:
    page: int
    text: str
    nx: float
    ny: float
    nw: float
    nh: float
    line_id: int = 0


@dataclass
class PdfSentence:
    idx: int
    page: int
    text: str
    norm_tokens: List[str]
    bboxes: List[List[float]] = field(default_factory=list)


def strip_audio_ext(filename: str) -> str:
    return re.sub(r"\.(mp3|m4a|wav|aac|ogg)(\.(mp3|m4a|wav|aac|ogg))?$", "", filename, flags=re.I)


def find_existing_pdf(stem: str, alts: Optional[List[str]] = None) -> Optional[Path]:
    names = [stem] + (alts or [])
    for n in names:
        for ext in (".pdf.pdf", ".pdf"):
            cand = EBOOK_DIR / f"{n}{ext}"
            if cand.exists():
                return cand
    return None


def find_existing_audio(base: str, track_num: int, prefer_part: bool = False, single: bool = False) -> Optional[Path]:
    stems = []
    if single:
        stems = [base, f"{base}-audio", f"{base}-1"]
    elif prefer_part:
        stems = [
            f"{base}-part{track_num}", f"{base}-part-{track_num}",
            f"{base}_{track_num}", f"{base}-{track_num}",
            f"{base}-audio{track_num}", f"{base}-audio-{track_num}",
        ]
    else:
        stems = [
            f"{base}-{track_num}", f"{base}-audio{track_num}", f"{base}-audio-{track_num}",
            f"{base}-part{track_num}", f"{base}-part-{track_num}", f"{base}_{track_num}",
        ]
        if track_num == 1:
            stems.extend([f"{base}-audio", base])
    if base == "g9-ch4":
        stems.extend([f"g9-ch4-part1-{track_num}", f"g9-ch4-part1-audio{track_num}"])
    elif base == "g9-ch5-5-lenses":
        stems.extend([f"g9-ch5-lenses-{track_num}", f"g9-lenses-{track_num}"])
    elif base == "g9-ch3-part1":
        stems.extend([f"g9-ch3-1-{track_num}", f"g9-ch3-part1_{track_num}"])

    for st in stems:
        for ext in AUDIO_EXTS:
            cand = AUDIO_DIR / f"{st}{ext}"
            if cand.exists():
                return cand
    return None


def normalize_text(text: str) -> str:
    s = unicodedata.normalize("NFKC", text or "")
    s = s.replace("\u2018", "'").replace("\u2019", "'").replace("\u201C", '"').replace("\u201D", '"')
    s = s.replace("\u2013", " ").replace("\u2014", " ")
    s = UNIT_EXPAND_RE.sub(lambda m: f"{m.group(1)} {UNIT_SPOKEN.get(m.group(2), m.group(2))}", s)
    for sym, rep in SYMBOL_WORD_MAP.items():
        if sym in s:
            s = s.replace(sym, rep)
    s = s.lower()
    for typo, fix in COMMON_PDF_TYPOS.items():
        s = re.sub(rf"\b{re.escape(typo)}\b", fix, s)
    s = re.sub(r"[^\w\u1780-\u17FF\u19E0-\u19FF\s]", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def tokenize(text: str) -> List[str]:
    norm = normalize_text(text)
    if not norm:
        return []
    out: List[str] = []
    for part in norm.split():
        if re.search(r"[\u1780-\u17FF]", part) and len(part) > 4:
            for i in range(0, len(part) - 2, 2):
                out.append(part[i:i + 3])
        else:
            out.append(part)
    return out


def is_header_or_footer(word_text: str, ny: float) -> bool:
    if ny < 0.065 or ny > 0.935:
        return True
    return False


def extract_pdf_sentences(pdf_path: Path, ocr_lang: str = "eng+khm") -> List[PdfSentence]:
    """Extract ordered sentences with line-merged normalized bounding boxes `[nx, ny, nw, nh]`."""
    doc = fitz.open(str(pdf_path))
    sentences: List[PdfSentence] = []

    for page_idx in range(len(doc)):
        page = doc[page_idx]
        page_num = page_idx + 1
        pw = float(page.rect.width or 1.0)
        ph = float(page.rect.height or 1.0)

        raw_words = page.get_text("words", sort=True)  # (x0, y0, x1, y1, word, block, line, word_no)
        words: List[WordBox] = []

        if len(raw_words) >= 8:
            for w in raw_words:
                x0, y0, x1, y1, txt, blk, ln, _ = w
                txt_clean = str(txt).strip()
                if not txt_clean:
                    continue
                ny = y0 / ph
                if is_header_or_footer(txt_clean, ny):
                    continue
                words.append(WordBox(
                    page=page_num,
                    text=txt_clean,
                    nx=max(0.0, min(1.0, x0 / pw)),
                    ny=max(0.0, min(1.0, ny)),
                    nw=max(0.004, min(1.0, (x1 - x0) / pw)),
                    nh=max(0.008, min(0.1, (y1 - y0) / ph)),
                    line_id=(blk * 10000 + ln),
                ))
        elif HAS_OCR:
            # Scanned PDF page fallback via Tesseract OCR
            pix = page.get_pixmap(dpi=250, alpha=False)
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            iw, ih = float(pix.width), float(pix.height)
            data = pytesseract.image_to_data(img, lang=ocr_lang, output_type=pytesseract.Output.DICT)
            for i in range(len(data["text"])):
                txt_clean = str(data["text"][i] or "").strip()
                conf = int(data["conf"][i]) if str(data["conf"][i]).lstrip("-").isdigit() else -1
                if not txt_clean or conf < 20:
                    continue
                ny = data["top"][i] / ih
                if is_header_or_footer(txt_clean, ny):
                    continue
                line_key = (
                    int(data["block_num"][i]) * 100000
                    + int(data["par_num"][i]) * 1000
                    + int(data["line_num"][i])
                )
                words.append(WordBox(
                    page=page_num,
                    text=txt_clean,
                    nx=max(0.0, min(1.0, data["left"][i] / iw)),
                    ny=max(0.0, min(1.0, ny)),
                    nw=max(0.004, min(1.0, data["width"][i] / iw)),
                    nh=max(0.008, min(0.1, data["height"][i] / ih)),
                    line_id=line_key,
                ))

        if not words:
            continue

        # Merge words into sentence chunks cleanly (splitting on sentence enders or large vertical gaps)
        cur_words: List[WordBox] = []
        prev_ny = words[0].ny

        def flush_sentence(buf: List[WordBox]):
            if not buf:
                return
            joined = " ".join(wb.text for wb in buf)
            joined = re.sub(r"\s+([,.;:?!។])", r"\1", joined).strip()
            toks = tokenize(joined)
            if len(toks) < 2 and len(joined) < 4:
                return

            # Merge bounding boxes per visual line so highlights never smear vertically across gaps
            by_line: Dict[Tuple[int, int], List[WordBox]] = {}
            for wb in buf:
                y_bucket = round(wb.ny * 120)
                key = (wb.line_id, y_bucket)
                by_line.setdefault(key, []).append(wb)

            line_boxes: List[List[float]] = []
            for group in by_line.values():
                min_x = min(w.nx for w in group)
                min_y = min(w.ny for w in group)
                max_x = max(w.nx + w.nw for w in group)
                max_y = max(w.ny + w.nh for w in group)
                line_boxes.append([
                    round(max(0.0, min_x - 0.004), 4),
                    round(max(0.0, min_y - 0.002), 4),
                    round(min(1.0, (max_x - min_x) + 0.008), 4),
                    round(min(1.0, (max_y - min_y) + 0.004), 4),
                ])
            line_boxes.sort(key=lambda b: (b[1], b[0]))

            sentences.append(PdfSentence(
                idx=len(sentences),
                page=page_num,
                text=joined,
                norm_tokens=toks,
                bboxes=line_boxes,
            ))

        for wb in words:
            if cur_words and abs(wb.ny - prev_ny) > 0.045:
                flush_sentence(cur_words)
                cur_words = []
            cur_words.append(wb)
            prev_ny = wb.ny

            txt = wb.text
            ends_sentence = txt.endswith((".", "!", "?", "។"))
            if ends_sentence and len(cur_words) >= 4:
                if not re.match(r"^(?:Fig|Eq|Sec|No|St|Dr|Prof|e\.g|i\.e|vs|pp|\d+)\.$", txt, re.I):
                    flush_sentence(cur_words)
                    cur_words = []

        flush_sentence(cur_words)

    doc.close()
    return sentences


def transcribe_audio_segments(model: WhisperModel, audio_path: Path, language: Optional[str] = None) -> List[Dict]:
    """Transcribe MP3 with empirical timestamps via faster-whisper."""
    segments, _info = model.transcribe(
        str(audio_path),
        language=language,
        word_timestamps=True,
        vad_filter=True,
        vad_parameters={"min_silence_duration_ms": 300},
    )
    out = []
    for seg in segments:
        text = str(seg.text or "").strip()
        if not text:
            continue
        out.append({
            "start": round(float(seg.start), 3),
            "end": round(float(seg.end), 3),
            "text": text,
        })
    return out


def is_spoken_scaffold(text: str) -> bool:
    low = normalize_text(text)
    return any(re.match(pat, low) for pat in INTRO_OUTRO_PATTERNS)


def similarity_score(seg_tokens: List[str], sent: PdfSentence) -> float:
    if not seg_tokens or not sent.norm_tokens:
        return 0.0
    a = set(seg_tokens)
    b = set(sent.norm_tokens)
    overlap = len(a & b)
    if overlap == 0:
        return 0.0
    recall = overlap / max(1, len(a))
    precision = overlap / max(1, len(b))
    f1 = (2 * recall * precision) / (recall + precision)
    seq_bonus = difflib.SequenceMatcher(None, seg_tokens[:16], sent.norm_tokens[:16]).quick_ratio()
    return 0.72 * f1 + 0.28 * seq_bonus


def align_segments_to_pdf(
    segments: List[Dict],
    pdf_sentences: List[PdfSentence],
    hint_start_idx: int = 0,
    hint_end_idx: Optional[int] = None,
) -> Tuple[List[Dict], float]:
    """Monotonically align Whisper timestamped segments onto PDF sentences."""
    if not segments or not pdf_sentences:
        return [], 0.0

    total_sents = len(pdf_sentences)
    lo_bound = max(0, hint_start_idx)
    hi_bound = total_sents if hint_end_idx is None else min(total_sents, hint_end_idx)

    # Phase 1: anchor coarse region across the whole PDF if part hint is wide or absent
    anchor_hits: List[int] = []
    for seg in segments[: min(15, len(segments))]:
        if is_spoken_scaffold(seg["text"]):
            continue
        toks = tokenize(seg["text"])
        if len(toks) < 4:
            continue
        best_i, best_sc = -1, 0.0
        for s in pdf_sentences:
            sc = similarity_score(toks, s)
            if sc > best_sc:
                best_sc = sc
                best_i = s.idx
        if best_sc >= 0.48 and best_i >= 0:
            anchor_hits.append(best_i)

    cursor = min(anchor_hits) if anchor_hits else lo_bound
    cues: List[Dict] = []
    matched_count = 0

    for seg in segments:
        txt = seg["text"]
        if is_spoken_scaffold(txt):
            continue
        toks = tokenize(txt)
        if len(toks) < 3:
            continue

        # Search monotonic forward window first (allow slight backtrack up to 3 sentences for figure callouts)
        win_start = max(0, cursor - 3)
        win_end = min(total_sents, cursor + 28)

        best_sent: Optional[PdfSentence] = None
        best_score = 0.0
        for idx in range(win_start, win_end):
            sc = similarity_score(toks, pdf_sentences[idx])
            if sc > best_score:
                best_score = sc
                best_sent = pdf_sentences[idx]

        # Wide fallback search if narrator jumped to another section or skipped exercises
        if best_score < 0.38:
            for idx in range(lo_bound, hi_bound):
                sc = similarity_score(toks, pdf_sentences[idx])
                if sc > best_score:
                    best_score = sc
                    best_sent = pdf_sentences[idx]

        if best_sent and best_score >= 0.34:
            matched_count += 1
            cursor = max(cursor, best_sent.idx)
            # Coalesce adjacent segments that map to the exact same PDF sentence
            if (
                cues
                and cues[-1]["page"] == best_sent.page
                and cues[-1]["pdfText"] == best_sent.text
                and seg["start"] - cues[-1]["end"] <= 1.2
            ):
                cues[-1]["end"] = seg["end"]
                cues[-1]["spokenText"] = (cues[-1]["spokenText"] + " " + txt).strip()
            else:
                cues.append({
                    "id": len(cues),
                    "start": seg["start"],
                    "end": seg["end"],
                    "page": best_sent.page,
                    "pdfText": best_sent.text,
                    "spokenText": txt,
                    "bboxes": best_sent.bboxes,
                    "confidence": round(best_score, 3),
                })

    coverage = matched_count / max(1, len(segments))
    return cues, round(coverage, 3)


def discover_jobs(grade_filter: Optional[int], track_filter: Optional[str]) -> List[Dict]:
    jobs = []
    for grp in TRACK_GROUPS:
        if grade_filter and grp["grade"] != grade_filter:
            continue
        pdf_path = find_existing_pdf(grp["pdf"], grp.get("pdf_alts"))
        if not pdf_path:
            continue
        if grp.get("single"):
            audio_path = find_existing_audio(grp["base"], 1, single=True)
            if not audio_path:
                continue
            stem = strip_audio_ext(audio_path.name)
            if track_filter and track_filter.lower() not in stem.lower():
                continue
            jobs.append({
                "grade": grp["grade"],
                "audio": audio_path,
                "pdf": pdf_path,
                "stem": stem,
                "part_index": 0,
                "part_count": 1,
            })
        else:
            count = grp.get("count", 1)
            for idx in range(count):
                audio_path = find_existing_audio(grp["base"], idx + 1, prefer_part=grp.get("prefer_part", False))
                if not audio_path:
                    continue
                stem = strip_audio_ext(audio_path.name)
                if track_filter and track_filter.lower() not in stem.lower():
                    continue
                jobs.append({
                    "grade": grp["grade"],
                    "audio": audio_path,
                    "pdf": pdf_path,
                    "stem": stem,
                    "part_index": idx,
                    "part_count": count,
                })
    return jobs


def main():
    parser = argparse.ArgumentParser(description="Generate empirical audio-to-PDF sentence timestamps for Grade 9 & 12.")
    parser.add_argument("--all", action="store_true", help="Process all Grade 9 & Grade 12 audio tracks.")
    parser.add_argument("--grade", type=int, choices=[9, 12], help="Process only Grade 9 or Grade 12 tracks.")
    parser.add_argument("--track", type=str, help="Substring match for a single track stem (e.g. g9-ch1-part1).")
    parser.add_argument("--audio", type=Path, help="Explicit single audio MP3 path.")
    parser.add_argument("--pdf", type=Path, help="Explicit single PDF path paired with --audio.")
    parser.add_argument("--model", type=str, default="small", help="Whisper model size (tiny, base, small, medium).")
    parser.add_argument("--device", type=str, default="auto", help="Inference device (auto, cpu, cuda).")
    parser.add_argument("--language", type=str, default=None, help="Optional language hint (e.g. en, km).")
    parser.add_argument("--ocr-lang", type=str, default="eng+khm", help="Tesseract OCR language pack for scanned pages.")
    args = parser.parse_args()

    if args.audio:
        if not args.pdf:
            raise SystemExit("--pdf is required when --audio is specified.")
        jobs = [{
            "grade": args.grade or 9,
            "audio": args.audio.resolve(),
            "pdf": args.pdf.resolve(),
            "stem": strip_audio_ext(args.audio.name),
            "part_index": 0,
            "part_count": 1,
        }]
    else:
        if not args.all and not args.grade and not args.track:
            parser.print_help()
            return
        jobs = discover_jobs(args.grade, args.track)

    if not jobs:
        print("No matching Grade 9 / Grade 12 audio + PDF pairs found.")
        return

    SYNC_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Loading Whisper model '{args.model}' on {args.device}...")
    whisper_model = WhisperModel(args.model, device=args.device)

    pdf_cache: Dict[Path, List[PdfSentence]] = {}
    for idx, job in enumerate(jobs, start=1):
        audio_path: Path = job["audio"]
        pdf_path: Path = job["pdf"]
        stem: str = job["stem"]

        print(f"[{idx}/{len(jobs)}] Aligning {audio_path.name} <-> {pdf_path.name}...")
        if pdf_path not in pdf_cache:
            pdf_cache[pdf_path] = extract_pdf_sentences(pdf_path, ocr_lang=args.ocr_lang)
        pdf_sents = pdf_cache[pdf_path]

        segments = transcribe_audio_segments(whisper_model, audio_path, language=args.language)
        part_count = max(1, job["part_count"])
        slice_size = max(1, math.ceil(len(pdf_sents) / part_count))
        hint_start = max(0, job["part_index"] * slice_size - 6)
        hint_end = min(len(pdf_sents), (job["part_index"] + 1) * slice_size + 12)

        cues, coverage = align_segments_to_pdf(segments, pdf_sents, hint_start, hint_end)

        out_path = SYNC_DIR / f"{stem}.sync.json"
        payload = {
            "version": 1,
            "grade": job["grade"],
            "trackId": stem,
            "audioUrl": f"audiobooks/{audio_path.name}",
            "ebookUrl": f"ebooks/{pdf_path.name}",
            "granularity": "sentence",
            "alignmentCoverage": coverage,
            "cues": cues,
        }
        out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"   -> Saved {out_path.relative_to(ROOT_DIR)} ({len(cues)} synced sentences, coverage={coverage:.0%})")


if __name__ == "__main__":
    main()
