@echo off
title Sync KH-Ebook Folders
node -e "require('./kh-ebooks-server').syncAll(process.cwd()); console.log('KH-Ebook catalogs synced successfully for Grades 7-12!');"
pause
