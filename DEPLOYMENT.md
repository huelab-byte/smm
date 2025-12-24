# Sentosh Deployment Guide

This guide will help you deploy Sentosh to a fresh VPS using GitHub.

## Prerequisites

- A fresh VPS (Ubuntu 20.04+ recommended)
- Root or sudo access
- A domain name pointing to your VPS IP (optional but recommended)
- A GitHub repository with your code

## Step 1: Prepare Your GitHub Repository

1. Initialize git in your project (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a repository on GitHub and push your code:
```bash
git remote add origin https://github.com/yourusername/sentosh.git
git branch -M main
git push -u origin main
```

## Step 2: Connect to Your VPS

```bash
ssh root@your-vps-ip
```

## Step 3: Run the Deployment Script

1. Clone this repository or copy the deployment files to your VPS
2. Make the script executable:
```bash
chmod +x deploy.sh
```

3. Edit `deploy.sh` and update the `REPO_URL` variable with your GitHub repository URL

4. Run the deployment script:
```bash
sudo ./deploy.sh
```

**OR** follow the manual steps below:

## Manual Deployment Steps

### 1. Install System Dependencies

```bash
sudo apt-get update
sudo apt-get install -y curl git build-essential nginx
```

### 2. Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Should show v20.x.x
```

### 3. Install PM2

```bash
sudo npm install -g pm2
```

### 4. Clone Your Repository

```bash
sudo mkdir -p /var/www/sentosh
cd /var/www/sentosh
sudo git clone https://github.com/yourusername/sentosh.git .
```

### 5. Install Dependencies and Build

```bash
cd /var/www/sentosh
sudo npm install --production
sudo npm run build
```

### 6. Set Up PM2

```bash
cd /var/www/sentosh
sudo pm2 start ecosystem.config.js
sudo pm2 save
sudo pm2 startup
```

### 7. Configure Nginx

1. Copy the nginx configuration:
```bash
sudo cp nginx.conf /etc/nginx/sites-available/sentosh
```

2. Edit the configuration file:
```bash
sudo nano /etc/nginx/sites-available/sentosh
```

3. Replace `yourdomain.com` with your actual domain name

4. Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/sentosh /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 8. Set Up SSL with Let's Encrypt (Recommended)

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot will automatically update your Nginx configuration with SSL certificates.

## Step 4: Post-Deployment

### Check Application Status

```bash
pm2 status
pm2 logs sentosh
```

### Update Application

When you push new changes to GitHub:

```bash
cd /var/www/sentosh
git pull origin main
npm install --production
npm run build
pm2 restart sentosh
```

### Useful PM2 Commands

```bash
pm2 status              # Check status
pm2 logs sentosh        # View logs
pm2 restart sentosh    # Restart app
pm2 stop sentosh       # Stop app
pm2 delete sentosh     # Remove app
```

### Useful Nginx Commands

```bash
sudo nginx -t           # Test configuration
sudo systemctl reload nginx    # Reload configuration
sudo systemctl restart nginx   # Restart Nginx
sudo systemctl status nginx    # Check status
```

## Firewall Configuration

If you have a firewall enabled, make sure to allow HTTP and HTTPS:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

## Troubleshooting

### Application not starting

1. Check PM2 logs: `pm2 logs sentosh`
2. Check if port 3000 is in use: `sudo lsof -i :3000`
3. Verify build completed: `ls -la .next`

### Nginx 502 Bad Gateway

1. Check if the app is running: `pm2 status`
2. Check if port 3000 is accessible: `curl http://localhost:3000`
3. Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### SSL Certificate Issues

1. Renew certificate: `sudo certbot renew`
2. Check certificate status: `sudo certbot certificates`

## Environment Variables

If you need to set environment variables, edit `ecosystem.config.js`:

```javascript
env: {
  NODE_ENV: 'production',
  PORT: 3000,
  // Add your variables here
  DATABASE_URL: 'your-database-url',
  API_KEY: 'your-api-key',
}
```

Then restart PM2:
```bash
pm2 restart sentosh --update-env
```

## Security Best Practices

1. **Keep system updated**: `sudo apt-get update && sudo apt-get upgrade`
2. **Use SSH keys** instead of passwords
3. **Set up fail2ban** to protect against brute force attacks
4. **Regular backups** of your application and database
5. **Monitor logs** regularly for suspicious activity
6. **Use strong passwords** for all accounts
7. **Keep dependencies updated**: `npm audit` and `npm update`

## Monitoring

Consider setting up monitoring tools:
- PM2 Plus (free tier available)
- Uptime monitoring services
- Log aggregation tools

## Support

For issues or questions, check the logs first:
- Application logs: `pm2 logs sentosh`
- Nginx logs: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`
- System logs: `journalctl -u nginx`

