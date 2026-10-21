@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0worksheets"

echo ==============================================
echo Fixing Worksheet PDF Filenames...
echo ==============================================

rem Fix double extensions
ren "ch1-l1-worksheet.pdf.pdf" "ch1-l1-worksheet.pdf" 2>nul
ren "ch1 l1-worksheet.pdf.pdf" "ch1-l1-worksheet.pdf" 2>nul
ren "ch1-l2-worksheet.pdf.pdf" "ch1-l2-worksheet.pdf" 2>nul
ren "ch1-l3-worksheet.pdf.pdf" "ch1-l3-worksheet.pdf" 2>nul
ren "ch1 l3-worksheet.pdf.pdf" "ch1-l3-worksheet.pdf" 2>nul
ren "ch2-l1-worksheet.pdf.pdf" "ch2-l1-worksheet.pdf" 2>nul
ren "ch2-l2-worksheet.pdf.pdf" "ch2-l2-worksheet.pdf" 2>nul
ren "ch3-l1-worksheet.pdf.pdf" "ch3-l1-worksheet.pdf" 2>nul
ren "ch3-l2-worksheet.pdf.pdf" "ch3-l2-worksheet.pdf" 2>nul
ren "ch3 l2-worksheet.pdf.pdf" "ch3-l2-worksheet.pdf" 2>nul
ren "ch4-l1-worksheet.pdf.pdf" "ch4-l1-worksheet.pdf" 2>nul
ren "ch4-l2-worksheet.pdf.pdf" "ch4-l2-worksheet.pdf" 2>nul
ren "ch4-l3-worksheet.pdf.pdf" "ch4-l3-worksheet.pdf" 2>nul

rem Also fix any remaining files with double .pdf
for %%f in (*.pdf.pdf) do (
    set "fname=%%~nf"
    ren "%%f" "!fname!" 2>nul
)

echo.
echo Done! All double .pdf extensions and spaces have been fixed.
echo Here are your clean files:
dir /b *.pdf
echo.
pause
