# AI Test Reporter - Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the AI Test Reporter website to various hosting platforms. The site is built with Next.js and optimized for static hosting.

## Prerequisites
- Node.js 18+ installed
- Git installed and configured
- A GitHub account

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This creates an optimized static build in the `out/` directory.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Auto-deploy)
1. **Connect GitHub Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository

2. **Configure Project**
   - Framework Preset: Next.js
   - Root Directory: `.`
   - Build Command: `npm run build`
   - Output Directory: `out`

3. **Environment Variables** (Optional)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy" - Vercel will automatically deploy on every push to main branch

### Option 2: Netlify (Free Tier)
1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - "New site from Git" → GitHub → Select repository

2. **Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `out`

3. **Deploy**
   - Netlify will auto-deploy on every push

### Option 3: GitHub Pages (Free)
1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/ai-test-reporter.git
   git push -u origin main
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d out"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: Render (Affordable)
1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Static Site**
   - Connect GitHub repository
   - Build Command: `npm run build`
   - Publish Directory: `out`

3. **Deploy**
   - Click "Create Static Site"

### Option 5: AWS S3 + CloudFront
1. **Build Static Files**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Create S3 bucket with static website hosting
   - Upload contents of `out/` directory
   - Configure bucket policy for public access

3. **CloudFront Distribution**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain (optional)

## Custom Domain Setup

### Vercel
1. Go to project settings → Domains
2. Add your custom domain
3. Configure DNS records as shown

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS with provided values

## Email Integration

### Formspree (Free Tier)
1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Create new form
4. Update form action in contact page:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### EmailJS (Free Tier)
1. Go to [emailjs.com](https://emailjs.com)
2. Create account
3. Set up email service
4. Update contact form with service ID and template ID

## Performance Optimization

### Image Optimization
- Use Next.js Image component
- Enable WebP format
- Set proper sizes for responsive images

### Caching
- Static assets: 1 year
- HTML: 1 hour
- API responses: 5 minutes

### CDN Configuration
- Enable compression (gzip/brotli)
- Set proper cache headers
- Use edge locations

## Monitoring & Analytics

### Google Analytics
1. Create GA4 property
2. Add measurement ID to site
3. Configure events and conversions

### Vercel Analytics
- Built-in performance monitoring
- Real-time traffic insights

### Netlify Analytics
- Available as add-on
- GDPR compliant

## Security Headers

The site includes security headers via:
- `netlify.toml` (Netlify)
- `vercel.json` (Vercel)
- Custom headers configuration (other platforms)

## Environment Variables

Create `.env.local` file for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

## Troubleshooting

### Build Issues
- Clear cache: `npm run clean`
- Check Node.js version compatibility
- Verify all dependencies are installed

### Deployment Issues
- Check build logs for errors
- Verify output directory configuration
- Ensure proper environment variables

### Performance Issues
- Use Lighthouse to audit performance
- Optimize images and assets
- Enable compression and caching

## Support

For deployment support:
- Check platform documentation
- Review build logs
- Contact platform support
- Create GitHub issue for bugs