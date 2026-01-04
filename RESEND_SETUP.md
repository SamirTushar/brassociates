# Resend Email Setup Guide

## What is Resend?

Resend is an email service that will send you notifications when someone fills out the consultation form on your website. It's free for up to 100 emails per day.

## Setup Steps

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" (you can sign up with GitHub, Google, or email)
3. Verify your email address

### 2. Get Your API Key

1. After logging in, go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name like "BR Associates Website"
4. Select "Full Access" permission
5. Click "Create"
6. **Copy the API key** (it starts with `re_` - you'll only see this once!)

### 3. Add API Key to Your Website

1. Open the `.env.local` file in your project
2. Find the line that says `RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx`
3. Replace `re_xxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual API key
4. Save the file

**Example:**
```
RESEND_API_KEY=re_abc123def456ghi789jkl012mno345
```

### 4. Restart Your Development Server

If you're running the website locally:
1. Stop the server (Ctrl+C in terminal)
2. Start it again: `npm run dev`

### 5. Test the Form

1. Go to your website's Consultation section
2. Fill out the form with test data
3. Submit the form
4. Check your email (adv.bhaktirajput@gmail.com) - you should receive a notification!

## Important Notes

### Free Tier Limits
- 100 emails per day (FREE)
- 3,000 emails per month (FREE)
- This should be more than enough for a law firm website

### Email From Address
Currently, the form sends emails from `onboarding@resend.dev`. This is Resend's test domain.

**To use your own domain (optional):**
1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Add your domain
3. Add the DNS records they provide
4. Wait for verification (usually takes a few minutes)
5. Update the API route to use your domain:
   ```typescript
   from: 'Consultation Form <noreply@yourdomain.com>'
   ```

### Troubleshooting

**"Failed to send email" error:**
- Check that your API key is correct in `.env.local`
- Make sure you restarted the server after adding the key
- Check the Resend dashboard for any errors

**Not receiving emails:**
- Check your spam folder
- Verify the email address in the API route (`src/app/api/consultation/route.ts`)
- Check Resend logs at [https://resend.com/logs](https://resend.com/logs)

**Still having issues?**
- Contact Resend support (they're very responsive!)
- Check their documentation: [https://resend.com/docs](https://resend.com/docs)

## What Happens When Someone Submits the Form?

1. User fills out the consultation form
2. Form data is sent to your website's API
3. API validates the data
4. API sends a formatted email to **adv.bhaktirajput@gmail.com**
5. You receive the notification with all the client details
6. User sees a success message on the website

## Email Content

The email you receive will include:
- Full Name
- Mobile Number (clickable to call)
- Email Address (if provided, clickable to reply)
- Type of Legal Matter
- Preferred Consultation Mode
- Preferred Date/Time (if provided)
- Brief Description (if provided)

All formatted nicely with your law firm's colors!

---

**Need Help?** The setup should take less than 5 minutes. If you have any questions, check the Resend documentation or contact their support team.
