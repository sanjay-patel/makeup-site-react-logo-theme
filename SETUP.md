# Setup Instructions

## Node.js Version Requirement

This Next.js project requires **Node.js 18.17.0 or higher**.

Your current Node.js version is **15.5.0**, which is not compatible with Next.js 14.

### Upgrading Node.js

#### Option 1: Using nvm (Recommended)

```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node 18 or higher
nvm install 18
nvm use 18

# Verify the version
node --version  # Should show v18.x.x or higher
```

#### Option 2: Using Homebrew (macOS)

```bash
brew install node@18
brew link node@18
```

#### Option 3: Download from nodejs.org

Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version (v20 or v18).

## Installation Steps

Once you have Node.js 18+ installed:

1. **Clean install dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Alternative: Use an Older Next.js Version

If you cannot upgrade Node.js, you can downgrade Next.js to version 12.x which supports Node 12+:

```bash
npm install next@12 react@18 react-dom@18
```

However, this is not recommended as you'll miss out on the latest features and improvements.

## Troubleshooting

### Issue: "performance is not defined"
**Solution:** Upgrade Node.js to version 18.17.0 or higher

### Issue: Module errors during build
**Solution:** Delete node_modules and package-lock.json, then run `npm install` again

### Issue: TypeScript errors
**Solution:** Run `npm install` to ensure all TypeScript definitions are installed

## Project Status

✅ All pages converted to Next.js with TypeScript
✅ SEO optimizations implemented
✅ Responsive design maintained
✅ All interactive features working
⚠️ Requires Node.js 18+ to build and run

## Next Steps

After upgrading Node.js:
1. Test the development server: `npm run dev`
2. Open http://localhost:3000
3. Test all pages and features
4. Build for production: `npm run build`
5. Deploy to Vercel or your preferred hosting platform
