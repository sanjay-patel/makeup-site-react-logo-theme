# GoDaddy Domain Setup for AWS Amplify

This guide will help you connect your GoDaddy domain `bhumimakeupartistry.com` to your AWS Amplify application.

## Prerequisites

- Domain registered in GoDaddy: `bhumimakeupartistry.com`
- AWS Amplify app already deployed
- Access to AWS Console
- Access to GoDaddy account

## Option 1: Using AWS Amplify Console (Recommended - Easiest)

This is the simplest method and AWS will automatically provide the DNS records you need.

### Step 1: Add Domain in AWS Amplify Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click on your app: **bhumi-makeup-artistry**
3. In the left sidebar, click **"Domain management"** under "App settings"
4. Click **"Add domain"** button
5. Enter your domain: `bhumimakeupartistry.com`
6. Click **"Configure domain"**
7. AWS will show you the configuration page with subdomains:
   - Select **"bhumimakeupartistry.com"** (root domain)
   - Select **"www.bhumimakeupartistry.com"** (www subdomain)
8. Click **"Save"**

### Step 2: Get DNS Records from AWS

After saving, AWS Amplify will show you DNS records that need to be added to GoDaddy. It will look something like:

```
Type: CNAME
Name: bhumimakeupartistry.com
Value: xxxxx.cloudfront.net

Type: CNAME
Name: www
Value: xxxxx.cloudfront.net
```

**IMPORTANT:** Copy these DNS records - you'll need them in the next step.

### Step 3: Update DNS in GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com/)
2. Go to **"My Products"**
3. Find **bhumimakeupartistry.com** and click **"DNS"** button
4. You'll see the DNS Management page

#### For Root Domain (bhumimakeupartistry.com):

1. Find the existing **A record** with name **@**
2. Click the **pencil icon** to edit
3. Change **Type** from "A" to **"CNAME"**
4. In the **"Points to"** field, paste the CloudFront value from AWS (e.g., `xxxxx.cloudfront.net`)
5. Set **TTL** to **1 Hour** (or leave default)
6. Click **"Save"**

**Note:** GoDaddy might not allow CNAME for root domain (@). If that's the case, use the ANAME/ALIAS record option if available, or see "Alternative Method" below.

#### For WWW Subdomain:

1. Click **"Add"** button to add a new record
2. **Type:** CNAME
3. **Name:** www
4. **Value:** Paste the CloudFront value from AWS (e.g., `xxxxx.cloudfront.net`)
5. **TTL:** 1 Hour
6. Click **"Save"**

### Step 4: Wait for Verification

1. Go back to AWS Amplify Console
2. The domain status will show **"Pending verification"**
3. Wait 15-30 minutes (can take up to 48 hours)
4. Refresh the page
5. Once verified, status will change to **"Available"**

### Step 5: SSL Certificate

AWS Amplify automatically provisions an SSL certificate for your domain. This usually takes 5-15 minutes after DNS verification.

---

## Option 2: Using CDK Deployment (Programmatic)

If you want to deploy the domain configuration using your existing CDK code:

### Step 1: Update CDK Configuration

You can deploy with the custom domain using environment variable:

```bash
export CUSTOM_DOMAIN=bhumimakeupartistry.com
npm run cdk:deploy
```

Or add it to your CDK context in `cdk.json`:

```json
{
  "context": {
    "customDomain": "bhumimakeupartistry.com"
  }
}
```

### Step 2: Deploy the Stack

```bash
npm run cdk:deploy
```

The CDK will automatically:
- Configure the domain in Amplify
- Set up both root domain and www subdomain
- Output the DNS records you need to add to GoDaddy

### Step 3: Get DNS Records from CDK Output

After deployment, check the AWS Amplify Console or CloudFormation outputs for the DNS records.

### Step 4: Follow Step 3-5 from Option 1 Above

---

## Alternative Method (If GoDaddy Doesn't Support CNAME for Root)

GoDaddy sometimes doesn't allow CNAME records for the root domain. In that case:

### Option A: Use Domain Forwarding

1. In GoDaddy, go to Domain Settings
2. Set up **Domain Forwarding**:
   - Forward `bhumimakeupartistry.com` to `www.bhumimakeupartistry.com`
   - Select **"301 (Permanent)"** redirect
   - Enable **"Forward only"**
3. Keep the CNAME record for **www** pointing to AWS CloudFront

