cd "d:\VISUAL CODE CODIGOS\FERR"
$files = @(Get-ChildItem -Path "img\TTK" -Filter "*.mp4" -ErrorAction SilentlyContinue) + @(Get-ChildItem -Path "img\TTK" -Filter "*.MP4" -ErrorAction SilentlyContinue)
$files = $files | Sort-Object Name
$total = $files.Count
$half = [Math]::Ceiling($total / 2)

Write-Host "Total files: $total, First half: $half files"

# First half
$part1 = $files[0..($half-1)]
Write-Host "Adding part 1 ($($part1.Count) files)..."
git add $part1.FullName
git commit -m "Add TikTok videos (part 1)"
git push origin main

Write-Host "Push part 1 complete. Waiting before part 2..."
Start-Sleep -Seconds 5

# Second half
git add "img/TTK/"
git commit -m "Add TikTok videos (part 2)"
git push origin main

Write-Host "All TikTok videos uploaded!"
