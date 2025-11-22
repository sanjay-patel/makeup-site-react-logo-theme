# Google Analytics 4 Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your Bhumi Makeup Artistry website.

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (or create one if you don't have it)
3. Click "Start measuring" or "Admin" (gear icon)

## Step 2: Set Up Your Property

1. Click "Create Property"
2. Fill in the details:
   - **Property name**: Bhumi Makeup Artistry
   - **Reporting time zone**: India (GMT+05:30)
   - **Currency**: Indian Rupee (INR)
3. Click "Next"

## Step 3: Business Information

1. Select your industry category: **Beauty & Fitness**
2. Select business size: **Small** (1-10 employees)
3. Select how you plan to use Google Analytics:
   - ✅ Examine user behavior
   - ✅ Measure advertising ROI
4. Click "Create"
5. Accept the Terms of Service

## Step 4: Set Up Data Stream

1. Select platform: **Web**
2. Enter your website details:
   - **Website URL**: https://bhumimakeupartistry.com
   - **Stream name**: Bhumi Makeup Artistry Website
3. Click "Create stream"

## Step 5: Get Your Measurement ID

After creating the stream, you'll see your **Measurement ID** at the top of the page.
- It looks like: **G-XXXXXXXXXX** (starts with G-)
- **COPY THIS ID** - you'll need it in the next step

## Step 6: Add Measurement ID to Your Website

1. Create a file named `.env.local` in your project root (if it doesn't exist)
2. Add your Google Analytics Measurement ID:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 5.

Example:
```bash
NEXT_PUBLIC_GA_ID=G-ABC123XYZ4
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-existing-web3forms-key
```

3. Save the file
4. Restart your development server:
```bash
npm run dev
```

## Step 7: Verify Installation

1. Visit your website locally (http://localhost:3000)
2. Go back to Google Analytics
3. Click on "Reports" → "Realtime"
4. You should see yourself as an active user within 30 seconds
5. Navigate through different pages on your site - you should see the page views in real-time

## Step 8: Deploy to Production

1. Add the environment variable to your hosting platform (AWS Amplify):
   - Go to AWS Amplify Console
   - Select your app
   - Go to "Environment variables"
   - Add new variable:
     - Key: `NEXT_PUBLIC_GA_ID`
     - Value: `G-XXXXXXXXXX` (your Measurement ID)
   - Save and redeploy

2. After deployment, verify it's working:
   - Visit https://bhumimakeupartistry.com
   - Check Google Analytics Realtime reports
   - You should see active users

## What's Already Configured

Your website is already set up to track the following events automatically:

### 1. **Page Views**
- Automatically tracks every page visit
- Shows which pages are most popular

### 2. **Contact Form Submissions**
- Tracks when someone successfully submits the contact form
- Event name: `contact_form_submission`

### 3. **WhatsApp Button Clicks**
- Tracks when someone clicks the floating WhatsApp button
- Event name: `whatsapp_click`

### 4. **Additional Tracking Available**
The following tracking functions are available but need to be implemented where needed:
- Phone number clicks
- Email clicks
- Portfolio image views
- Service page views
- Brand logo clicks
- Booking attempts
- Destination wedding inquiries

## Understanding Your Data

### Key Reports to Check

1. **Realtime Report**
   - See current visitors on your site
   - What pages they're viewing right now

2. **Acquisition Report**
   - How users find your website
   - Which marketing channels work best
   - Google Search vs Social Media vs Direct traffic

3. **Engagement Report**
   - Most viewed pages
   - How long users stay
   - Which pages they visit before leaving

4. **Events Report**
   - Contact form submissions count
   - WhatsApp button click count
   - Other custom events

5. **Demographics Report**
   - Age and gender of visitors
   - Which cities they're from
   - What devices they use

## Important Privacy Notes

1. Google Analytics 4 is designed to be privacy-friendly
2. It doesn't collect personally identifiable information (PII)
3. It respects user privacy settings and browser restrictions
4. It complies with GDPR and other privacy regulations

## Tips for Your Makeup Business

### Week 1-2: Understanding Your Audience
- Check which cities your visitors come from
- See what time of day you get most traffic
- Understand which device type is most common (mobile/desktop)

### Month 1: Content Strategy
- Identify your most popular pages
- See which services get the most interest
- Check if destination wedding page is performing well

### Month 2-3: Marketing Optimization
- Compare traffic from Instagram vs Google Search
- See which marketing campaigns drive the most visitors
- Track conversion rate (visitors who contact you)

### Ongoing: Business Decisions
- Best times to post on social media (when traffic is highest)
- Which cities to target for destination wedding services
- Whether to invest more in bridal or party makeup services

## Common Questions

**Q: How long does it take for data to appear?**
A: Realtime data appears within 30 seconds. Full reports can take 24-48 hours to populate.

**Q: Will this slow down my website?**
A: No, Google Analytics loads asynchronously and doesn't affect page load speed.

**Q: Can I track Instagram traffic?**
A: Yes! You'll see Instagram referred traffic in the Acquisition reports.

**Q: What if I don't see any data?**
A:
1. Check if NEXT_PUBLIC_GA_ID is correctly set in .env.local
2. Restart your dev server
3. Make sure the Measurement ID starts with "G-"
4. Wait 24-48 hours for full reports to populate

**Q: Is this free?**
A: Yes, Google Analytics is completely free for websites like yours.

## Need Help?

If you encounter any issues:
1. Check the [Google Analytics Help Center](https://support.google.com/analytics)
2. Verify your Measurement ID is correct
3. Make sure the environment variable is properly set
4. Check browser console for any errors (F12 → Console tab)

## Next Steps

Once you have data coming in:
1. Set up conversion goals for business objectives
2. Create custom reports for your specific needs
3. Set up email alerts for important events
4. Link with Google Ads if you run paid campaigns

---

**Your website is now ready to track visitors and provide valuable insights for growing your makeup artistry business!**