### Option B: Use A Records with IP Addresses

1. Contact AWS Support to get the IP addresses for your CloudFront distribution
2. Add multiple **A records** for the root domain (@) with those IPs
3. Keep CNAME for www subdomain

### Option C: Transfer DNS to Route 53 (Most Reliable)

For best performance and full AWS integration:

1. Create a **Route 53 Hosted Zone** in AWS
2. Get the nameservers from Route 53 (e.g., `ns-123.awsdns-12.com`)
3. In GoDaddy:
   - Go to Domain Settings
   - Click **"Manage DNS"**
   - Scroll to **"Nameservers"**
   - Click **"Change"**
   - Select **"Custom"**
   - Enter the Route 53 nameservers
   - Save
4. AWS Amplify can now fully manage your DNS with ALIAS records

---

## Verification Steps

After completing the setup, verify your domain is working:

### 1. Check DNS Propagation

Use online tools to check if DNS has propagated:
- https://dnschecker.org
- Enter: `bhumimakeupartistry.com`
- Check if CNAME points to CloudFront

### 2. Test Your Website

Wait 15-30 minutes after updating DNS, then try:

```bash
# Test root domain
curl -I https://bhumimakeupartistry.com

# Test www subdomain
curl -I https://www.bhumimakeupartistry.com
```

Both should return 200 OK status.

### 3. Browser Test

Open in browser:
- https://bhumimakeupartistry.com
- https://www.bhumimakeupartistry.com

Both should load your website with SSL (🔒 lock icon).

---

## Troubleshooting

### Domain shows "Pending verification" for more than 1 hour

**Solution:**
1. Verify DNS records in GoDaddy are correct
2. Check for typos in CloudFront URL
3. Make sure there are no conflicting DNS records
4. DNS propagation can take up to 48 hours

### SSL Certificate not working

**Solution:**
1. Wait 15-30 minutes for certificate provisioning
2. Ensure domain is fully verified in Amplify
3. Try accessing with https:// (not http://)

### "This site can't be reached" error

**Solution:**
1. Check DNS propagation: https://dnschecker.org
2. Verify CNAME records are correct
3. Wait for DNS to propagate globally (up to 48 hours)
4. Clear browser cache and try incognito mode

### GoDaddy won't let me add CNAME for root domain

**Solution:**
- Use Domain Forwarding (Option A above)
- Or transfer DNS to Route 53 (Option C above)

### Both domains work but one redirects to the other

**Solution:**
This is normal! AWS Amplify typically redirects:
- `bhumimakeupartistry.com` → `www.bhumimakeupartistry.com`
- Or vice versa

You can configure the redirect preference in Amplify Console under Domain Management.

---

## Current Configuration Needed

Based on your setup, you need to add these DNS records in GoDaddy:

1. **Get the actual CloudFront URL** from AWS Amplify Console first
2. Add CNAME records in GoDaddy pointing to that CloudFront URL
3. Wait for verification

---

## Quick Start Commands

To deploy with custom domain using CDK:

```bash
# Set environment variable
export CUSTOM_DOMAIN=bhumimakeupartistry.com

# Deploy the stack
npm run cdk:deploy

# Check the outputs for DNS records to add to GoDaddy
```

---

## Important Notes

1. **DNS Propagation**: Changes can take 15 minutes to 48 hours to propagate globally
2. **SSL Certificate**: Automatically provisioned by AWS, no manual setup needed
3. **Cost**: AWS Amplify hosting includes SSL certificate at no extra cost
4. **Email**: This setup is for website hosting only. If you need email on this domain, set up MX records separately in GoDaddy
5. **WWW vs Non-WWW**: AWS will automatically handle redirects between www and non-www versions

---

## Post-Setup Updates

After domain is connected, update your website configuration:

1. Update Google Analytics domain (if configured)
2. Update Web3Forms allowed domains
3. Update social media links with new domain
4. Update any marketing materials with new URL
5. Set up 301 redirects from old domain (if you had one)

---

## Need Help?

If you encounter issues:
1. Check AWS Amplify Console → Domain Management for detailed status
2. Use GoDaddy support chat for DNS-related questions
3. AWS Support for Amplify-specific issues
4. DNS propagation tools: https://dnschecker.org

Your domain should be live at https://bhumimakeupartistry.com within 1-2 hours of completing these steps!
