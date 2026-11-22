@echo off
title Sync My Textbooks (Grades 9-12)
node -e "require('./my-textbooks-server').syncAll(process.cwd()); console.log('My Textbook catalogs synced for Grades 9, 10, 11, and 12!');"
pause
