#!/bin/bash

# Sentosh Deployment Script
# This script automates the deployment process on a fresh VPS

set -e

echo "🚀 Starting Sentosh deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="sentosh"
APP_DIR="/var/www/smm"
REPO_URL="https://github.com/huelab-byte/smm.git"
NODE_VERSION="20"
PM2_APP_NAME="smm"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root or with sudo${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Installing system dependencies...${NC}"
apt-get update
apt-get install -y curl git build-essential nginx

echo -e "${YELLOW}Step 2: Installing Node.js via NodeSource...${NC}"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt-get install -y nodejs

echo -e "${YELLOW}Step 3: Installing PM2 globally...${NC}"
npm install -g pm2

echo -e "${YELLOW}Step 4: Creating application directory...${NC}"
mkdir -p $APP_DIR
mkdir -p $APP_DIR/logs
chown -R $USER:$USER $APP_DIR

echo -e "${YELLOW}Step 5: Setting up application...${NC}"
if [ -d "$APP_DIR/.git" ]; then
    echo "Repository already exists, pulling latest changes..."
    cd $APP_DIR
    git pull origin main
else
    echo "Please clone your repository manually:"
    echo "cd $APP_DIR"
    echo "git clone $REPO_URL ."
    echo ""
    read -p "Press enter after you've cloned the repository..."
fi

echo -e "${YELLOW}Step 6: Installing dependencies...${NC}"
cd $APP_DIR
npm install --production

echo -e "${YELLOW}Step 7: Building the application...${NC}"
npm run build

echo -e "${YELLOW}Step 8: Setting up PM2...${NC}"
cd $APP_DIR
pm2 delete $PM2_APP_NAME 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u $USER --hp /home/$USER

echo -e "${YELLOW}Step 9: Setting up Nginx...${NC}"
cp nginx.conf /etc/nginx/sites-available/$APP_NAME
ln -sf /etc/nginx/sites-available/$APP_NAME /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Update /etc/nginx/sites-available/$APP_NAME with your domain name"
echo "2. Set up SSL with: certbot --nginx -d yourdomain.com"
echo "3. Check PM2 status: pm2 status"
echo "4. Check logs: pm2 logs $PM2_APP_NAME"

