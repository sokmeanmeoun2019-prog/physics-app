@echo off
title WIS Physics Learning Hub - Local Preview
cd /d "%~dp0"
echo =======================================================
echo   Starting WIS Physics Learning Hub Local Server...
echo   Browser will open automatically: http://localhost:3000
echo =======================================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -Command "$c = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue; if ($c) { $c | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }; Start-Sleep -Milliseconds 400 }"
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:3000'"
node server.js
pause
