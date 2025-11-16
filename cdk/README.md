# AWS CDK Deployment for Bhumi Makeup Artistry

This directory contains AWS CDK infrastructure code to deploy the Bhumi Makeup Artistry website using AWS Amplify.

## Architecture

The application is deployed using:
- **AWS Amplify** - Hosting and CI/CD for the Next.js application
- **GitHub Integration** - Automatic deployments on push to main branch
- **CloudFront** - Global CDN for fast content delivery
- **Custom Domain** (optional) - Support for custom domain names

## Prerequisites

1. **AWS Account** - You need an AWS account with appropriate permissions
2. **AWS CLI** - Install and configure AWS CLI
   ```bash
   aws configure
   ```
3. **Node.js** - Version 18 or higher
4. **GitHub Personal Access Token** - Create a token with `repo` access at https://github.com/settings/tokens

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# GitHub Configuration
GITHUB_OWNER=your-github-username
GITHUB_REPO=makeup-site-react-logo-theme
GITHUB_BRANCH=main
GITHUB_TOKEN=your-github-personal-access-token

# Web3Forms
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=ce6e5b06-6185-4697-8885-967671397e9b

# Optional: Custom Domain
# CUSTOM_DOMAIN=yourdomain.com

# AWS Configuration
CDK_DEFAULT_ACCOUNT=your-aws-account-id
CDK_DEFAULT_REGION=us-east-1
```

## Deployment Steps

### 1. Bootstrap CDK (First Time Only)

Bootstrap your AWS account for CDK:

```bash
npx cdk bootstrap aws://ACCOUNT-ID/REGION
```

Replace `ACCOUNT-ID` with your AWS account ID and `REGION` with your preferred region (e.g., us-east-1).

### 2. Synthesize CloudFormation Template

Generate the CloudFormation template to review what will be created:

```bash
npm run cdk:synth
```

### 3. Deploy the Stack

Deploy the infrastructure to AWS:

```bash
npm run cdk:deploy
```

The deployment will:
- Create an AWS Amplify application
- Connect to your GitHub repository
- Set up automatic builds and deployments
- Configure environment variables
- Output the application URL

### 4. Access Your Application

After deployment, you'll see outputs like:

```
Outputs:
BhumiMakeupArtistryStack.AmplifyAppUrl = https://main.d1234567890.amplifyapp.com
BhumiMakeupArtistryStack.AmplifyAppId = d1234567890
```

Visit the URL to access your deployed application.

## CDK Commands

- `npm run cdk:synth` - Synthesize CloudFormation template
- `npm run cdk:deploy` - Deploy the stack to AWS
- `npm run cdk:diff` - Compare deployed stack with current state
- `npm run cdk:destroy` - Destroy the stack (use with caution!)

## Custom Domain Setup

To use a custom domain:

1. Update the `.env` file with your domain:
   ```bash
   CUSTOM_DOMAIN=yourdomain.com
   ```

2. Deploy the stack:
   ```bash
   npm run cdk:deploy
   ```

3. In the AWS Amplify Console:
   - Go to your app
   - Click on "Domain management"
   - Follow the instructions to verify domain ownership
   - Update your DNS records as instructed

## Continuous Deployment

Once deployed, AWS Amplify will automatically:
- Build and deploy when you push to the configured branch (main)
- Run the build command: `npm run build`
- Deploy the `.next` folder
- Update the live site

## Monitoring and Logs

View build logs and application metrics in the AWS Amplify Console:
- https://console.aws.amazon.com/amplify/

## Cost Estimation

AWS Amplify pricing:
- Build minutes: First 1,000 minutes/month are free
- Hosting: First 5 GB stored and 15 GB served are free per month
- After free tier: ~$0.01 per GB stored, ~$0.15 per GB served

For a typical small website: ~$5-15/month

## Troubleshooting

### Build Fails

Check the build logs in the Amplify Console. Common issues:
- Missing environment variables
- Node.js version mismatch
- Build timeout (default: 30 minutes)

### Domain Not Working

- Verify DNS records are correctly configured
- Wait for DNS propagation (can take up to 48 hours)
- Check SSL certificate status in Amplify Console

### GitHub Connection Issues

- Verify the GitHub token has `repo` access
- Check if the repository exists and is accessible
- Ensure the branch name is correct

## Cleanup

To remove all resources and stop incurring charges:

```bash
npm run cdk:destroy
```

**Warning:** This will delete all resources including build history and logs.

## Support

For issues related to:
- AWS CDK: https://github.com/aws/aws-cdk/issues
- AWS Amplify: https://github.com/aws-amplify/amplify-hosting/issues
- Next.js: https://github.com/vercel/next.js/discussions
