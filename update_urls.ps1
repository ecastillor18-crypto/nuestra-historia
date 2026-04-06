$file = "d:\VISUAL CODE CODIGOS\FERR\script.js"
$content = Get-Content $file -Raw

# Reemplazar todas las instancias de comillas simples img/ con BASE_URL
# Esto incluye líneas que ya tienen BASE_URL, así que primero las protegemos
$content = $content -replace "BASE_URL \+ 'img/", "‼BASEURL_IMG_MARKER‼"

# Ahora reemplazamos todas las 'img/ restantes
$content = $content -replace "'img/", "BASE_URL + 'img/"

# Finalmente restauramos nuestros markers
$content = $content -replace "‼BASEURL_IMG_MARKER‼", "BASE_URL + 'img/"

# Guardar el archivo
Set-Content $file $content

Write-Host "✅ Archivo actualizado exitosamente"




