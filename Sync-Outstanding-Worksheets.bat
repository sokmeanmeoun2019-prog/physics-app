@echo off
title Sync Outstanding Worksheets (Grade 9 & Grade 12)
node -e "require('./outstanding-worksheets-server').syncAll(process.cwd()); console.log('Outstanding Worksheet catalogs synced for Grade 9 and Grade 12!');"
pause
