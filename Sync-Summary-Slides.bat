@echo off
cd /d "%~dp0"
echo Syncing Summary Slides folders into catalog.json for Grade 9 and Grade 12...
node -e "require('./summary-slides-server').syncAll(process.cwd()); console.log('Done! catalog.json updated for Grade 9 and Grade 12.');"
pause
