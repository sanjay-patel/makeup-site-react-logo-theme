#!/bin/bash

# Script to update the existing GitHubToken secret in AWS Secrets Manager

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔐 Update GitHub Token in AWS Secrets Manager${NC}"
echo ""

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Load environment variables
if [ -f .env ]; then
    set -a
    source .env
    set +a
fi

SECRET_NAME="${GITHUB_TOKEN_SECRET_NAME:-github-token}"
REGION="${CDK_DEFAULT_REGION:-us-east-1}"

echo -e "${YELLOW}Instructions:${NC}"
echo "1. Go to: https://github.com/settings/tokens"
echo "2. Click 'Generate new token (classic)'"
echo "3. Name: AWS Amplify Deploy"
echo "4. Select permissions:"
echo "   - ✅ repo (all sub-options)"
echo "   - ✅ admin:repo_hook"
echo "5. Click 'Generate token'"
echo "6. Copy the token (starts with ghp_...)"
echo ""
echo -e "${YELLOW}Enter your GitHub Personal Access Token:${NC}"
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

# Update the secret
echo -e "${BLUE}Updating secret...${NC}"
nvm exec 20 aws secretsmanager update-secret \
    --secret-id "$SECRET_NAME" \
    --secret-string "$GITHUB_TOKEN" \
    --region "$REGION"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ GitHub token updated successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
    echo -e "${BLUE}Secret Details:${NC}"
    echo -e "  Name: ${SECRET_NAME}"
    echo -e "  Region: ${REGION}"
    echo ""
    echo -e "${YELLOW}📝 Next Steps:${NC}"
    echo -e "  1. Deploy your stack: ${GREEN}./cdk.sh deploy${NC}"
    echo ""
else
    echo -e "${RED}❌ Failed to update secret${NC}"
    exit 1
fi
