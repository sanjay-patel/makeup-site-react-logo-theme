#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MakeupSiteStack } from './makeup-site-stack';

const app = new cdk.App();

// Get configuration from context or environment variables
const githubOwner = app.node.tryGetContext('githubOwner') || process.env.GITHUB_OWNER || '';
const githubRepo = app.node.tryGetContext('githubRepo') || process.env.GITHUB_REPO || 'makeup-site-react-logo-theme';
const githubBranch = app.node.tryGetContext('githubBranch') || process.env.GITHUB_BRANCH || 'main';
const githubToken = app.node.tryGetContext('githubToken') || process.env.GITHUB_TOKEN || '';
const web3formsAccessKey = app.node.tryGetContext('web3formsAccessKey') || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';
const customDomain = app.node.tryGetContext('customDomain') || process.env.CUSTOM_DOMAIN;

// AWS account and region
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
};

new MakeupSiteStack(app, 'BhumiMakeupArtistryStack', {
  env,
  githubOwner,
  githubRepo,
  githubBranch,
  githubToken,
  web3formsAccessKey,
  customDomain,
  description: 'AWS Amplify hosting for Bhumi Makeup Artistry website',
});

app.synth();
