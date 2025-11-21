#!/bin/bash

# Script to securely store GitHub token in AWS Secrets Manager
# This script will prompt you for the token so it's not exposed in chat/history

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔐 GitHub Token to AWS Secrets Manager${NC}"
echo ""

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Load environment variables for region
if [ -f .env ]; then
    set -a
    source .env
    set +a
fi

SECRET_NAME="github-token"
REGION="${CDK_DEFAULT_REGION:-us-east-1}"

echo -e "${YELLOW}Please enter your GitHub Personal Access Token:${NC}"
echo -e "${YELLOW}(Token will not be displayed as you type)${NC}"
read -s GITHUB_TOKEN
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}❌ No token provided!${NC}"
    exit 1
fi

echo -e "${YELLOW}Secret Name: ${SECRET_NAME}${NC}"
echo -e "${YELLOW}Region: ${REGION}${NC}"
echo ""

# Check if secret already exists
echo -e "${BLUE}Checking if secret already exists...${NC}"
if nvm exec 20 aws secretsmanager describe-secret --secret-id "$SECRET_NAME" --region "$REGION" &> /dev/null; then
    echo -e "${YELLOW}⚠️  Secret already exists. Updating...${NC}"

    # Update existing secret
    nvm exec 20 aws secretsmanager update-secret \
        --secret-id "$SECRET_NAME" \
        --secret-string "$GITHUB_TOKEN" \
        --region "$REGION"

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Secret updated successfully!${NC}"
    else
        echo -e "${RED}❌ Failed to update secret${NC}"
        exit 1
    fi
else
    echo -e "${BLUE}Creating new secret...${NC}"

    # Create new secret
    nvm exec 20 aws secretsmanager create-secret \
        --name "$SECRET_NAME" \
        --description "GitHub Personal Access Token for AWS Amplify deployment" \
        --secret-string "$GITHUB_TOKEN" \
        --region "$REGION"

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Secret created successfully!${NC}"
    else
        echo -e "${RED}❌ Failed to create secret${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ GitHub token stored in AWS Secrets Manager${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}Secret Details:${NC}"
echo -e "  Name: ${SECRET_NAME}"
echo -e "  Region: ${REGION}"
echo -e "  ARN: $(nvm exec 20 aws secretsmanager describe-secret --secret-id "$SECRET_NAME" --region "$REGION" --query 'ARN' --output text 2>/dev/null)"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo -e "  1. Deploy your stack: ${GREEN}./cdk.sh deploy${NC}"
echo ""
