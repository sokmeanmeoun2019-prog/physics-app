@echo off
title Turn OFF Website - WIS Physics Hub
cd /d "%~dp0"
color 0C
echo =======================================================
echo   WEBSITE ACCESS CONTROL - TURN WEBSITE [OFF]
echo =======================================================
echo.
echo   This will IMMEDIATELY disable student access on both
echo   your local server and GitHub Pages for exam mode.
echo.
choice /c YN /n /m "Press Y to confirm turning the website OFF (or N to cancel): "
if errorlevel 2 (
    echo.
    echo [CANCELLED] No changes were made. Website remains unchanged.
    echo.
    pause
    exit /b 0
)
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0site-access-control.ps1" -Action OFF -SkipConfirm
echo.
pause
