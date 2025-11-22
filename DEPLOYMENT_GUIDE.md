# Deployment Guide

Complete guide for deploying your Bhumi Makeup Artistry website to AWS Amplify using CDK.

## Prerequisites

- [x] AWS Account with credentials configured
- [x] GitHub account with repository
- [x] Node.js 18+ installed
- [x] Web3Forms access key
- [x] Google Analytics Measurement ID (optional)

## Step 1: Environment Variables Setup

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your values:

```bash
# Web3Forms Access Key (Required)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_web3forms_key

# Google Analytics Measurement ID (Optional but recommended)
NEXT_PUBLIC_GA_ID=G-YOUR-ACTUAL-ID

# GitHub Configuration
GITHUB_OWNER=sanjaypatoliya
GITHUB_REPO=makeup-site-react-logo-theme
GITHUB_BRANCH=main

# GitHub Token (needed temporarily for setup)
GITHUB_TOKEN=ghp_your_github_personal_access_token

# AWS Configuration
CDK_DEFAULT_ACCOUNT=123456789012
CDK_DEFAULT_REGION=us-east-1

# Custom Domain (Optional)
CUSTOM_DOMAIN=bhumimakeupartistry.com
```

## Step 2: Store GitHub Token in AWS Secrets Manager

Run the setup script to securely store your GitHub token:

```bash
# Make the script executable
chmod +x cdk/setup-secrets.sh

# Run the script
./cdk/setup-secrets.sh
```

This will:
- Create a secret named `github-token` in AWS Secrets Manager
- Store your GitHub personal access token securely
- The token is used by Amplify to access your GitHub repository

**After running this script, you can remove `GITHUB_TOKEN` from your `.env` file for security.**

## Step 3: Bootstrap CDK (First Time Only)

If this is your first time using CDK in your AWS account/region:

```bash
npm run cdk:bootstrap
```

This sets up the necessary AWS resources for CDK to work.

## Step 4: Review Changes (Optional)

See what will be deployed without actually deploying:

```bash
npm run cdk:diff
```

## Step 5: Deploy to AWS Amplify

Deploy your application:

```bash
npm run cdk:deploy
```

You'll see output like:
```
✅  BhumiMakeupArtistryStack

Outputs:
BhumiMakeupArtistryStack.AmplifyAppId = d123abc456
BhumiMakeupArtistryStack.AmplifyAppUrl = https://main.d123abc456.amplifyapp.com
```

## Step 6: Verify Deployment

1. **Visit the Amplify URL** from the output
2. **Check AWS Amplify Console:**
   - Go to: https://console.aws.amazon.com/amplify/
   - Find your app: `bhumi-makeup-artistry`
   - Check build status

3. **Verify Environment Variables:**
   - In Amplify Console → App Settings → Environment variables
   - Should see:
     - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
     - `NEXT_PUBLIC_GA_ID` (if configured)

## Step 7: Add Custom Domain (Optional)

If you want to use `bhumimakeupartistry.com`:

### Option A: Using AWS Console (Easiest)

1. Go to Amplify Console → Domain management
2. Click "Add domain"
3. Enter: `bhumimakeupartistry.com`
4. Follow the DNS setup instructions
5. See [GODADDY_DOMAIN_SETUP.md](GODADDY_DOMAIN_SETUP.md) for GoDaddy DNS setup
6. See [ROUTE53_SETUP_GUIDE.md](ROUTE53_SETUP_GUIDE.md) for Route 53 setup (recommended)

### Option B: Deploy with Domain via CDK

```bash
CUSTOM_DOMAIN=bhumimakeupartistry.com npm run cdk:deploy
```

Then follow DNS setup from the guides above.

## Step 8: Test Your Website

1. **Test Amplify URL:**
   ```bash
   curl https://main.YOUR-APP-ID.amplifyapp.com
   ```

2. **Test Contact Form:**
   - Visit the Contact page
   - Submit a test form
   - Check your email for Web3Forms notification

3. **Test Google Analytics:**
   - Visit your website
   - Go to Google Analytics → Realtime
   - Should see yourself as active user

4. **Test WhatsApp Button:**
   - Click the floating WhatsApp button
   - Should open WhatsApp with pre-filled message

## Environment Variables Reference

### Required Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms API key | `abc123...` |
| `GITHUB_OWNER` | Your GitHub username | `sanjaypatoliya` |
| `GITHUB_REPO` | Repository name | `makeup-site-react-logo-theme` |

