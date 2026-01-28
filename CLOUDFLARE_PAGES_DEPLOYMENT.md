# Cloudflare Pages Deployment Guide

This project has been optimized for static deployment on Cloudflare Pages. Follow these steps to deploy successfully.

## Prerequisites

- **Node.js**: v20.0.0 or higher (Cloudflare Pages supports Node 22+ by default)
- **pnpm**: v10.14.0 or higher (included in `package.json` packageManager field)
- Cloudflare account with Pages enabled
- GitHub repository (for automatic deployments)

## Local Development

### Installation

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

The app will start at `http://localhost:8080`

### Type Checking

```bash
pnpm typecheck
```

### Run Tests

```bash
pnpm test
```

### Format Code

```bash
pnpm format.fix
```

## Building for Cloudflare Pages

### Build Command

```bash
pnpm build
```

This command:

1. Builds the React client to `dist/spa/`
2. Optimizes for Cloudflare Pages with minification and code splitting
3. Generates production-ready static assets

### Build Output Structure

```
dist/spa/
├── index.html          # Entry point
├── assets/
│   ├── vendor-*.js     # React, React Router, etc.
│   ├── main-*.js       # Application code
│   ├── *.css           # Compiled Tailwind styles
│   └── *.woff2         # Fonts
└── ...other assets
```

## Cloudflare Pages Configuration

### Option 1: GitHub Integration (Recommended)

1. **Connect Repository**
   - Log in to Cloudflare Dashboard
   - Navigate to Pages
   - Click "Create a project" > "Connect to Git"
   - Select your GitHub repository

2. **Configure Build Settings**
   - **Framework**: None (custom)
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist/spa`
   - **Node.js version**: 22.x (or 20.x, if available)
   - **Environment variables**: (add any needed, e.g., API keys)

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare automatically deploys on pushes to `main` branch

### Option 2: Direct Upload (Manual)

1. **Build Locally**

   ```bash
   pnpm install
   pnpm build
   ```

2. **Upload to Cloudflare**
   - Go to Cloudflare Dashboard > Pages
   - Select your project
   - Click "Upload assets" (or use Wrangler CLI)

   ```bash
   npm install -g wrangler
   wrangler pages deploy dist/spa
   ```

3. **Configure SPA Routing**
   - File: `public/_redirects`
   - Already included in this project
   - Ensures all routes redirect to `index.html` for React Router

## SPA Routing Configuration

The `public/_redirects` file is automatically copied to `dist/spa/` during build:

```
/*  /index.html  200
```

This rule:

- Routes all non-existent paths to `index.html` (status 200)
- Allows React Router to handle client-side routing
- Works seamlessly with Cloudflare Pages

## Environment Variables

For sensitive data or environment-specific config:

1. **Add to `.env` file** (local development only)

   ```
   VITE_API_URL=https://api.example.com
   ```

2. **In Cloudflare Dashboard**:
   - Project Settings > Environment Variables
   - Add variables for each deployment environment (Production, Preview)
   - Variables prefixed with `VITE_` are exposed to the client

3. **Access in Code**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

## Optimizations Applied

✅ **Static Site Configuration**

- No Node.js server dependencies in production
- Client-side only React + React Router
- Express server only used in development

✅ **Build Performance**

- Code minification with Terser
- Code splitting (vendor chunk isolation)
- Asset versioning for cache busting
- Target: ES2020 (modern browser support)

✅ **SPA Routing**

- `_redirects` configuration for Cloudflare Pages
- Client-side routing with React Router
- 404 page handled gracefully

✅ **Security**

- No `server/**` files deployed
- `.env` files excluded from build
- Git history ignored (`.git/` not deployed)

## Deployment Checklist

Before deploying to production:

- [ ] Run `pnpm typecheck` - no TypeScript errors
- [ ] Run `pnpm test` - all tests pass
- [ ] Run `pnpm build` - build completes successfully
- [ ] Check `dist/spa/` exists with compiled assets
- [ ] Verify environment variables are set in Cloudflare Dashboard
- [ ] Test locally: `pnpm dev` works without errors
- [ ] Review React Router routes in `client/App.tsx`
- [ ] Confirm no API calls to removed Express routes

## Troubleshooting

### Build Fails with PostCSS Errors

```
Error: [postcss] The `border-border` class does not exist
```

**Solution**: Already fixed in `client/global.css`. Uses CSS variables directly instead of Tailwind classes.

### Routing Issues (404 on Refresh)

**Cause**: `_redirects` file not deployed
**Solution**: Ensure `public/_redirects` exists. Cloudflare Pages automatically copies files from `public/` to output.

### Slow Builds

**Solution**:

- Use pnpm (faster than npm)
- Enable GitHub Actions caching in Cloudflare
- Check Node.js version (v22 is faster)

### Large Build Output

**Solution**:

- Vite already enables code splitting
- Check for unused dependencies in `package.json`
- Consider lazy-loading routes with React Router

## DNS & Custom Domain

1. **Add Custom Domain**
   - Cloudflare Dashboard > Pages > Custom Domain
   - Follow DNS configuration instructions
   - Point to Cloudflare nameservers

2. **SSL/TLS**
   - Automatically provisioned by Cloudflare
   - HTTPS enabled by default

## Monitoring & Analytics

1. **View Deployments**
   - Cloudflare Dashboard > Pages > Deployments
   - See deployment history and build logs

2. **Analytics**
   - Cloudflare Dashboard > Analytics
   - Monitor traffic, errors, and performance

## Performance Tips

- Use React Code Splitting
- Lazy load routes when possible
- Optimize images (use WebP where supported)
- Minimize JavaScript bundle size
- Leverage Cloudflare's cache

## Production Build Verification

To verify the production build locally:

```bash
# Build
pnpm build

# Serve with a simple HTTP server
npx serve dist/spa

# Visit http://localhost:3000
# Test routing by navigating and refreshing pages
```

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [React Router SPA Setup](https://reactrouter.com/en/main/guides/index)
- [Project README](./README.md)

## Support

For issues or questions:

1. Check [Cloudflare Pages Status](https://www.cloudflarestatus.com/)
2. Review Cloudflare Pages [Discord Community](https://discord.gg/cloudflaredev)
3. Check project documentation and logs in Cloudflare Dashboard

---

**Last Updated**: 2025-01-28  
**Project**: Black Undergraduate Coalition Website  
**Build Output**: `dist/spa/`  
**Deployment Target**: Cloudflare Pages
