while ($true) {
    Get-ChildItem -Recurse -Include *.html, *.css, *.js | 
        Where-Object { $_.LastWriteTime -gt (Get-Date).AddSeconds(-2) } |
        ForEach-Object {
            git add .
            git commit -m "Auto-commit: $($_.Name) actualizado"
            git push origin master
        }
    Start-Sleep -Seconds 2
}
