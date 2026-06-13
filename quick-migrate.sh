#!/bin/bash
# Quick Migration Script for Blake-Jones.com
# This script automates most of the migration process

set -e

echo "=========================================="
echo "Blake-Jones.com Migration Assistant"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please download from: https://nodejs.org"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Check for WordPress export
if [ ! -f "blake-jones-export.xml" ]; then
    echo "❌ WordPress export file not found!"
    echo ""
    echo "Please:"
    echo "1. Log into www.blake-jones.com/wp-admin"
    echo "2. Go to Tools → Export"
    echo "3. Download 'All content'"
    echo "4. Save it as: blake-jones-export.xml in this folder"
    echo ""
    exit 1
fi

echo "✅ WordPress export found"
echo ""

# Run migration
echo "🔄 Converting WordPress content..."
npm run migrate blake-jones-export.xml
echo "✅ Content converted"
echo ""

# Check for images
if [ ! -d "public/images" ] || [ -z "$(ls -A public/images 2>/dev/null)" ]; then
    echo "⚠️  No images found in public/images/"
    echo ""
    echo "Please copy your WordPress images to: public/images/"
    echo "You can get them from: /wp-content/uploads/"
    echo ""
fi

# Fix image paths
echo "🔧 Fixing image paths..."
find src/content -name "*.md" -type f -exec sed -i '' 's|https://www.blake-jones.com/wp-content/uploads/[^/]*/[^/]*/|/images/|g' {} +
echo "✅ Image paths updated"
echo ""

# Build the site
echo "🔨 Building site..."
npm run build
echo "✅ Site built successfully"
echo ""

# Start preview
echo "🚀 Starting preview server..."
echo "Opening http://localhost:4321"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""
npm run preview
