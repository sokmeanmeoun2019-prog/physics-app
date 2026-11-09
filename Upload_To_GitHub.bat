@echo off
title Push All Files to GitHub - WIS Physics Hub
cd /d "%~dp0"
echo =======================================================
echo   WIS Physics Hub - 1-Click GitHub Updater
echo =======================================================
echo.

:: 1. Auto-synchronize credentials and generate fresh cache-busters
echo [0/3] Synchronizing password and cache busters...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0sync-credentials.ps1"
if %errorlevel% neq 0 (
    echo [WARNING] PowerShell sync had a warning, continuing with push...
)

:: 2. Ensure User Identity is Configured
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

:: 3. Ensure Remote Origin is Configured
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Setting remote origin to physics-app...
    git remote add origin https://github.com/sokmeanmeoun2019-prog/physics-app.git
)

:: 2.5 Ensure secret files are completely untracked from Git
git rm --cached auth-config.json TEACHER_PASSWORD.txt password.txt PASSWORD.txt >nul 2>&1

echo.
echo [1/2] Launching Smart Batch Push Engine for Audiobooks and Code...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0smart-push.ps1"

if %errorlevel% equ 0 (
    echo.
    echo =======================================================
    echo   SUCCESS! All updates have been pushed to GitHub.
    echo =======================================================
    echo.
    echo   [IMPORTANT DEPLOYMENT NOTICE]
    echo   1. GitHub Pages takes 60 to 90 seconds to deploy online.
    echo   2. When opening your website, press Ctrl + F5
    echo      or open an Incognito window (Ctrl + Shift + N)
    echo      to ensure your browser loads the newest version.
    echo   3. Plaintext password is removed from online code (Zero Exposure).
    echo   4. All Grade 9 and Grade 12 audiobooks are now live!
    echo   5. Your password in TEACHER_PASSWORD.txt is active!
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo   Something went wrong during push. Check the message above.
    echo =======================================================
)

echo.
pause
