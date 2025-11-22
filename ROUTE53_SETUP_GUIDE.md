# Route 53 Setup Guide for GoDaddy Domain

This guide shows you how to use AWS Route 53 to manage DNS for your GoDaddy-registered domain `bhumimakeupartistry.com`.

## Why Use Route 53?

✅ **Better integration** with AWS Amplify (ALIAS records supported)
✅ **Automatic DNS management** for Amplify custom domains
✅ **Better performance** - AWS global network
✅ **No CNAME limitations** for root domain
✅ **Health checks and routing policies**
✅ **Lower latency** for DNS queries

**Cost:** ~$0.50/month for hosted zone + $0.40 per million queries

---

## Step-by-Step Setup

### Step 1: Create Route 53 Hosted Zone

#### Option A: Using AWS Console (Easiest)

1. Go to [Route 53 Console](https://console.aws.amazon.com/route53/)
2. Click **"Hosted zones"** in the left sidebar
3. Click **"Create hosted zone"** button
4. Enter details:
   - **Domain name:** `bhumimakeupartistry.com`
   - **Description:** (optional) "Bhumi Makeup Artistry website DNS"
   - **Type:** Public hosted zone
   - **Tags:** (optional) Add tags like `Project: BhumiMakeupArtistry`
5. Click **"Create hosted zone"**

#### Option B: Using AWS CLI

```bash
aws route53 create-hosted-zone \
  --name bhumimakeupartistry.com \
  --caller-reference $(date +%s) \
  --hosted-zone-config Comment="Bhumi Makeup Artistry DNS"
```

### Step 2: Get Route 53 Nameservers

After creating the hosted zone, AWS will assign 4 nameservers. You'll see them in the **NS record** in your hosted zone.

They will look like:
```
ns-123.awsdns-12.com
ns-456.awsdns-45.net
ns-789.awsdns-78.org
ns-012.awsdns-01.co.uk
```

**IMPORTANT:** Copy all 4 nameservers - you'll need them for GoDaddy.

### Step 3: Update Nameservers in GoDaddy

Now you need to tell GoDaddy to use Route 53 nameservers:

1. Log in to [GoDaddy](https://www.godaddy.com/)
2. Go to **"My Products"**
3. Find **bhumimakeupartistry.com**
4. Click the **DNS** button (or click the domain name, then "DNS" tab)
5. Scroll down to **"Nameservers"** section
6. Click **"Change"** button
7. Select **"I'll use my own nameservers"** (or "Custom")
8. Enter the 4 Route 53 nameservers from Step 2:
   ```
   Nameserver 1: ns-123.awsdns-12.com
   Nameserver 2: ns-456.awsdns-45.net
   Nameserver 3: ns-789.awsdns-78.org
   Nameserver 4: ns-012.awsdns-01.co.uk
   ```
9. Click **"Save"**
10. GoDaddy will show a warning - this is normal. Click **"Continue"**

**Note:** It can take 24-48 hours for nameserver changes to propagate globally, but usually happens within 1-2 hours.

### Step 4: Wait for Propagation

Check if nameservers have propagated:

#### Using Online Tool:
- Go to https://dnschecker.org
- Select **"NS"** record type
- Enter: `bhumimakeupartistry.com`
- Check if it shows your Route 53 nameservers globally

#### Using Command Line:
```bash
# Check nameservers
dig NS bhumimakeupartistry.com +short

# Or using nslookup
nslookup -type=NS bhumimakeupartistry.com
```

You should see your 4 Route 53 nameservers.

### Step 5: Configure Amplify Domain (After Nameservers Propagate)

#### Option A: Using AWS Amplify Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your app: **bhumi-makeup-artistry**
3. Click **"Domain management"** in left sidebar
4. Click **"Add domain"**
5. Enter: `bhumimakeupartistry.com`
6. Click **"Configure domain"**
7. Select:
   - ✅ bhumimakeupartistry.com (root)
   - ✅ www.bhumimakeupartistry.com
8. Click **"Save"**

**Magic happens!** 🎉
AWS Amplify will automatically:
- Create DNS records in Route 53
- Set up SSL certificate
- Configure both root and www domains
- No manual DNS configuration needed!

#### Option B: Using CDK

```bash
# Deploy with custom domain
export CUSTOM_DOMAIN=bhumimakeupartistry.com
npm run cdk:deploy
```

Your existing CDK code will automatically configure the domain in Amplify.

### Step 6: Verify Setup

After 5-15 minutes, check:

1. **AWS Amplify Console** → Domain Management
   - Status should show "Available" (green checkmark)
   - SSL certificate should be "Active"

2. **Route 53 Console** → Hosted Zones → bhumimakeupartistry.com
   - You should see A/AAAA records created automatically by Amplify

3. **Browser Test:**
   ```
   https://bhumimakeupartistry.com
   https://www.bhumimakeupartistry.com
   ```
   Both should load your website with SSL 🔒

---

## Complete Setup Using CDK (Advanced)

If you want to manage everything via CDK code, you can create the hosted zone and configure it:

### Create Enhanced CDK Stack

Create a new file `cdk/route53-stack.ts`:

```typescript
import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export interface Route53StackProps extends cdk.StackProps {
  domainName: string;
}

export class Route53Stack extends cdk.Stack {
  public readonly hostedZone: route53.IHostedZone;

  constructor(scope: Construct, id: string, props: Route53StackProps) {
    super(scope, id, props);

    // Create hosted zone
    this.hostedZone = new route53.PublicHostedZone(this, 'HostedZone', {
      zoneName: props.domainName,
      comment: 'Bhumi Makeup Artistry DNS managed by Route 53',
    });

    // Output nameservers
    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers || []),
      description: 'Add these nameservers to GoDaddy',
      exportName: 'Route53NameServers',
    });

    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      description: 'Route 53 Hosted Zone ID',
      exportName: 'HostedZoneId',
    });
  }
}
```

### Update `cdk/app.ts`:

```typescript
#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MakeupSiteStack } from './makeup-site-stack';
import { Route53Stack } from './route53-stack';

const app = new cdk.App();

const domainName = 'bhumimakeupartistry.com';

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
};

// Create Route 53 stack first
const route53Stack = new Route53Stack(app, 'BhumiMakeupArtistryRoute53Stack', {
  env,
  domainName,
  description: 'Route 53 DNS for Bhumi Makeup Artistry',
});

// Create Amplify stack with domain
new MakeupSiteStack(app, 'BhumiMakeupArtistryStack', {
  env,
  githubOwner: process.env.GITHUB_OWNER || '',
  githubRepo: 'makeup-site-react-logo-theme',
  githubBranch: 'main',
  githubTokenSecretName: 'github-token',
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
  customDomain: domainName,
  description: 'AWS Amplify hosting for Bhumi Makeup Artistry website',
});

app.synth();
```

### Deploy:

```bash
# Deploy Route 53 stack first
npm run cdk:deploy BhumiMakeupArtistryRoute53Stack

# Get nameservers from output and add to GoDaddy

# Wait for propagation, then deploy Amplify stack
npm run cdk:deploy BhumiMakeupArtistryStack
```

---

## DNS Records Explained

After setup, your Route 53 hosted zone will have these records:

### Default Records (Created by Route 53):

```
Type: NS
Name: bhumimakeupartistry.com
Value: ns-123.awsdns-12.com, ns-456.awsdns-45.net, ...
TTL: 172800 (48 hours)
```

```
Type: SOA (Start of Authority)
Name: bhumimakeupartistry.com
Value: ns-123.awsdns-12.com. awsdns-hostmaster.amazon.com. ...
TTL: 900 (15 minutes)
```

### Records Created by Amplify (Automatically):

```
Type: A (IPv4)
Name: bhumimakeupartistry.com
Value: ALIAS to CloudFront distribution
```

```
Type: AAAA (IPv6)
Name: bhumimakeupartistry.com
Value: ALIAS to CloudFront distribution
```

```
Type: A
Name: www.bhumimakeupartistry.com
Value: ALIAS to CloudFront distribution
```

```
Type: AAAA
Name: www.bhumimakeupartistry.com
Value: ALIAS to CloudFront distribution
```

---

## Adding Email Records (Optional)

If you want to use email with your domain (e.g., info@bhumimakeupartistry.com), you'll need to add MX records.

### Using Google Workspace (formerly G Suite):

In Route 53, add MX records:

```
Type: MX
Name: bhumimakeupartistry.com
Value:
  1 ASPMX.L.GOOGLE.COM
  5 ALT1.ASPMX.L.GOOGLE.COM
  5 ALT2.ASPMX.L.GOOGLE.COM
  10 ALT3.ASPMX.L.GOOGLE.COM
  10 ALT4.ASPMX.L.GOOGLE.COM
TTL: 3600
```

### Using GoDaddy Email:

Contact GoDaddy support for the correct MX records for your email plan.

---

## Common Scenarios

### Scenario 1: Keep GoDaddy Email, Use Route 53 for Website

1. Create hosted zone in Route 53
2. Before changing nameservers, copy all email-related DNS records from GoDaddy
3. Add those records to Route 53 (MX, TXT for email verification, etc.)
4. Then update nameservers in GoDaddy

### Scenario 2: Subdomain for Testing

Add a test subdomain before going live:

```bash
# In Route 53, add:
Type: A
Name: test.bhumimakeupartistry.com
Value: ALIAS to your Amplify CloudFront

# Access at: https://test.bhumimakeupartistry.com
```

### Scenario 3: Redirect Old Domain

If you had an old domain and want to redirect:

```bash
# In Route 53:
Type: A
Name: olddomain.com
Value: ALIAS to S3 bucket configured for redirect
```

---

## Verification & Testing

### 1. Check Nameservers Propagation

```bash
# Global propagation check
dig NS bhumimakeupartistry.com +trace

# Check specific DNS servers
dig @8.8.8.8 bhumimakeupartistry.com
dig @1.1.1.1 bhumimakeupartistry.com
```

### 2. Check Website Resolution

```bash
# Check A record
dig A bhumimakeupartistry.com +short

# Check AAAA (IPv6)
dig AAAA bhumimakeupartistry.com +short

# Check www subdomain
dig www.bhumimakeupartistry.com +short
```

### 3. Test SSL Certificate

```bash
# Check SSL
curl -I https://bhumimakeupartistry.com

# Detailed SSL check
openssl s_client -connect bhumimakeupartistry.com:443 -servername bhumimakeupartistry.com
```

### 4. Browser Check

Open these URLs:
- https://bhumimakeupartistry.com
- https://www.bhumimakeupartistry.com
- http://bhumimakeupartistry.com (should redirect to https)
- http://www.bhumimakeupartistry.com (should redirect to https)

---

## Troubleshooting

### Issue: Nameservers not updating in GoDaddy

**Solution:**
- Make sure you're using the correct GoDaddy account
- Try using "I'll use my own nameservers" option instead of "Custom"
- Contact GoDaddy support if nameserver field is disabled

### Issue: Website not loading after 24 hours

**Solution:**
1. Verify nameservers propagated: `dig NS bhumimakeupartistry.com`
2. Check Route 53 has the correct records
3. Verify Amplify domain status is "Available"
4. Clear browser cache and DNS cache:
   ```bash
   # Mac
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns
   ```

### Issue: SSL certificate not working

**Solution:**
- Wait 15-30 minutes for certificate provisioning
- Check Amplify Console → Domain Management → SSL status
- Ensure you're accessing with https:// not http://

### Issue: www works but root doesn't (or vice versa)

**Solution:**
- Check both A records exist in Route 53 for root and www
- Wait for DNS propagation
- Verify Amplify configured both domains

---

## Cost Breakdown

### Route 53 Costs:

- **Hosted Zone:** $0.50/month
- **Queries:** $0.40 per million queries (first billion per month)
- **Alias queries:** FREE (queries to AWS resources like CloudFront)

### Expected Monthly Cost:
- Small website: ~$0.50 - $1.00/month
- Medium traffic: ~$1.00 - $2.00/month

Much cheaper than some DNS providers and better AWS integration!

---

## Benefits of This Setup

✅ **Automatic DNS Management:** Amplify creates records automatically
✅ **ALIAS Records:** No CNAME limitations for root domain
✅ **Better Performance:** AWS global network, lower latency
✅ **Integrated Monitoring:** CloudWatch metrics for DNS queries
✅ **Health Checks:** Can add Route 53 health checks
✅ **Traffic Policies:** Advanced routing if needed later
✅ **Version Control:** Can manage DNS via CDK code

---

## Next Steps After Setup

1. ✅ Test website loads on both www and non-www
2. ✅ Verify SSL certificate is active
3. ✅ Update Google Analytics with new domain
4. ✅ Update social media links
5. ✅ Set up email (if needed)
6. ✅ Add Google Search Console verification TXT record
7. ✅ Configure email forwarding (if using GoDaddy email forwarding)

---

## Important Notes

⚠️ **Domain Registration:** Your domain is still registered with GoDaddy. You're only changing DNS management to Route 53.

⚠️ **Domain Renewal:** Continue to renew your domain in GoDaddy annually.

⚠️ **Email:** If you use GoDaddy email, copy those DNS records to Route 53 before changing nameservers.

⚠️ **Nameserver Change:** Can take up to 48 hours to propagate globally (usually 1-2 hours).

---

## Support Resources

- **Route 53 Documentation:** https://docs.aws.amazon.com/route53/
- **Amplify Custom Domains:** https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html
- **DNS Propagation Checker:** https://dnschecker.org
- **AWS Support:** Available in AWS Console

---

Your domain will be live at **https://bhumimakeupartistry.com** with full AWS integration and automatic SSL certificate! 🎉
