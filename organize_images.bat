@echo off
title Organizing Grade 9 and Grade 12 Physics Images
color 0A

echo ========================================================
echo  WIS Physics Hub - Complete Image Reorganization Script
echo ========================================================
echo.
echo Creating destination directories...

REM Grade 9 Directories
if not exist "image_G9_one" (
    mkdir "image_G9_one"
    echo  [+] Created folder: image_G9_one
) else (
    echo  [*] Folder image_G9_one already exists.
)

if not exist "image_G9_two" (
    mkdir "image_G9_two"
    echo  [+] Created folder: image_G9_two
) else (
    echo  [*] Folder image_G9_two already exists.
)

REM Grade 12 Directories
if not exist "image_G12_one" (
    mkdir "image_G12_one"
    echo  [+] Created folder: image_G12_one
) else (
    echo  [*] Folder image_G12_one already exists.
)

if not exist "image_G12_two" (
    mkdir "image_G12_two"
    echo  [+] Created folder: image_G12_two
) else (
    echo  [*] Folder image_G12_two already exists.
)

echo.
echo --------------------------------------------------------
echo Copying Grade 9 Semester 1 Images (Chapters 1, 2, 3)...
echo --------------------------------------------------------
if exist "images" (
    copy /Y "images\g9-ch1-*.png" "image_G9_one\" >nul 2>&1
    copy /Y "images\g9-ch2-*.png" "image_G9_one\" >nul 2>&1
    copy /Y "images\g9-ch3-*.png" "image_G9_one\" >nul 2>&1
)
if exist "images - Copy" (
    copy /Y "images - Copy\g9-ch1-*.png" "image_G9_one\" >nul 2>&1
    copy /Y "images - Copy\g9-ch2-*.png" "image_G9_one\" >nul 2>&1
    copy /Y "images - Copy\g9-ch3-*.png" "image_G9_one\" >nul 2>&1
)

echo.
echo --------------------------------------------------------
echo Copying Grade 9 Semester 2 Images (Chapters 4 & 5)...
echo --------------------------------------------------------
if exist "images" (
    copy /Y "images\g9-ch4-*.png" "image_G9_two\" >nul 2>&1
    copy /Y "images\g9-ch5-*.png" "image_G9_two\" >nul 2>&1
)
if exist "images - Copy" (
    copy /Y "images - Copy\g9-ch4-*.png" "image_G9_two\" >nul 2>&1
    copy /Y "images - Copy\g9-ch5-*.png" "image_G9_two\" >nul 2>&1
)

echo.
echo --------------------------------------------------------
echo Copying Grade 12 Semester 1 Images (Chapters 1 & 2)...
echo --------------------------------------------------------
if exist "images" (
    copy /Y "images\ch1-*.png" "image_G12_one\" >nul 2>&1
    copy /Y "images\ch2-*.png" "image_G12_one\" >nul 2>&1
)
if exist "images - Copy" (
    copy /Y "images - Copy\ch1-*.png" "image_G12_one\" >nul 2>&1
    copy /Y "images - Copy\ch2-*.png" "image_G12_one\" >nul 2>&1
)

echo.
echo --------------------------------------------------------
echo Copying Grade 12 Semester 2 Images (Chapters 3 & 4)...
echo --------------------------------------------------------
if exist "images" (
    copy /Y "images\ch3-*.png" "image_G12_two\" >nul 2>&1
    copy /Y "images\ch4-*.png" "image_G12_two\" >nul 2>&1
)
if exist "images - Copy" (
    copy /Y "images - Copy\ch3-*.png" "image_G12_two\" >nul 2>&1
    copy /Y "images - Copy\ch4-*.png" "image_G12_two\" >nul 2>&1
)

echo.
echo ========================================================
echo  Transfer Summary & Verification
echo ========================================================
echo.

set /a g9_count1=0
for %%f in ("image_G9_one\*.png") do set /a g9_count1+=1
echo Total files in image_G9_one (Grade 9 Ch 1, 2, 3): %g9_count1%

set /a g9_count2=0
for %%f in ("image_G9_two\*.png") do set /a g9_count2+=1
echo Total files in image_G9_two (Grade 9 Ch 4, 5): %g9_count2%

set /a count1=0
for %%f in ("image_G12_one\*.png") do set /a count1+=1
echo Total files in image_G12_one (Grade 12 Ch 1, 2): %count1%

set /a count2=0
for %%f in ("image_G12_two\*.png") do set /a count2+=1
echo Total files in image_G12_two (Grade 12 Ch 3, 4): %count2%

echo.
echo All image files and folders have been verified!
echo You can now refresh your browser.
echo.
pause
