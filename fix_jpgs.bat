@echo off
echo Fixing JPG files that are missing PNG versions...
cd /d "%~dp0"
powershell -Command "Get-ChildItem -Filter '*.jpg' | ForEach-Object { $newName = $_.Name -replace '\.jpg$', '.png'; if (-not (Test-Path $newName)) { Rename-Item $_.Name -NewName $newName } }"
powershell -Command "Get-ChildItem -Filter '*.jpeg' | ForEach-Object { $newName = $_.Name -replace '\.jpeg$', '.png'; if (-not (Test-Path $newName)) { Rename-Item $_.Name -NewName $newName } }"
echo.
echo All JPG files have been safely renamed to PNG!
pause
