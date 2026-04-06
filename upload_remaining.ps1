cd "d:\VISUAL CODE CODIGOS\FERR"

$folders = @("img\MMRM", "img\PF", "img\TU", "img\VDN", "img\YO")

foreach ($folder in $folders) {
    $folderName = Split-Path $folder -Leaf
    Write-Host "`nProcessing $folderName..."
    
    git add "$folder"
    git commit -m "Add $folderName videos"
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Pushing $folderName..."
        git push origin main
        Start-Sleep -Seconds 3
    } else {
        Write-Host "No changes in $folderName"
    }
}

Write-Host "`n✅ All videos uploaded!"
git log --oneline -10
