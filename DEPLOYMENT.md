# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: haven-homestay
# - Directory: ./
# - Override settings? N
```

### Option 2: Deploy via GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## 🔧 Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,
  // ... other config
};
```

## 🐛 Troubleshooting 404 Errors

### Common Issues & Solutions:

1. **Build Command Issues**
   - Ensure `npm run build` works locally
   - Check package.json scripts

2. **Framework Detection**
   - Vercel should auto-detect Next.js
   - If not, set framework to "nextjs" in vercel.json

3. **Output Directory**
   - Next.js builds to `.next` by default
   - Don't change unless using custom build

4. **Environment Variables**
   - Add any required env vars in Vercel dashboard
   - Check for missing API keys or config

5. **Static Generation**
   - All pages are statically generated
   - Check for client-side only code in server components

## 📁 Project Structure
```
homestay-luxury/
├── src/app/
│   ├── page.tsx          # Home page (/)
│   ├── about/page.tsx    # About page (/about)
│   ├── contact/page.tsx  # Contact page (/contact)
│   ├── gallery/page.tsx  # Gallery page (/gallery)
│   ├── rooms/page.tsx    # Rooms page (/rooms)
│   ├── not-found.tsx     # 404 page
│   └── layout.tsx        # Root layout
├── public/images/        # Static images
├── vercel.json          # Vercel config
└── next.config.ts       # Next.js config
```

## ✅ Pre-Deployment Checklist

- [ ] `npm run build` succeeds locally
- [ ] All pages load correctly in development
- [ ] Images are in `/public/images/` directory
- [ ] No console errors in browser
- [ ] All routes work: `/`, `/about`, `/contact`, `/gallery`, `/rooms`
- [ ] 404 page works for invalid routes

## 🌐 Live URLs

After deployment, your site will be available at:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-branch.vercel.app`

## 🔄 Redeploy

To redeploy after changes:
```bash
# Via CLI
vercel --prod

# Via GitHub
# Just push to main branch - auto-deploys
```

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify build works locally
3. Check for TypeScript/ESLint errors
4. Ensure all dependencies are in package.json
