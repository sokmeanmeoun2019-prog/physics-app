param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("ON", "OFF")]
    [string]$Action,
    [switch]$SkipConfirm
)

$ErrorActionPreference = "Continue"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

$targetOnline = ($Action -eq "ON")
$siteStatusPath = Join-Path $scriptDir "site-status.json"
$authConfigPath = Join-Path $scriptDir "auth-config.json"
$authJsPath = Join-Path $scriptDir "auth.js"
$indexPath = Join-Path $scriptDir "index.html"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$isoNow = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ss.fffZ")
$buildStamp = (Get-Date).ToString("yyyyMMddHHmmss")

Write-Host ""
if (-not $targetOnline) {
    Write-Host "=======================================================" -ForegroundColor Red
    Write-Host "   WEBSITE ACCESS CONTROL - TURN WEBSITE [OFF]" -ForegroundColor Red
    Write-Host "=======================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "  This will IMMEDIATELY block student access to:" -ForegroundColor Yellow
    Write-Host "   - All Grade 7 - 12 lessons, ebooks, worksheets, games" -ForegroundColor Gray
    Write-Host "   - Quizzes, flashcards, summaries, summary slides, audio" -ForegroundColor Gray
    Write-Host "   - All direct links and already-opened tabs" -ForegroundColor Gray
    Write-Host ""
    Write-Host "  Students will see:" -ForegroundColor White
    Write-Host "   `"This site can't be reached right now. The website is" -ForegroundColor Cyan
    Write-Host "    temporarily unavailable. Please contact your teacher" -ForegroundColor Cyan
    Write-Host "    for more information.`"" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  (Your student accounts, passwords, and files remain safe)" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "=======================================================" -ForegroundColor Green
    Write-Host "   WEBSITE ACCESS CONTROL - TURN WEBSITE [ON]" -ForegroundColor Green
    Write-Host "=======================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "  This will RESTORE normal student access to the website" -ForegroundColor Yellow
    Write-Host "  and all Grade 7 - 12 learning materials immediately." -ForegroundColor Yellow
    Write-Host ""
}

