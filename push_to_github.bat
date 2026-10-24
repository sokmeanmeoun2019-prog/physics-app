@echo off
echo ========================================================
echo   Updating WIS Physics Learning Hub on GitHub...
echo ========================================================
cd /d "d:\Building App\Summarize formula_web"

echo.
echo 1. Staging changed files...
git add .

echo.
echo 2. Committing changes...
git commit -m "Fix Grade 9 and Grade 12 Ebook touch scrolling on iPad and phone with HTML5 canvas reader"

echo.
echo 3. Pushing to GitHub (origin main)...
git push origin main

echo.
echo ========================================================
if %ERRORLEVEL% equ 0 (
    echo   SUCCESS! Your live website has been updated!
    echo   GitHub Pages will reflect changes in 1-2 minutes.
) else (
    echo   Push encountered an error. Please check your network/login.
)
echo ========================================================
pause
