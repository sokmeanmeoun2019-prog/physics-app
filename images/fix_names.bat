@echo off
echo Fixing image names...
cd /d "%~dp0"

:: Rename .png.png to .png
for %%F in (*.png.png) do (
    ren "%%F" "%%~nF"
)

:: Rename .png.jpg to .png
for %%F in (*.png.jpg) do (
    ren "%%F" "%%~nF"
)

:: Rename .png.jpeg to .png
for %%F in (*.png.jpeg) do (
    ren "%%F" "%%~nF"
)

echo.
echo All done! Your files have been fixed.
pause
