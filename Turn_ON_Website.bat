@echo off
title Turn ON Website - WIS Physics Hub
cd /d "%~dp0"
color 0A
echo =======================================================
echo   WEBSITE ACCESS CONTROL - TURN WEBSITE [ON]
echo =======================================================
echo.
echo   This will RESTORE normal student access to the website
echo   and all Grade 7 - 12 lessons, games, and materials.
echo.
choice /c YN /n /m "Press Y to confirm turning the website ON (or N to cancel): "
if errorlevel 2 (
    echo.
    echo [CANCELLED] No changes were made. Website remains unchanged.
    echo.
    pause
    exit /b 0
)
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0site-access-control.ps1" -Action ON -SkipConfirm
echo.
pause
