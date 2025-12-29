# Deployment Guide

This project is configured to deploy on both Netlify and Vercel.

## 🚀 Deploy to Netlify

### Option 1: Using Netlify CLI
```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod
```

### Option 2: Using Netlify UI
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Netlify will auto-detect the build settings from `netlify.toml`
5. Click "Deploy site"

### Option 3: Drag and Drop
1. Build the project: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

---

## ▲ Deploy to Vercel

### Option 1: Using Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel --prod
```

### Option 2: Using Vercel UI
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your Git repository
4. Vercel will auto-detect Vite and configure build settings
5. Click "Deploy"

### Option 3: Using GitHub Integration
1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically deploy on every push

---

## 📋 Build Settings

Both platforms use the following configuration:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: Latest (auto-detected)

The project includes four sub-projects:
- **Google Clone** (`/google-clone/`) - Google homepage recreation
- **Daily Dribble** (`/daily-dribble/`) - Soccer newsletter signup page  
- **Web Action Hero** (`/web-action-hero/`) - Hero section with gradient effects
- **Birthday GIFt** (`/birthday-gift/`) - Interactive birthday card with animated GIFs

All pages are properly configured in `vite.config.js` for multi-page builds.

---

## 🔧 Custom Domain

### Netlify
1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

### Vercel
1. Go to Project settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed

---

## 📊 Continuous Deployment

Both platforms support automatic deployments from Git:

- Push to `main` branch → Production deployment
- Push to other branches → Preview deployments

---

## 🌐 Environment Variables

If you need environment variables:

### Netlify
1. Go to Site settings → Build & deploy → Environment
2. Add variables with `VITE_` prefix

### Vercel
1. Go to Project settings → Environment Variables
2. Add variables with `VITE_` prefix

---

## 📱 Deploy Previews

Both platforms automatically create deploy previews for pull requests, allowing you to test changes before merging to production.
