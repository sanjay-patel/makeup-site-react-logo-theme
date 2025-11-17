# AWS Secrets Manager Setup Guide

This guide explains how to securely store your GitHub Personal Access Token in AWS Secrets Manager instead of keeping it in environment variables.

## 🔐 Why Use AWS Secrets Manager?

- ✅ **Secure Storage**: Tokens are encrypted at rest
- ✅ **Never Committed**: No risk of accidentally committing secrets to Git
- ✅ **Automatic Rotation**: Can rotate secrets without code changes
- ✅ **Access Control**: IAM policies control who can access secrets
- ✅ **Audit Trail**: CloudTrail logs all secret access

## 📋 Prerequisites

1. AWS CLI configured with valid credentials
2. GitHub Personal Access Token with `repo` permissions
3. `.env` file with `GITHUB_TOKEN` set

## 🚀 Quick Setup (Automated)

### Step 1: Create GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Name: `AWS Amplify Deploy`
4. Select scopes:
   - ✅ `repo` (all sub-options)
   - ✅ `admin:repo_hook`
5. Click **Generate token**
6. **Copy the token** (you won't see it again!)

### Step 2: Add Token to .env File (Temporarily)

Edit your `.env` file and add:

```bash
GITHUB_TOKEN=ghp_your_token_here
```

### Step 3: Run Setup Script

```bash
# Make sure you're in the project root
./scripts/setup-secrets.sh
```

This script will:
- Read `GITHUB_TOKEN` from your `.env` file
- Store it in AWS Secrets Manager as `github-token`
- Confirm successful storage

### Step 4: Remove Token from .env (Recommended)

After the script succeeds, you can safely remove `GITHUB_TOKEN` from your `.env` file:

```bash
# Edit .env and remove or comment out the GITHUB_TOKEN line
# GITHUB_TOKEN=ghp_...
```

### Step 5: Deploy

```bash
./cdk.sh deploy
```

The CDK stack will automatically read the token from AWS Secrets Manager.

## 🛠️ Manual Setup (Alternative)

If you prefer to set up manually:

```bash
# Store the secret
nvm exec 20 aws secretsmanager create-secret \
    --name github-token \
    --description "GitHub Personal Access Token for AWS Amplify" \
    --secret-string "ghp_your_token_here" \
    --region us-east-1

# Verify it was created
nvm exec 20 aws secretsmanager describe-secret \
    --secret-id github-token \
    --region us-east-1
```

## 🔄 Updating the Token

If you need to update the token (e.g., it expired or was rotated):

### Option 1: Using the Script

```bash
# Update GITHUB_TOKEN in .env with new token
# Then run:
./scripts/setup-secrets.sh
```

### Option 2: Manual Update

```bash
nvm exec 20 aws secretsmanager update-secret \
    --secret-id github-token \
    --secret-string "ghp_new_token_here" \
    --region us-east-1
```

### Option 3: AWS Console

1. Go to https://console.aws.amazon.com/secretsmanager/
2. Click on `github-token`
3. Click **Retrieve secret value**
4. Click **Edit**
5. Update the secret value
6. Click **Save**

## 🔍 Verifying the Secret

```bash
# Check if secret exists
nvm exec 20 aws secretsmanager describe-secret \
    --secret-id github-token \
    --region us-east-1

# Get the secret value (be careful, this shows the token!)
nvm exec 20 aws secretsmanager get-secret-value \
    --secret-id github-token \
    --region us-east-1 \
    --query SecretString \
    --output text
```

## 🗑️ Deleting the Secret

If you need to remove the secret:

```bash
# Delete immediately (cannot be undone!)
nvm exec 20 aws secretsmanager delete-secret \
    --secret-id github-token \
    --force-delete-without-recovery \
    --region us-east-1
```

## ⚙️ Custom Secret Name

If you want to use a different secret name:

1. Update `.env`:
   ```bash
   GITHUB_TOKEN_SECRET_NAME=my-custom-secret-name
   ```

2. Store the secret with that name:
   ```bash
   ./scripts/setup-secrets.sh
   ```

3. Deploy:
   ```bash
   ./cdk.sh deploy
   ```

## 💰 Cost

AWS Secrets Manager pricing:
- **$0.40 per secret per month**
- **$0.05 per 10,000 API calls**

For this deployment (1 secret, low API call volume):
- **~$0.40/month**

## 🔒 Security Best Practices

1. ✅ **Never commit** secrets to Git
2. ✅ **Use IAM policies** to restrict access
3. ✅ **Enable secret rotation** for production
4. ✅ **Monitor access** using CloudTrail
5. ✅ **Delete unused secrets**

## 📊 IAM Permissions Required

The AWS credentials you use need these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "secretsmanager:CreateSecret",
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret",
        "secretsmanager:UpdateSecret"
      ],
      "Resource": "arn:aws:secretsmanager:*:*:secret:github-token*"
    }
  ]
}
```

## ❓ Troubleshooting

### Error: AccessDeniedException

**Problem**: IAM user lacks permissions

**Solution**:
```bash
# Add SecretsManagerReadWrite policy to your IAM user
nvm exec 20 aws iam attach-user-policy \
    --user-name your-iam-username \
    --policy-arn arn:aws:iam::aws:policy/SecretsManagerReadWrite
```

### Error: ResourceNotFoundException

**Problem**: Secret doesn't exist

**Solution**: Run `./scripts/setup-secrets.sh` to create it

### Error: InvalidParameterException

**Problem**: Secret name is invalid

**Solution**: Use only letters, numbers, and hyphens in secret name

## 📚 Additional Resources

- [AWS Secrets Manager Documentation](https://docs.aws.amazon.com/secretsmanager/)
- [Best Practices for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/best-practices.html)
- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
