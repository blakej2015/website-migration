@echo off
REM Quick Migration Script for Blake-Jones.com (Windows)
REM This script automates most of the migration process

echo ==========================================
echo Blake-Jones.com Migration Assistant
echo ==========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed!
    echo Please download from: https://nodejs.org
    echo Then run this script again.
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

REM Install dependencies
echo 📦 Installing dependencies...
npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed
echo.

REM Check for WordPress export
if not exist "blake-jones-export.xml" (
    echo ❌ WordPress export file not found!
    echo.
    echo Please:
    echo 1. Log into www.blake-jones.com/wp-admin
    echo 2. Go to Tools → Export
    echo 3. Download 'All content'
    echo 4. Save it as: blake-jones-export.xml in this folder
    echo.
    pause
    exit /b 1
)

echo ✅ WordPress export found
echo.

REM Run migration
echo 🔄 Converting WordPress content...
npm run migrate blake-jones-export.xml
if errorlevel 1 (
    echo ❌ Migration failed
    pause
    exit /b 1
)
echo ✅ Content converted
echo.

REM Check for images
if not exist "public\images\*" (
    echo ⚠️  No images found in public\images\
    echo.
    echo Please copy your WordPress images to: public\images\
    echo You can get them from: /wp-content/uploads/
    echo.
)

REM Build the site
echo 🔨 Building site...
npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)
echo ✅ Site built successfully
echo.

REM Start preview
echo 🚀 Starting preview server...
echo Opening http://localhost:4321
echo.
echo Press Ctrl+C to stop the server
echo.
npm run preview
