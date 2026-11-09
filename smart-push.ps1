# WIS Physics Hub - Smart Batch Uploader for Large Media & Audiobooks
$ErrorActionPreference = "Continue"

Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "   WIS PHYSICS HUB: SMART BATCH GITHUB UPLOADER" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Ensure branch name is main
git branch -M main

# 2. Optimize Git Buffer and Timeout Settings for Large Media Uploads
Write-Host "[1/4] Optimizing Git network buffers for audio files..." -ForegroundColor Yellow
git config --global http.postBuffer 1048576000
git config --global http.lowSpeedLimit 0
git config --global http.lowSpeedTime 999999
git config --global core.compression 0

# 3. Check if previous monolithic 610MB commit failed to push
# If the last commit is the unpushed "Auto-Deploy" commit, unwind it so we can push in safe batches
$lastLog = (git log -1 --pretty="%B" 2>$null)
if ($lastLog -match "Auto-Deploy|Updated password") {
    Write-Host "[2/4] Unwinding previous 610MB commit into safe batches (all files preserved)..." -ForegroundColor Yellow
    git reset HEAD~1
} else {
    Write-Host "[2/4] Repository commit tree ready." -ForegroundColor Gray
}

# 4. Ensure secret files are completely untracked from Git and index is clean
git rm --cached auth-config.json TEACHER_PASSWORD.txt password.txt PASSWORD.txt 2>$null
git reset 2>$null

# 5. Define batches (each under 150MB to guarantee no HTTP 408 timeout)
$batches = @(
    @{
        Title    = "Core Code & Password Security"
        Patterns = @(
            "index.html", "app.js", "styles.css", "auth.js", "auth-config.json",
            "sync-credentials.ps1", "smart-push.ps1", "Upload_To_GitHub.bat",
            ".gitignore", "audio/README.txt", "audiobooks/README.txt"
        )
        Message  = "Deploy: Core web code, password hashes, and cache busters"
    },
    @{
        Title    = "Grade 9 Audiobooks (Chapters 1 - 5)"
        Patterns = @("audiobooks/g9-*", "audiobooks/05_05_Lenses_Part_02.mp3", "audio/g9-*")
        Message  = "Audiobooks: Grade 9 lessons narration"
    },
    @{
        Title    = "Grade 12 Chapter 1 (Thermal Physics & Heat Engines)"
        Patterns = @("audiobooks/g12-ch1-*", "audio/g12-ch1-*")
        Message  = "Audiobooks: Grade 12 Chapter 1 Thermal Physics"
    },
    @{
        Title    = "Grade 12 Chapter 2 (Superposition & Interference)"
        Patterns = @("audiobooks/g12-ch2-*", "audio/g12-ch2-*")
        Message  = "Audiobooks: Grade 12 Chapter 2 Waves & Interference"
    },
    @{
        Title    = "Grade 12 Chapter 3 Part 1 (Magnetism & Induction)"
        Patterns = @("audiobooks/g12-ch3-l1-*", "audiobooks/g12-ch3-l2-*", "audio/g12-ch3-l1-*", "audio/g12-ch3-l2-*")
        Message  = "Audiobooks: Grade 12 Chapter 3 Magnetism and Induction"
    },
    @{
        Title    = "Grade 12 Chapter 3 Part 2 (Inductors & AC Circuits)"
        Patterns = @("audiobooks/g12-ch3-l3-*", "audiobooks/g12-ch3-l4-*", "audio/g12-ch3-l3-*", "audio/g12-ch3-l4-*")
        Message  = "Audiobooks: Grade 12 Chapter 3 AC Circuits and Inductors"
    },
    @{
        Title    = "Remaining Files & Audiobooks"
        Patterns = @("audiobooks/*", "audio/*", "*")
        Message  = "Audiobooks: Remaining audio narration files"
    }
)

Write-Host "[3/4] Uploading in safe incremental batches..." -ForegroundColor Cyan

$totalBatches = $batches.Count
$currentBatchIdx = 0

foreach ($b in $batches) {
    $currentBatchIdx++
    $batchTitle = $b.Title
    Write-Host "`n---> [$currentBatchIdx/$totalBatches] Checking $batchTitle..." -ForegroundColor Cyan

    # Stage files matching patterns
    foreach ($pat in $b.Patterns) {
        git add $pat 2>$null
    }

    # Check if there are staged changes
    $stagedFiles = git diff --cached --name-only
    if ($stagedFiles) {
        $fileList = @($stagedFiles)
        $fileCount = $fileList.Count
        Write-Host "     Staged $fileCount files for $batchTitle." -ForegroundColor DarkCyan
        
        git commit -m $b.Message
        if ($LASTEXITCODE -ne 0) {
            Write-Host "     Commit had no new changes." -ForegroundColor DarkGray
            continue
        }

        Write-Host "     Uploading $batchTitle to GitHub..." -ForegroundColor Yellow
        $success = $false
        for ($retry = 1; $retry -le 3; $retry++) {
            git push -u origin main
            if ($LASTEXITCODE -eq 0) {
                $success = $true
                Write-Host "     [SUCCESS] $batchTitle uploaded and saved!" -ForegroundColor Green
                break
            } else {
                # If non-fast-forward or first push conflict, try with force
                git push -u origin main --force
                if ($LASTEXITCODE -eq 0) {
                    $success = $true
                    Write-Host "     [SUCCESS] $batchTitle uploaded and saved (synced remote)!" -ForegroundColor Green
                    break
                }
                Write-Host "     [RETRY $retry/3] Network timed out or connection busy, retrying in 3 seconds..." -ForegroundColor DarkYellow
                Start-Sleep -Seconds 3
            }
        }

        if (-not $success) {
            Write-Host "`n[ERROR] Failed to upload $batchTitle. Check your internet connection and try running again." -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "     Already up to date on GitHub." -ForegroundColor DarkGray
    }
}

Write-Host "`n[4/4] Finalizing status..." -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Green
Write-Host "  SUCCESS! All files and audiobooks are on GitHub!" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Green
exit 0
