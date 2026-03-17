$path = "c:\Users\Compumax\Desktop\proyectos antigravity\web reb opcion\index.html"
$content = [System.IO.File]::ReadAllText($path)

$target = "    <div class=""hero-actions reveal d3"">`r`n      <a href=""#manifesto"" class=""btn-gold"">Conoce Nuestra Filosofía</a>`r`n      <a href=""#manifesto"" class=""btn-outline"">Conoce Nuestra Filosofía</a>`r`n    </div>"
$target2 = "    <div class=""hero-actions reveal d3"">`n      <a href=""#manifesto"" class=""btn-gold"">Conoce Nuestra Filosofía</a>`n      <a href=""#manifesto"" class=""btn-outline"">Conoce Nuestra Filosofía</a>`n    </div>"

$replacement = "    <div class=""hero-actions reveal d3"" style=""justify-content: center;"">`r`n      <a href=""#manifesto"" class=""btn-gold"">Conoce Nuestra Filosofía</a>`r`n    </div>"
$replacement2 = "    <div class=""hero-actions reveal d3"" style=""justify-content: center;"">`n      <a href=""#manifesto"" class=""btn-gold"">Conoce Nuestra Filosofía</a>`n    </div>"

if ($content.Contains($target)) {
    $content = $content.Replace($target, $replacement)
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Replaced with CRLF"
} elseif ($content.Contains($target2)) {
    $content = $content.Replace($target2, $replacement2)
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Replaced with LF"
} else {
    Write-Host "Target not found"
}
