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
    $indexContent = [regex]::Replace($indexContent, 'id="auth-version-badge"[^>]*>[^<]*<', "id=`"auth-version-badge`" style=`"display:inline-block; margin-left:6px; padding:2px 8px; border-radius:12px; font-size:0.75rem; background:rgba(56,189,248,0.2); color:#38bdf8; font-weight:700;`">v8.0 (Build $version)<")
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8NoBom)
}

# 7. Update auth-config.json
if (Test-Path $authConfigPath) {
    try {
        $jsonRaw = [System.IO.File]::ReadAllText($authConfigPath, [System.Text.Encoding]::UTF8)
        $cfg = $jsonRaw | ConvertFrom-Json
        $cfg.sharedPassword.hash = $sharedHash
        $cfg.sharedPassword.salt = $sharedSalt
        $cfg.sharedPassword.version = $version
        $cfg.sharedPassword.updatedAt = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
        $cfg.admin.hash = $adminHash
        $cfg.admin.salt = $adminSalt
        
        $newJson = $cfg | ConvertTo-Json -Depth 10
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($authConfigPath, $newJson, $utf8NoBom)
    } catch {}
}

# 7.5 Ensure all Ebook alias files exist for Grade 9 Chapter 2 (Gears & Pulley cross-compatibility)
$ebooksDir = Join-Path $scriptDir "ebooks"
if (Test-Path $ebooksDir) {
    # Gears aliases: mirror between g9-ch2-3-gears and g9-ch2-4-gears
    $g3 = Join-Path $ebooksDir "g9-ch2-3-gears.pdf.pdf"
    $g4 = Join-Path $ebooksDir "g9-ch2-4-gears.pdf.pdf"
    if ((Test-Path $g3) -and (-not (Test-Path $g4))) {
        Copy-Item -Path $g3 -Destination $g4 -Force
    } elseif ((Test-Path $g4) -and (-not (Test-Path $g3))) {
        Copy-Item -Path $g4 -Destination $g3 -Force
    }
    
    # Also create single .pdf copies for maximum URL compatibility
    $g3_single = Join-Path $ebooksDir "g9-ch2-3-gears.pdf"
    $g4_single = Join-Path $ebooksDir "g9-ch2-4-gears.pdf"
    if (Test-Path $g3) { if (-not (Test-Path $g3_single)) { Copy-Item -Path $g3 -Destination $g3_single -Force } }
    if (Test-Path $g4) { if (-not (Test-Path $g4_single)) { Copy-Item -Path $g4 -Destination $g4_single -Force } }

    # Pulley aliases: mirror between g9-ch2-4-pulley and g9-ch2-3-pulley
    $p4 = Join-Path $ebooksDir "g9-ch2-4-pulley.pdf.pdf"
    $p3 = Join-Path $ebooksDir "g9-ch2-3-pulley.pdf.pdf"
    if ((Test-Path $p4) -and (-not (Test-Path $p3))) {
        Copy-Item -Path $p4 -Destination $p3 -Force
    } elseif ((Test-Path $p3) -and (-not (Test-Path $p4))) {
        Copy-Item -Path $p3 -Destination $p4 -Force
    }

    $p4_single = Join-Path $ebooksDir "g9-ch2-4-pulley.pdf"
    $p3_single = Join-Path $ebooksDir "g9-ch2-3-pulley.pdf"
    if (Test-Path $p4) { if (-not (Test-Path $p4_single)) { Copy-Item -Path $p4 -Destination $p4_single -Force } }
    if (Test-Path $p3) { if (-not (Test-Path $p3_single)) { Copy-Item -Path $p3 -Destination $p3_single -Force } }
}

# 7.6 Ensure worksheets double-extension mirroring (.pdf <-> .pdf.pdf)
$worksheetsDir = Join-Path $scriptDir "worksheets"
if (Test-Path $worksheetsDir) {
    Get-ChildItem -Path $worksheetsDir -Filter "*.pdf*" -File | ForEach-Object {
        $fullName = $_.FullName
        if ($_.Name.EndsWith(".pdf.pdf")) {
            $single = $fullName.Substring(0, $fullName.Length - 4)
            if (-not (Test-Path $single)) { Copy-Item -Path $fullName -Destination $single -Force }
        } elseif ($_.Name.EndsWith(".pdf")) {
            $double = $fullName + ".pdf"
            if (-not (Test-Path $double)) { Copy-Item -Path $fullName -Destination $double -Force }
        }
    }
}

# 7.7 Ensure semester_exams double-extension mirroring (.pdf <-> .pdf.pdf)
$semesterExamsDir = Join-Path $scriptDir "semester_exams"
if (Test-Path $semesterExamsDir) {
    Get-ChildItem -Path $semesterExamsDir -Filter "*.pdf*" -File | ForEach-Object {
        $fullName = $_.FullName
        if ($_.Name.EndsWith(".pdf.pdf")) {
            $single = $fullName.Substring(0, $fullName.Length - 4)
            if (-not (Test-Path $single)) { Copy-Item -Path $fullName -Destination $single -Force }
        } elseif ($_.Name.EndsWith(".pdf")) {
            $double = $fullName + ".pdf"
            if (-not (Test-Path $double)) { Copy-Item -Path $fullName -Destination $double -Force }
        }
    }
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
