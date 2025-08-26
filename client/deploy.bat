@echo off
echo ========================================
echo    eSight Technology Website Deploy
echo ========================================
echo.

echo [1/4] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Please check for errors.
    pause
    exit /b 1
)
echo ✅ Build completed successfully!

echo.
echo [2/4] Checking build files...
if not exist "dist\index.html" (
    echo ❌ Build files not found! Build may have failed.
    pause
    exit /b 1
)
echo ✅ Build files verified!

echo.
echo [3/4] Creating deployment package...
if exist "deploy.zip" del "deploy.zip"
powershell -command "Compress-Archive -Path 'dist\*' -DestinationPath 'deploy.zip' -Force"
if %errorlevel% neq 0 (
    echo ❌ Failed to create deployment package!
    pause
    exit /b 1
)
echo ✅ Deployment package created: deploy.zip

echo.
echo [4/4] Deployment ready!
echo.
echo 📁 Files to upload:
echo    - All contents from 'dist' folder
echo    - OR use 'deploy.zip' for easy upload
echo.
echo 🌐 Upload to your web server:
echo    - Apache: Upload all files + .htaccess
echo    - IIS: Upload all files + web.config
echo    - Shared Hosting: Upload to public_html/
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions
echo.
echo 🎉 Your website is ready to go live!
echo.
pause

