@echo off
title Updating WIS Physics Hub (v4.2)...
echo ========================================================
echo   Updating WIS Physics Learning Hub on GitHub (v4.2)...
echo ========================================================
cd /d "d:\Building App\Summarize formula_web"

echo.
echo 1. Staging changed files...
git add -A

echo.
echo 2. Committing changes...
git commit -m "Deploy official curriculum textbooks: Add dedicated Grade 7, 8, 10, and 11 textbook PDFs to Ebook reader (v4.2)"

echo.
echo 3. Pushing to GitHub (origin main)...
git push origin main

echo.
echo ========================================================
if %ERRORLEVEL% equ 0 (
    echo   SUCCESS! Your live website has been updated to v4.1!
    echo   GitHub Pages will reflect changes in 1-2 minutes.
) else (
    echo   Push encountered an error. Please check your network/login.
)
echo ========================================================
echo.
pause
