@echo off
title Updating WIS Physics Hub (v3.8)...
echo ========================================================
echo   Updating WIS Physics Learning Hub on GitHub (v3.8)...
echo ========================================================
cd /d "d:\Building App\Summarize formula_web"

echo.
echo 1. Staging changed files...
git add -A

echo.
echo 2. Committing changes...
git commit -m "Deploy v3.8: Restore prominent Fullscreen Reading View button, floating exit pill, and auto-sync eBook reader across iPad, iPhone and Desktop"

echo.
echo 3. Pushing to GitHub (origin main)...
git push origin main

echo.
echo ========================================================
if %ERRORLEVEL% equ 0 (
    echo   SUCCESS! Your live website has been updated to v3.8!
    echo   GitHub Pages will reflect changes in 1-2 minutes.
) else (
    echo   Push encountered an error. Please check your network/login.
)
echo ========================================================
echo.
pause
