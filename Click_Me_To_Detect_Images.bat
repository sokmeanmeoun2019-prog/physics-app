@echo off
chcp 65001 >nul
title Grade 9 Image Detector
echo ======================================================
echo  Detecting Grade 9 Image Files...
echo ======================================================
echo.

echo [IMAGE_G9_ONE] > "detected_g9_images.txt"
if exist "image_G9_one" (
    dir /b /a-d "image_G9_one" >> "detected_g9_images.txt" 2>&1
) else (
    echo FOLDER_NOT_FOUND >> "detected_g9_images.txt"
)

echo. >> "detected_g9_images.txt"
echo [IMAGE_G9_TWO] >> "detected_g9_images.txt"
if exist "image_G9_two" (
    dir /b /a-d "image_G9_two" >> "detected_g9_images.txt" 2>&1
) else (
    echo FOLDER_NOT_FOUND >> "detected_g9_images.txt"
)

echo Success! File list saved to detected_g9_images.txt.
echo You can now return to the chat window.
echo.
pause