### Optional Variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | `G-ABC123XYZ4` |
| `CUSTOM_DOMAIN` | Custom domain name | `bhumimakeupartistry.com` |
| `GITHUB_BRANCH` | Branch to deploy | `main` (default) |
| `CDK_DEFAULT_REGION` | AWS region | `us-east-1` (default) |

## Update Deployment

To deploy changes after updating your code:

```bash
# 1. Commit and push to GitHub
git add .
git commit -m "Update website"
git push

# 2. Amplify automatically builds and deploys!
# Or manually redeploy with CDK:
npm run cdk:deploy
```

## Troubleshooting

### Issue: "github-token secret not found"

**Solution:**
```bash
# Run the setup script
./cdk/setup-secrets.sh

# Or create manually:
aws secretsmanager create-secret \
  --name github-token \
  --secret-string "ghp_your_token_here"
```

### Issue: "Not authorized to perform: sts:AssumeRole"

**Solution:**
```bash
# Bootstrap CDK first
npm run cdk:bootstrap
```

### Issue: Build fails in Amplify

**Solution:**
1. Check Amplify Console → Build logs
2. Verify environment variables are set
3. Check `package.json` has all dependencies
4. Ensure Node version is compatible (18+)

### Issue: Google Analytics not working

**Solution:**
1. Check `.env.local` has correct `NEXT_PUBLIC_GA_ID`
2. Verify format starts with `G-` not `UA-`
3. Check Amplify environment variables
4. Restart dev server: `npm run dev`
5. Wait 24-48 hours for data to appear in reports

### Issue: Contact form not working

**Solution:**
1. Verify `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set
2. Check Web3Forms dashboard for submissions
3. Test locally first: `npm run dev`
4. Check browser console for errors

## CDK Commands Reference

```bash
# See what will be deployed (dry run)
npm run cdk:diff

# Synthesize CloudFormation template
npm run cdk:synth

# Deploy the stack
npm run cdk:deploy

# Destroy the stack (delete everything)
npm run cdk:destroy
```

## AWS Resources Created

After deployment, you'll have:

- ✅ **AWS Amplify App**: Hosting your website
- ✅ **CloudFront Distribution**: CDN for fast global delivery
- ✅ **SSL Certificate**: Automatic HTTPS
- ✅ **GitHub Integration**: Auto-deploy on push
- ✅ **Environment Variables**: Securely stored
- ✅ **Custom Domain**: (if configured)

## Cost Estimation

**AWS Amplify Hosting:**
- Free tier: 1000 build minutes/month, 15 GB served/month
- After free tier: ~$0.01 per build minute, ~$0.15/GB served
- SSL certificate: Included (free)

**Expected monthly cost for small site:** $0 - $5

**Route 53 (if using custom domain):**
- Hosted zone: $0.50/month
- Queries: $0.40 per million queries

## Security Best Practices

1. ✅ **GitHub Token**: Stored in AWS Secrets Manager (not in code)
2. ✅ **Environment Variables**: Not committed to Git
3. ✅ **SSL/HTTPS**: Automatically enabled
4. ✅ **API Keys**: Prefixed with `NEXT_PUBLIC_` only for client-side use
5. ✅ **IAM Permissions**: CDK creates minimal required permissions

## Monitoring Your Website

### AWS Amplify Console
- Build history and logs
- Deployment status
- Performance metrics
- Custom domain status

### Google Analytics
- Visitor statistics
- Traffic sources
- User behavior
- Conversion tracking

### CloudWatch (Advanced)
- Lambda@Edge logs (if using)
- CloudFront access logs
- Amplify build logs

## Updating Environment Variables

### In AWS Amplify Console:
1. Go to Amplify → Your App
2. App Settings → Environment variables
3. Click "Manage variables"
4. Add/Edit variables
5. Save and redeploy

### Via CDK:
Update `.env` file and run:
```bash
npm run cdk:deploy
```

## Rollback a Deployment

### In Amplify Console:
1. Go to App → Hosting → Build history
2. Find the previous successful build
3. Click "Redeploy this version"

### Via Git:
```bash
# Revert to previous commit
git revert HEAD
git push

# Amplify auto-deploys the rollback
```

## Additional Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Google Analytics Setup](./GOOGLE_ANALYTICS_SETUP.md)
- [GoDaddy Domain Setup](./GODADDY_DOMAIN_SETUP.md)
- [Route 53 Setup](./ROUTE53_SETUP_GUIDE.md)

## Support

If you encounter issues:
1. Check AWS Amplify Console → Build logs
2. Review CloudFormation events in AWS Console
3. Check GitHub Actions (if configured)
4. Review this troubleshooting section

---

**Congratulations!** Your website is now live on AWS Amplify! 🎉
