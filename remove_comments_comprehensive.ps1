# Comprehensive PowerShell script to remove all comments from JavaScript/JSX/TS/TSX files
$files = Get-ChildItem -Path "src" -Recurse -Include "*.js","*.jsx","*.ts","*.tsx"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove multi-line comments (/* ... */) - non-greedy
    $content = $content -replace '/\*[\s\S]*?\*/', ''
    
    # Remove JSX comments ({/* ... */}) - non-greedy  
    $content = $content -replace '\{/\*[\s\S]*?\*/\}', ''
    
    # Remove single-line comments (//) but not in URLs or strings
    $content = $content -replace '(?<!http:|https:|["\'])//.*$', ''
    
    # Remove lines that are now empty (only whitespace)
    $content = $content -replace '^\s*\r?\n', ''
    
    # Remove multiple consecutive empty lines
    $content = $content -replace '(\r?\n\s*){2,}', "`r`n"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Processed: $($file.FullName)"
}

Write-Host "Comprehensive comment removal complete!"
