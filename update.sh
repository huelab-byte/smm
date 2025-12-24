#!/bin/bash

# Quick update script for Sentosh
# Run this after pushing changes to GitHub

set -e

APP_DIR="/var/www/sentosh"
PM2_APP_NAME="sentosh"

echo "🔄 Updating Sentosh..."

cd $APP_DIR

echo "📥 Pulling latest changes from GitHub..."
git pull origin main

echo "📦 Installing dependencies..."
npm install --production

echo "🏗️  Building application..."
npm run build

echo "🔄 Restarting application..."
pm2 restart $PM2_APP_NAME

echo "✅ Update complete!"
echo ""
echo "Check status: pm2 status"
echo "View logs: pm2 logs $PM2_APP_NAME"

