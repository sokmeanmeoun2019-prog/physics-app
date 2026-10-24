@echo off
title Updating WIS Physics Hub (v3.5)...
echo ========================================================
echo   Updating WIS Physics Learning Hub on GitHub (v3.5)...
echo ========================================================
cd /d "d:\Building App\Summarize formula_web"

echo.
echo 1. Staging changed files...
git add -A

echo.
echo 2. Committing changes...
git commit -m "Deploy v3.5: Multi-page touch scroll and pinch zoom for iPad and mobile"

echo.
echo 3. Pushing to GitHub (origin main)...
git push origin main

echo.
echo ========================================================
if %ERRORLEVEL% equ 0 (
    echo   SUCCESS! Your live website has been updated to v3.5!
    echo   GitHub Pages will reflect changes in 1-2 minutes.
) else (
    echo   Push encountered an error. Please check your network/login.
)
echo ========================================================
echo.
pause