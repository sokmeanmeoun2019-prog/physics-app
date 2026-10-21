# WIS Physics Hub - Complete Image Reorganization Script (PowerShell)
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " WIS Physics Hub - Image Reorganization Script" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

$destG9One  = Join-Path $PSScriptRoot "image_G9_one"
$destG9Two  = Join-Path $PSScriptRoot "image_G9_two"
$destG12One = Join-Path $PSScriptRoot "image_G12_one"
$destG12Two = Join-Path $PSScriptRoot "image_G12_two"

$allDirs = @($destG9One, $destG9Two, $destG12One, $destG12Two)
foreach ($dir in $allDirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
        Write-Host "[+] Created folder: $(Split-Path $dir -Leaf)" -ForegroundColor Green
    } else {
        Write-Host "[*] Folder $(Split-Path $dir -Leaf) already exists." -ForegroundColor Yellow
    }
}

$sourceFolders = @(
    (Join-Path $PSScriptRoot "images"),
    (Join-Path $PSScriptRoot "images - Copy")
)

Write-Host "`nCopying Grade 9 Semester 1 Images (Chapters 1, 2, 3)..." -ForegroundColor Cyan
foreach ($src in $sourceFolders) {
    if (Test-Path $src) {
        Get-ChildItem -Path $src -Filter "g9-ch1-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG9One -Force
        Get-ChildItem -Path $src -Filter "g9-ch2-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG9One -Force
        Get-ChildItem -Path $src -Filter "g9-ch3-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG9One -Force
    }
}

Write-Host "Copying Grade 9 Semester 2 Images (Chapters 4 & 5)..." -ForegroundColor Cyan
foreach ($src in $sourceFolders) {
    if (Test-Path $src) {
        Get-ChildItem -Path $src -Filter "g9-ch4-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG9Two -Force
        Get-ChildItem -Path $src -Filter "g9-ch5-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG9Two -Force
    }
}

Write-Host "Copying Grade 12 Semester 1 Images (Chapters 1 & 2)..." -ForegroundColor Cyan
foreach ($src in $sourceFolders) {
    if (Test-Path $src) {
        Get-ChildItem -Path $src -Filter "ch1-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG12One -Force
        Get-ChildItem -Path $src -Filter "ch2-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG12One -Force
    }
}

Write-Host "Copying Grade 12 Semester 2 Images (Chapters 3 & 4)..." -ForegroundColor Cyan
foreach ($src in $sourceFolders) {
    if (Test-Path $src) {
        Get-ChildItem -Path $src -Filter "ch3-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG12Two -Force
        Get-ChildItem -Path $src -Filter "ch4-*.png" -ErrorAction SilentlyContinue | Copy-Item -Destination $destG12Two -Force
    }
}

$countG9One  = (Get-ChildItem -Path $destG9One -Filter "*.png" -ErrorAction SilentlyContinue).Count
$countG9Two  = (Get-ChildItem -Path $destG9Two -Filter "*.png" -ErrorAction SilentlyContinue).Count
$countG12One = (Get-ChildItem -Path $destG12One -Filter "*.png" -ErrorAction SilentlyContinue).Count
$countG12Two = (Get-ChildItem -Path $destG12Two -Filter "*.png" -ErrorAction SilentlyContinue).Count

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host " Transfer Summary & Verification" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
Write-Host "Total files in image_G9_one (Grade 9 Ch 1, 2, 3): $countG9One" -ForegroundColor White
Write-Host "Total files in image_G9_two (Grade 9 Ch 4, 5): $countG9Two" -ForegroundColor White
Write-Host "Total files in image_G12_one (Grade 12 Ch 1, 2): $countG12One" -ForegroundColor White
Write-Host "Total files in image_G12_two (Grade 12 Ch 3, 4): $countG12Two" -ForegroundColor White
Write-Host "`nAll image files and folders have been verified!`n" -ForegroundColor Green
