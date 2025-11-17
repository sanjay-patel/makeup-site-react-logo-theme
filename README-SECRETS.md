# 🔐 Secure Deployment with AWS Secrets Manager

## What Changed?

Your GitHub Personal Access Token is now stored securely in **AWS Secrets Manager** instead of the `.env` file.

## Why This is Better?

✅ **No Risk of Exposure**: Token never committed to Git  
✅ **Encrypted Storage**: AWS encrypts the token at rest  
✅ **Access Control**: IAM policies control who can access it  
✅ **Audit Trail**: All access is logged in CloudTrail  
✅ **Easy Rotation**: Update token without changing code  

## Quick Setup (3 Steps)

### 1. Create GitHub Token
Go to https://github.com/settings/tokens and create a token with:
- ✅ `repo` (all)
- ✅ `admin:repo_hook`

### 2. Store in AWS Secrets Manager
```bash
# Add token to .env temporarily
echo "GITHUB_TOKEN=ghp_your_token_here" >> .env

# Run setup script
./scripts/setup-secrets.sh

# Remove from .env
# (Edit .env and delete the GITHUB_TOKEN line)
```

### 3. Deploy
```bash
./cdk.sh deploy
```

Done! Your token is now securely stored in AWS and automatically used during deployments.

## Files Created

- **`scripts/setup-secrets.sh`** - Automated setup script
- **`SECRETS-SETUP.md`** - Detailed documentation
- Updated **`cdk/makeup-site-stack.ts`** - Reads from Secrets Manager
- Updated **`.env.example`** - Shows new configuration

## Deployment Flow

```
┌─────────────────┐
│  Your Computer  │
│                 │
│  1. Run deploy  │
└────────┬────────┘
         │
         ↓
┌────────────────────────┐
│   AWS Secrets Manager  │
│                        │
│  2. Get GitHub Token   │
└────────┬───────────────┘
         │
         ↓
┌────────────────────────┐
│    AWS Amplify         │
│                        │
│  3. Clone from GitHub  │
│  4. Build & Deploy     │
└────────────────────────┘
```

## Cost

- **AWS Secrets Manager**: ~$0.40/month
- Worth it for the security!

## Documentation

- **Quick Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Detailed Guide**: [SECRETS-SETUP.md](SECRETS-SETUP.md)
- **CDK Infrastructure**: [cdk/README.md](cdk/README.md)

## Troubleshooting

### Token Not Found Error
```bash
# Verify secret exists
nvm exec 20 aws secretsmanager describe-secret \
    --secret-id github-token \
    --region us-east-1

# If not found, run setup again
./scripts/setup-secrets.sh
```

### Permission Denied
```bash
# Check AWS credentials have Secrets Manager permissions
nvm exec 20 aws iam get-user
```

## Need Help?

See [SECRETS-SETUP.md](SECRETS-SETUP.md) for complete troubleshooting guide.
