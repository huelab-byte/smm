# Sentosh - Social Media Management Platform

A modern, all-in-one social media management platform built with Next.js, React, and TypeScript.

## Features

- 📅 Smart Scheduling - Schedule posts across all platforms
- 📊 Analytics Dashboard - Track performance with detailed insights
- 🤖 AI-Powered Content - Generate engaging captions and hashtags
- 👥 Team Collaboration - Work together seamlessly
- 💬 Unified Inbox - Manage all comments from one place
- 🔄 Cross-Platform - Post to Instagram, Twitter, LinkedIn, Facebook, TikTok, and more

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Quick Deploy to VPS

See [QUICK_START.md](./QUICK_START.md) for a 5-minute deployment guide.

### Full Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Files Included

- `deploy.sh` - Automated deployment script
- `update.sh` - Quick update script after code changes
- `ecosystem.config.js` - PM2 configuration
- `nginx.conf` - Nginx reverse proxy configuration

## Project Structure

```
sentosh/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── privacy/         # Privacy policy page
│   └── terms/           # Terms of service page
├── components/          # React components
│   ├── ui/              # shadcn/ui components
│   ├── navbar.tsx       # Navigation bar
│   ├── hero.tsx         # Hero section
│   ├── features.tsx     # Features section
│   ├── testimonials.tsx  # Testimonials section
│   ├── pricing.tsx      # Pricing section
│   ├── cta.tsx          # Call-to-action section
│   └── footer.tsx       # Footer component
├── lib/                 # Utility functions
└── public/              # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file for local development:

```env
NODE_ENV=development
```

For production, set environment variables in `ecosystem.config.js` or use a `.env` file.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, email support@sentosh.com or open an issue in the repository.

---

Built with ❤️ by the Sentosh team
