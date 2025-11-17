# Bhumi Makeup Artistry Website

Professional makeup artist portfolio and booking website built with Next.js 14.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Deployment to AWS
```bash
# First time setup
./cdk.sh bootstrap

# Deploy
./cdk.sh deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guide.

## 📋 Features

- ✨ Modern, responsive design
- 💄 Service showcase (Bridal, Party, Photoshoot, Editorial)
- 🌍 Destination wedding services across India
- 📸 Portfolio gallery
- 📱 Mobile-friendly
- 📧 Contact form with Web3Forms integration
- 🎨 Premium brand showcase
- 🔍 SEO optimized with structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS
- **Forms:** Web3Forms
- **Deployment:** AWS Amplify (via CDK)
- **CI/CD:** Automatic from GitHub

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── destination-wedding/ # Destination wedding services
│   ├── portfolio/         # Portfolio gallery
│   └── page.tsx           # Home page
├── components/            # React components
├── data/                  # Data files (brands, etc.)
├── public/                # Static assets
├── cdk/                   # AWS CDK infrastructure
└── cdk.sh                 # Deployment helper script
```

## 🌐 Deployment

This project uses AWS CDK to deploy to AWS Amplify with automatic CI/CD.

### Prerequisites
- AWS account with valid credentials
- GitHub repository
- Node.js 20 (via nvm)

### Deploy
```bash
# Configure AWS credentials
nvm exec 20 aws configure

# Bootstrap CDK (first time only)
./cdk.sh bootstrap

# Deploy to AWS
./cdk.sh deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete guide.

## 📝 Environment Variables

Create `.env.local` for development:
```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

For deployment, configure in `.env`:
```bash
GITHUB_OWNER=your-username
GITHUB_REPO=your-repo
GITHUB_BRANCH=production
GITHUB_TOKEN=your_github_token
CDK_DEFAULT_ACCOUNT=your_aws_account_id
CDK_DEFAULT_REGION=us-east-1
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

## 💰 Cost

AWS Amplify hosting: **$2-8/month** for typical traffic

## 📚 Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [cdk/README.md](cdk/README.md) - CDK infrastructure details

## 🔧 Available Scripts

```bash
# Development
npm run dev         # Start development server
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint

# Deployment
./cdk.sh bootstrap  # Bootstrap CDK (first time)
./cdk.sh deploy     # Deploy to AWS
./cdk.sh synth      # View CloudFormation template
./cdk.sh diff       # Check deployment changes
./cdk.sh destroy    # Remove from AWS
```

## 📞 Contact

- **Website:** [Deployed URL from Amplify]
- **Instagram:** [@bhumimakeupartistry](https://www.instagram.com/bhumimakeupartistry/)
- **Location:** Surat, Gujarat, India

## 📄 License

All rights reserved © 2024 Bhumi Makeup Artistry
