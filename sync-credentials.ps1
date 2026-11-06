# WIS Physics Hub - Automatic Credential and Cache-Buster Synchronizer
$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$authJsPath = Join-Path $scriptDir "auth.js"
$indexPath = Join-Path $scriptDir "index.html"
$authConfigPath = Join-Path $scriptDir "auth-config.json"

if (-not (Test-Path $authJsPath)) {
    Write-Host "[ERROR] auth.js not found at $authJsPath" -ForegroundColor Red
    exit 1
}

# 1. Read auth.js and extract CURRENT_CUSTOM_SHARED_PW
$authContent = [System.IO.File]::ReadAllText($authJsPath, [System.Text.Encoding]::UTF8)
$pwMatch = [regex]::Match($authContent, "const\s+CURRENT_CUSTOM_SHARED_PW\s*=\s*'([^']*)';")

if (-not $pwMatch.Success) {
    Write-Host "[ERROR] Could not find CURRENT_CUSTOM_SHARED_PW in auth.js!" -ForegroundColor Red
    exit 1
}

$detectedPw = $pwMatch.Groups[1].Value
$buildTimestamp = (Get-Date).ToString("yyyyMMddHHmmss")
$version = 9

# Check if there is an existing version number in auth.js and auto-increment
$verMatch = [regex]::Match($authContent, "sharedPasswordVersion:\s*(\d+)")
if ($verMatch.Success) {
    $currentVerNum = [int]$verMatch.Groups[1].Value
    $version = $currentVerNum + 1
}

# Update version inside auth.js to force instant session invalidation
$authContent = [regex]::Replace($authContent, "sharedPasswordVersion:\s*\d+", "sharedPasswordVersion: $version")
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($authJsPath, $authContent, $utf8NoBom)

# 2. Update index.html cache busters and build timestamps
if (Test-Path $indexPath) {
    $indexContent = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    
    # Update LATEST_BUILD
    $indexContent = [regex]::Replace($indexContent, "var\s+LATEST_BUILD\s*=\s*'[^']*';", "var LATEST_BUILD = '$buildTimestamp';")
    
    # Update currentVer
    $indexContent = [regex]::Replace($indexContent, "var\s+currentVer\s*=\s*\d+;", "var currentVer = $version;")
    
    # Update auth.js script tag
    $indexContent = [regex]::Replace($indexContent, '<script\s+src="auth\.js\?[^"]*"', "<script src=`"auth.js?v=$version&build=$buildTimestamp`"")
    
    # Update app.js script tag
    $indexContent = [regex]::Replace($indexContent, '<script\s+src="app\.js\?[^"]*"', "<script src=`"app.js?v=$version&build=$buildTimestamp`"")
    
    # Update styles.css link tag
    $indexContent = [regex]::Replace($indexContent, '<link\s+rel="stylesheet"\s+href="styles\.css\?[^"]*"', "<link rel=`"stylesheet`" href=`"styles.css?v=$version&build=$buildTimestamp`"")
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)
}

# 3. Update auth-config.json
if (Test-Path $authConfigPath) {
    try {
        $jsonRaw = [System.IO.File]::ReadAllText($authConfigPath, [System.Text.Encoding]::UTF8)
        $cfg = $jsonRaw | ConvertFrom-Json
        if (-not $cfg.sharedPassword) { $cfg | Add-Member -MemberType NoteProperty -Name "sharedPassword" -Value (@{}) }
        $cfg.sharedPassword.plainText = $detectedPw
        $cfg.sharedPassword.version = $version
        $cfg.sharedPassword.isCustom = $true
        $cfg.sharedPassword.updatedAt = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
        
        if (-not $cfg.admin) { $cfg | Add-Member -MemberType NoteProperty -Name "admin" -Value (@{}) }
        $cfg.admin.username = "admin"
        $cfg.admin.plainText = "Teacher#PhyAdmin2026!"
        $cfg.admin.isCustom = $true
        
        $newJson = $cfg | ConvertTo-Json -Depth 10
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($authConfigPath, $newJson, $utf8NoBom)
    } catch {
        Write-Host "[WARNING] Could not update auth-config.json: $_" -ForegroundColor Yellow
    }
}

# 4. Output Summary
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "   WIS AUTO-SYNC ENGINE: CREDENTIALS SYNCHRONIZED" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "  Active Shared Password : $detectedPw" -ForegroundColor Green
Write-Host "  Build Timestamp        : $buildTimestamp" -ForegroundColor Green
Write-Host "  Cache Busters Updated  : index.html (auth.js, app.js, styles.css)" -ForegroundColor Green
Write-Host "  Backend Config Synced  : auth-config.json" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
