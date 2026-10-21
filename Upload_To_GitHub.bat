@echo off
title Push All Files to GitHub
cd /d "%~dp0"
echo =======================================================
echo   WIS Physics Hub - 1-Click GitHub Updater
echo =======================================================
echo.

:: 1. Ensure User Identity is Configured
git config --global user.name "sokmeanmeoun2019-prog"
for /f "tokens=*" %%a in ('git config user.email') do set CUR_EMAIL=%%a
if "%CUR_EMAIL%"=="" (
    echo Git needs an email address for your commits.
    set /p INPUT_EMAIL="Enter your GitHub email (e.g., yourname@gmail.com): "
    if not "%INPUT_EMAIL%"=="" (
        git config --global user.email "%INPUT_EMAIL%"
    ) else (
        git config --global user.email "sokmeanmeoun2019-prog@users.noreply.github.com"
    )
)

:: 2. Ensure Remote Origin is Configured
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Setting remote origin to physics-app...
    git remote add origin https://github.com/sokmeanmeoun2019-prog/physics-app.git
)

echo.
echo [1/3] Staging all files and folders (including large PDFs)...
git add -A

echo.
echo [2/3] Committing changes...
git commit -m "Complete update: Grade 9 & 12 figures, curriculum data, and ebooks"

echo.
echo [3/3] Pushing to GitHub (main branch)...
git branch -M main
git push -u origin main --force

if %errorlevel% equ 0 (
    echo.
    echo =======================================================
    echo   SUCCESS! All updates have been pushed to GitHub.
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo   Something went wrong during push. Check the message above.
    echo =======================================================
)

echo.
pause
