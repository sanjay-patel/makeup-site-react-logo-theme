# Deployment Guide - Bhumi Makeup Artistry

Quick reference for deploying your Next.js website to AWS.

## Prerequisites Checklist

- [x] Node.js 20 installed (via nvm)
- [x] AWS account with valid credentials
- [x] GitHub repository with code
- [x] GitHub Personal Access Token
- [x] Web3Forms access key configured

## AWS Credentials Setup

Before deploying, ensure your AWS credentials are configured:

```bash
# Check current credentials
nvm exec 20 aws configure list

# Update credentials if needed
nvm exec 20 aws configure
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Default region: `us-east-1`
- Default output format: `json`

## 🔐 Secure GitHub Token Setup (IMPORTANT!)

**New Secure Approach:** Store your GitHub token in AWS Secrets Manager instead of `.env` file.

### Step 1: Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Generate new token with `repo` and `admin:repo_hook` permissions
3. Copy the token

### Step 2: Store in AWS Secrets Manager

```bash
# Add token to .env temporarily
# Edit .env and add: GITHUB_TOKEN=ghp_your_token

# Run the setup script
./scripts/setup-secrets.sh

# Remove GITHUB_TOKEN from .env after success
```

See [SECRETS-SETUP.md](SECRETS-SETUP.md) for detailed instructions.

## Environment Variables

Your `.env` file should have:
```bash
GITHUB_OWNER=sanjay-patel
GITHUB_REPO=makeup-site-react-logo-theme
GITHUB_BRANCH=production
# GITHUB_TOKEN=ghp_... (removed after storing in Secrets Manager)
CDK_DEFAULT_ACCOUNT=120084649695
CDK_DEFAULT_REGION=us-east-1
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=ce6e5b06-...
```

## Deployment Commands

### Option 1: Using Helper Script (Easiest)

```bash
# 1. Bootstrap CDK (first time only)
./cdk.sh bootstrap

# 2. Deploy your website
./cdk.sh deploy

# 3. Check deployment status
# Visit the Amplify URL shown in the output
```

### Option 2: Using NPM Scripts

```bash
# 1. Bootstrap CDK (first time only)
npm run cdk:bootstrap

# 2. Deploy your website
npm run cdk:deploy
```

### Option 3: Manual with Node 20

```bash
# If helper scripts don't work
nvm exec 20 npx cdk bootstrap
nvm exec 20 npx cdk deploy
```

## Deployment Process

1. **Bootstrap** (first time only):
   ```bash
   ./cdk.sh bootstrap
   ```
   This sets up CDK infrastructure in your AWS account.

2. **Deploy**:
   ```bash
   ./cdk.sh deploy
   ```
   This will:
   - Create AWS Amplify app
   - Connect to your GitHub repository
   - Set up automatic CI/CD
   - Configure environment variables
   - Deploy your Next.js application

3. **Access Your Site**:
   After deployment, you'll see:
   ```
   Outputs:
   BhumiMakeupArtistryStack.AmplifyAppUrl = https://production.xxxxx.amplifyapp.com
   ```
   Visit this URL to see your live website!

## Troubleshooting

### Invalid AWS Credentials
```bash
# Error: InvalidClientTokenId
# Solution: Update AWS credentials
nvm exec 20 aws configure
```

### Node Version Issues
```bash
# Ensure Node 20 is active
nvm use 20
nvm alias default 20
```

### GitHub Token Issues
- Verify token has `repo` access
- Check token hasn't expired
- Update `.env` with new token if needed

## Updating Your Site

Once deployed, updates are automatic:

1. Push code to GitHub `production` branch
2. AWS Amplify automatically:
   - Detects the change
   - Runs `npm run build`
   - Deploys the new version
   - Updates the live site

No manual deployment needed!

## Monitoring

### AWS Amplify Console
Visit: https://console.aws.amazon.com/amplify/

Here you can:
- View build logs
- Monitor deployments
- Check build history
- View analytics
- Manage environment variables

## Cost

Expected monthly cost: **$2-8**
- Build minutes: $0-2
- Hosting: $0-5
- Data transfer: $0-3
- Route 53 (if custom domain): $0.50-1

## Destroy Stack

⚠️ **Warning:** This deletes everything!

```bash
./cdk.sh destroy
```

## Need Help?

1. Check [cdk/README.md](cdk/README.md) for detailed documentation
2. View AWS Amplify logs in the console
3. Check GitHub Actions for deployment status

## Quick Commands Reference

```bash
# Development
npm run dev                 # Run locally
npm run build              # Build for production
npm start                  # Start production server

# Deployment
./cdk.sh bootstrap         # Setup CDK (once)
./cdk.sh deploy           # Deploy to AWS
./cdk.sh diff             # Check changes
./cdk.sh destroy          # Remove everything

# AWS
nvm exec 20 aws configure # Setup credentials
```