if (-not $SkipConfirm) {
    $promptWord = if ($targetOnline) { "ON" } else { "OFF" }
    $ans = Read-Host "Type YES (or Y) to turn website $promptWord, or press Enter to cancel"
    if ($ans.Trim().ToUpper() -notin @("Y", "YES")) {
        Write-Host "`n[CANCELLED] No changes were made. Website status remains unchanged." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host "`n[1/4] Updating website access status files..." -ForegroundColor Cyan

# 1. Update site-status.json
$statusObj = [ordered]@{
    online = $targetOnline
    updatedAt = $isoNow
    message = "This site can't be reached right now. The website is temporarily unavailable. Please contact your teacher for more information."
}
$statusJson = $statusObj | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($siteStatusPath, $statusJson + "`r`n", $utf8NoBom)

# 2. Update local auth-config.json (keeps all passwords & secret config intact)
if (Test-Path $authConfigPath) {
    try {
        $rawCfg = [System.IO.File]::ReadAllText($authConfigPath, [System.Text.Encoding]::UTF8)
        $cfg = $rawCfg | ConvertFrom-Json
        if (-not $cfg.websiteAccess) {
            $cfg | Add-Member -MemberType NoteProperty -Name "websiteAccess" -Value ([PSCustomObject]@{
                online = $targetOnline
                updatedAt = $isoNow
                updatedBy = "admin-bat"
            })
        } else {
            $cfg.websiteAccess.online = $targetOnline
            $cfg.websiteAccess.updatedAt = $isoNow
            $cfg.websiteAccess.updatedBy = "admin-bat"
        }
        $updatedCfgJson = $cfg | ConvertTo-Json -Depth 10
        [System.IO.File]::WriteAllText($authConfigPath, $updatedCfgJson + "`r`n", $utf8NoBom)
    } catch {
        Write-Host "  [NOTE] Local auth-config.json unchanged: $($_.Exception.Message)" -ForegroundColor DarkYellow
    }
}

# 3. Update STATIC_WEBSITE_ONLINE in auth.js
$staticFlagJs = if ($targetOnline) { "true" } else { "false" }
if (Test-Path $authJsPath) {
    $authText = [System.IO.File]::ReadAllText($authJsPath, [System.Text.Encoding]::UTF8)
    if ($authText -match "const\s+STATIC_WEBSITE_ONLINE\s*=\s*(true|false);") {
        $authText = [regex]::Replace($authText, "const\s+STATIC_WEBSITE_ONLINE\s*=\s*(true|false);", "const STATIC_WEBSITE_ONLINE = $staticFlagJs;")
        [System.IO.File]::WriteAllText($authJsPath, $authText, $utf8NoBom)
    }
}

# 4. Update SITE_OFFLINE in index.html & auth.js script cache buster (WITHOUT wiping student LATEST_BUILD sessions)
$siteOfflineJs = if ($targetOnline) { "false" } else { "true" }
if (Test-Path $indexPath) {
    $idxText = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)
    if ($idxText -match "var\s+SITE_OFFLINE\s*=\s*(true|false);") {
        $idxText = [regex]::Replace($idxText, "var\s+SITE_OFFLINE\s*=\s*(true|false);", "var SITE_OFFLINE = $siteOfflineJs;")
    }
    $verMatch = [regex]::Match($idxText, "var\s+currentVer\s*=\s*(\d+);")
    $curVer = if ($verMatch.Success) { $verMatch.Groups[1].Value } else { "50" }
    $idxText = [regex]::Replace($idxText, '<script\s+src="auth\.js\?[^"]*"', "<script src=`"auth.js?v=$curVer&build=$buildStamp`"")
    [System.IO.File]::WriteAllText($indexPath, $idxText, $utf8NoBom)
}

Write-Host "  [OK] Local access state updated to: $(if ($targetOnline) { 'WEBSITE ONLINE' } else { 'WEBSITE OFFLINE' })" -ForegroundColor $(if ($targetOnline) { 'Green' } else { 'Red' })

# 5. Prepare Git and push ONLY access control files to GitHub Pages
Write-Host "`n[2/4] Preparing GitHub deployment..." -ForegroundColor Cyan

$curName = (git config user.name 2>$null)
if ([string]::IsNullOrWhiteSpace($curName)) {
    git config --global user.name "sokmeanmeoun2019-prog"
}
$curEmail = (git config user.email 2>$null)
if ([string]::IsNullOrWhiteSpace($curEmail)) {
    git config --global user.email "sokmeanmeoun2019-prog@users.noreply.github.com"
}
$originUrl = (git remote get-url origin 2>$null)
if ([string]::IsNullOrWhiteSpace($originUrl)) {
    git remote add origin https://github.com/sokmeanmeoun2019-prog/physics-app.git
}
git branch -M main 2>$null

# Ensure secrets stay completely untracked
git rm --cached auth-config.json TEACHER_PASSWORD.txt password.txt PASSWORD.txt 2>$null | Out-Null

# Stage only access control files
$filesToStage = @(
    "site-status.json",
    "auth.js",
    "index.html",
    "styles.css",
    "Turn_OFF_Website.bat",
    "Turn_ON_Website.bat",
    "site-access-control.ps1"
)
foreach ($f in $filesToStage) {
    if (Test-Path (Join-Path $scriptDir $f)) {
        git add $f 2>$null
    }
}

Write-Host "[3/4] Committing access status change..." -ForegroundColor Cyan
$staged = git diff --cached --name-only
if ($staged) {
    $commitMsg = if ($targetOnline) {
        "Restore: Turn ON website access back to normal"
    } else {
        "Maintenance: Turn OFF website access during examination period"
    }
    git commit -m $commitMsg
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Git commit failed." -ForegroundColor Red
        exit 1
    }

    Write-Host "[4/4] Publishing update to GitHub..." -ForegroundColor Cyan
    $pushed = $false
    for ($retry = 1; $retry -le 3; $retry++) {
        git push -u origin main
        if ($LASTEXITCODE -eq 0) {
            $pushed = $true
            break
        }
        Write-Host "  [RETRY $retry/3] Standard push failed, trying --force sync to origin main..." -ForegroundColor DarkYellow
        git push -u origin main --force
        if ($LASTEXITCODE -eq 0) {
            $pushed = $true
            break
        }
        Start-Sleep -Seconds 2
    }

    if (-not $pushed) {
        Write-Host "`n[ERROR] Could not push to GitHub. Check your internet connection or Git login and run again." -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "[4/4] GitHub already matches this state (no new file diff)." -ForegroundColor DarkGray
}

Write-Host ""
if (-not $targetOnline) {
    Write-Host "=======================================================" -ForegroundColor Red
    Write-Host "  STATUS: WEBSITE IS NOW OFFLINE (MAINTENANCE MODE)" -ForegroundColor Red
    Write-Host "=======================================================" -ForegroundColor Red
    Write-Host "  - Local Server: Blocked immediately (HTTP 503)." -ForegroundColor White
    Write-Host "  - GitHub Pages: Goes offline in ~60-90 seconds." -ForegroundColor White
    Write-Host "  - Double-click Turn_ON_Website.bat to restore anytime." -ForegroundColor Cyan
} else {
    Write-Host "=======================================================" -ForegroundColor Green
    Write-Host "  STATUS: WEBSITE IS NOW ONLINE (NORMAL ACCESS)" -ForegroundColor Green
    Write-Host "=======================================================" -ForegroundColor Green
    Write-Host "  - Local Server: Restored immediately." -ForegroundColor White
    Write-Host "  - GitHub Pages: Live again in ~60-90 seconds." -ForegroundColor White
    Write-Host "  - All student accounts, data, and lessons are intact." -ForegroundColor Green
}
Write-Host ""
exit 0
