# Cloudflare Pages - Quick Start

## 1️⃣ Local Setup (First Time)

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Open http://localhost:8080
```

## 2️⃣ Build for Production

```bash
# Build static site
pnpm build

# Output: dist/spa/
# Ready to deploy to Cloudflare Pages
```

## 3️⃣ Deploy to Cloudflare Pages

### GitHub Integration (Automatic)
```
1. Push code to GitHub
2. Cloudflare Pages auto-deploys via webhook
3. Build Command: pnpm build
4. Output Directory: dist/spa
5. Node Version: 22.x (recommended)
```

### Manual Upload (CLI)
```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy
wrangler pages deploy dist/spa
```

## 📋 Pre-Deploy Checklist

```bash
# 1. Type checking
pnpm typecheck

# 2. Run tests
pnpm test

# 3. Build locally
pnpm build

# 4. Verify build output
ls -la dist/spa/

# 5. Test production build
npx serve dist/spa
# Visit http://localhost:3000
```

## ⚙️ Cloudflare Dashboard Configuration

**Build Settings:**
- Framework: None (custom)
- Build command: `pnpm build`
- Build output directory: `dist/spa`
- Node.js version: 22.x
- Environment variables: Add as needed

## 🔧 Key Files

- **Build Config**: `vite.config.ts`
- **SPA Routing**: `public/_redirects` (auto-deployed)
- **Full Guide**: `CLOUDFLARE_PAGES_DEPLOYMENT.md`

## ✅ Project Status

- ✅ Static site (no server dependencies)
- ✅ React SPA with React Router
- ✅ Tailwind CSS + TypeScript
- ✅ Cloudflare Pages optimized
- ✅ SPA routing configured
- ✅ Ready to deploy

## 🚀 Deploy Now

1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set output: `dist/spa`
4. Push to `main` branch
5. Live in seconds!

## 📞 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check Node version (v20+), run `pnpm install` |
| 404 on page refresh | Verify `public/_redirects` exists and is deployed |
| Slow builds | Use pnpm cache, check dependencies |
| Large bundle | Review dependencies, enable code splitting |

See `CLOUDFLARE_PAGES_DEPLOYMENT.md` for detailed guide.
