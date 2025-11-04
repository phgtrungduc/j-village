# Script deploy lên GitHub Pages
Write-Host "🚀 Bắt đầu deploy lên GitHub Pages..." -ForegroundColor Green

# Build dự án
Write-Host "📦 Building project..." -ForegroundColor Yellow
npx ng build --configuration production

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Tạo file 404.html cho SPA routing
Write-Host "📄 Tạo file 404.html..." -ForegroundColor Yellow
Copy-Item "dist\j-village\browser\index.html" "dist\j-village\browser\404.html"

# Chuyển đến thư mục build
Set-Location "dist\j-village\browser"

# Khởi tạo git repo tạm thời
Write-Host "🔧 Khởi tạo git repo..." -ForegroundColor Yellow
git init
git add .
git commit -m "Deploy to GitHub Pages"

# Push lên gh-pages branch
Write-Host "🚀 Pushing to gh-pages branch..." -ForegroundColor Yellow
git branch -M gh-pages
git remote add origin https://github.com/phgtrungduc/j-village.git
git push -f origin gh-pages

# Quay lại thư mục gốc
Set-Location "..\..\..\"

Write-Host "✅ Deploy thành công!" -ForegroundColor Green
Write-Host "🌐 Trang web sẽ có tại: https://phgtrungduc.github.io/j-village/" -ForegroundColor Cyan
