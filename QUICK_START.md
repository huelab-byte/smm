# Quick Start Deployment Guide

## 🚀 Fast Deployment (5 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/sentosh.git
git push -u origin main
```

### 2. On Your VPS

```bash
# Connect to your VPS
ssh root@your-vps-ip

# Clone repository
cd /var/www
git clone https://github.com/yourusername/sentosh.git
cd sentosh

# Run deployment script
chmod +x deploy.sh
# Edit deploy.sh and add your GitHub repo URL
sudo ./deploy.sh
```

### 3. Configure Domain

```bash
# Edit nginx config
sudo nano /etc/nginx/sites-available/sentosh
# Replace 'yourdomain.com' with your domain

# Test and reload
sudo nginx -t
sudo systemctl reload nginx

# Set up SSL
sudo certbot --nginx -d yourdomain.com
```

### 4. Done! 🎉

Your app should now be live at `https://yourdomain.com`

## 📝 Manual Steps (if script doesn't work)

```bash
# 1. Install dependencies
sudo apt-get update
sudo apt-get install -y curl git build-essential nginx

# 2. Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install PM2
sudo npm install -g pm2

# 4. Clone and setup
cd /var/www/sentosh
git pull origin main
npm install --production
npm run build

# 5. Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# 6. Setup Nginx
sudo cp nginx.conf /etc/nginx/sites-available/sentosh
sudo nano /etc/nginx/sites-available/sentosh  # Edit domain
sudo ln -s /etc/nginx/sites-available/sentosh /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔄 Updating Your App

After pushing changes to GitHub:

```bash
cd /var/www/sentosh
chmod +x update.sh
./update.sh
```

Or manually:
```bash
cd /var/www/sentosh
git pull origin main
npm install --production
npm run build
pm2 restart sentosh
```

## 📊 Check Status

```bash
pm2 status
pm2 logs sentosh
sudo systemctl status nginx
```

## 🆘 Troubleshooting

**App not loading?**
- Check PM2: `pm2 status`
- Check logs: `pm2 logs sentosh`
- Check Nginx: `sudo nginx -t`

**502 Bad Gateway?**
- App might not be running: `pm2 restart sentosh`
- Check port: `curl http://localhost:3000`

**SSL issues?**
- Renew: `sudo certbot renew`
- Check: `sudo certbot certificates`

