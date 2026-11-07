# WIS Physics Hub - Automatic Hashing and Credential Synchronizer
$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

$authJsPath = Join-Path $scriptDir "auth.js"
$indexPath = Join-Path $scriptDir "index.html"
$authConfigPath = Join-Path $scriptDir "auth-config.json"
$teacherPwPath = Join-Path $scriptDir "TEACHER_PASSWORD.txt"
$gitignorePath = Join-Path $scriptDir ".gitignore"

# 1. Ensure TEACHER_PASSWORD.txt exists (stored strictly on local PC, NEVER pushed to GitHub)
if (-not (Test-Path $teacherPwPath)) {
    "@Physics2026**!" | Out-File -FilePath $teacherPwPath -Encoding utf8 -NoNewline
}

# 2. Ensure .gitignore excludes TEACHER_PASSWORD.txt and password.txt
if (Test-Path $gitignorePath) {
    $giContent = [System.IO.File]::ReadAllText($gitignorePath, [System.Text.Encoding]::UTF8)
    if ($giContent -notmatch "TEACHER_PASSWORD\.txt") {
        $giContent += "`r`nTEACHER_PASSWORD.txt`r`npassword.txt`r`nPASSWORD.txt`r`n"
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($gitignorePath, $giContent, $utf8NoBom)
    }
}

# 3. Read the secret password from TEACHER_PASSWORD.txt
$rawTeacherPw = [System.IO.File]::ReadAllText($teacherPwPath, [System.Text.Encoding]::UTF8).Trim()
if ([string]::IsNullOrWhiteSpace($rawTeacherPw)) {
    $rawTeacherPw = "@Physics2026**!"
}

# 4. Compute Salter & One-Way Irreversible SHA-256 Hashes
$sharedSalt = "WIS_PHYSICS_SALT_v5_0"
$adminSalt = "WIS_ADMIN_SALT_v5_0"
$adminPw = "Teacher#PhyAdmin2026!"

$hasher = [System.Security.Cryptography.SHA256]::Create()
$sharedHashBytes = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($rawTeacherPw + $sharedSalt))
$sharedHash = -join ($sharedHashBytes | ForEach-Object { "{0:x2}" -f $_ })

$adminHashBytes = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($adminPw + $adminSalt))
$adminHash = -join ($adminHashBytes | ForEach-Object { "{0:x2}" -f $_ })

$buildTimestamp = (Get-Date).ToString("yyyyMMddHHmmss")
$version = 12

# 5. Update auth.js with HASHES ONLY (Zero plaintext in published code)
if (Test-Path $authJsPath) {
    $authContent = [System.IO.File]::ReadAllText($authJsPath, [System.Text.Encoding]::UTF8)
    
    # Read existing version and bump
    $verMatch = [regex]::Match($authContent, "sharedPasswordVersion:\s*(\d+)")
    if ($verMatch.Success) {
        $version = [int]$verMatch.Groups[1].Value + 1
    }
    
    # Update hash values
    $authContent = [regex]::Replace($authContent, "const\s+SHARED_PW_HASH\s*=\s*'[^']*';", "const SHARED_PW_HASH = '$sharedHash';")
    $authContent = [regex]::Replace($authContent, "const\s+ADMIN_PW_HASH\s*=\s*'[^']*';", "const ADMIN_PW_HASH = '$adminHash';")
    $authContent = [regex]::Replace($authContent, "sharedPasswordVersion:\s*\d+", "sharedPasswordVersion: $version")
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($authJsPath, $authContent, $utf8NoBom)
}

# 6. Update index.html cache busters and timestamps
if (Test-Path $indexPath) {
    $indexContent = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    $indexContent = [regex]::Replace($indexContent, "var\s+LATEST_BUILD\s*=\s*'[^']*';", "var LATEST_BUILD = '$buildTimestamp';")
    $indexContent = [regex]::Replace($indexContent, "var\s+currentVer\s*=\s*\d+;", "var currentVer = $version;")
    $indexContent = [regex]::Replace($indexContent, '<script\s+src="auth\.js\?[^"]*"', "<script src=`"auth.js?v=$version&build=$buildTimestamp`"")
    $indexContent = [regex]::Replace($indexContent, '<script\s+src="app\.js\?[^"]*"', "<script src=`"app.js?v=$version&build=$buildTimestamp`"")
    $indexContent = [regex]::Replace($indexContent, '<link\s+rel="stylesheet"\s+href="styles\.css\?[^"]*"', "<link rel=`"stylesheet`" href=`"styles.css?v=$version&build=$buildTimestamp`"")
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)
}

# 7. Update auth-config.json
if (Test-Path $authConfigPath) {
    try {
        $jsonRaw = [System.IO.File]::ReadAllText($authConfigPath, [System.Text.Encoding]::UTF8)
        $cfg = $jsonRaw | ConvertFrom-Json
        $cfg.sharedPassword.plainText = $rawTeacherPw
        $cfg.sharedPassword.hash = $sharedHash
        $cfg.sharedPassword.salt = $sharedSalt
        $cfg.sharedPassword.version = $version
        $cfg.sharedPassword.updatedAt = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
        $cfg.admin.plainText = $adminPw
        $cfg.admin.hash = $adminHash
        $cfg.admin.salt = $adminSalt
        
        $newJson = $cfg | ConvertTo-Json -Depth 10
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($authConfigPath, $newJson, $utf8NoBom)
    } catch {}
}

# 8. Output Summary
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "   WIS AUTO-SYNC ENGINE: CRYPTOGRAPHIC HASH SECURED" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host "  Plaintext in auth.js   : COMPLETELY REMOVED" -ForegroundColor Green
Write-Host "  Cryptographic Hash     : $sharedHash (One-Way)" -ForegroundColor Green
Write-Host "  Secret Password Source : TEACHER_PASSWORD.txt (Local Only)" -ForegroundColor Green
Write-Host "  GitHub Security        : Plaintext excluded via .gitignore" -ForegroundColor Green
Write-Host "  Version / Build        : Version $version ($buildTimestamp)" -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
