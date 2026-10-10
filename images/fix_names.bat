@echo off
echo Fixing specific typos safely...
cd /d "%~dp0"

:: Fix double extensions only for files starting with 'ch'
for %%F in (ch*.png.png) do (
    ren "%%F" "%%~nF"
)
for %%F in (ch*.png.jpg) do (
    ren "%%F" "%%~nF"
)

:: Safely fix the capital I mistake ONLY if it comes after the dash (like ch2-I2)
powershell -Command "Get-ChildItem -Filter 'ch*.png' | Rename-Item -NewName { $_.Name.ToLower() -replace '-i', '-l' } -ErrorAction SilentlyContinue"

echo.
echo All done! The script safely fixed only the equation images.
pause
