@echo off
title Sync MOEYS Supplementary (Grade 12 Only)
node -e "require('./moeys-supplementary-server').syncAll(process.cwd()); console.log('MOEYS Supplementary catalog synced for Grade 12!');"
pause
