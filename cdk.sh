#!/bin/bash

# CDK Helper Script - Ensures CDK commands run with Node 20
# Usage: ./cdk.sh [cdk-command] [args...]
# Examples:
#   ./cdk.sh bootstrap
#   ./cdk.sh deploy
#   ./cdk.sh synth
#   ./cdk.sh diff
#   ./cdk.sh destroy

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Running CDK with Node 20...${NC}"

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if nvm loaded successfully
if ! type nvm &> /dev/null; then
    echo -e "${RED}❌ nvm is not available. Please install nvm first.${NC}"
    exit 1
fi

# Verify Node version
NODE_VERSION=$(nvm exec 20 node --version 2>&1)
echo -e "${GREEN}✓ Using Node ${NODE_VERSION}${NC}"

# Load environment variables from .env if it exists
if [ -f .env ]; then
    echo -e "${GREEN}✓ Loading environment variables from .env${NC}"
    set -a
    source .env
    set +a
fi

# Run CDK command with Node 20
if [ $# -eq 0 ]; then
    echo -e "${BLUE}Available CDK commands:${NC}"
    echo "  bootstrap - Bootstrap CDK in your AWS account"
    echo "  deploy    - Deploy the stack to AWS"
    echo "  synth     - Synthesize CloudFormation template"
    echo "  diff      - Show differences with deployed stack"
    echo "  destroy   - Destroy the stack"
    echo ""
    echo "Usage: ./cdk.sh [command]"
else
    nvm exec 20 npx cdk "$@"
fi
