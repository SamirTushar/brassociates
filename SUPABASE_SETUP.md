# Supabase Database Setup Guide

## Why Supabase?

Supabase provides a **secure database** to store all consultation requests. Benefits:

- ✅ **Never lose a consultation** - Even if email fails, data is saved
- ✅ **Built-in viewer** - Beautiful UI to see all consultations (no coding needed)
- ✅ **Give access to staff** - Create accounts for people who need to view consultations
- ✅ **Search & Filter** - Find consultations by name, phone, date, status
- ✅ **Track status** - Mark consultations as Pending/Contacted/Scheduled/Completed
- ✅ **Export to Excel** - Download all data with one click
- ✅ **100% Free** for your use case (up to 500 MB database)

---

## Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up with GitHub or Email
4. Verify your email address

---

## Step 2: Create a New Project

1. After logging in, click **"New Project"**
2. Fill in:
   - **Name**: `BR Associates`
   - **Database Password**: Choose a strong password (save it somewhere safe!)
   - **Region**: Choose closest to India (e.g., `Southeast Asia (Singapore)`)
3. Click **"Create new project"**
4. Wait 2-3 minutes for setup to complete

---

## Step 3: Create the Database Table

1. In your project dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy the ENTIRE contents of the `supabase-schema.sql` file from your project
4. Paste it into the SQL editor
5. Click **"Run"** (bottom right corner)
6. You should see "Success. No rows returned"

**What this does:**
- Creates a `consultations` table to store all form submissions
- Adds indexes for fast searching
- Sets up security (only your website can add data, only logged-in users can view)
- Adds automatic timestamps

---

## Step 4: Get Your API Credentials

1. Click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. You'll see:
   - **Project URL** - Copy this (looks like `https://xxxxx.supabase.co`)
   - **anon public** key - Click "Copy" next to it

---

## Step 5: Add Credentials to Your Website

1. Open your project's `.env.local` file
2. Find these lines:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```
3. Replace with your actual values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```
4. Save the file
5. Restart your dev server:
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

---

## Step 6: Add to Vercel (Deployment)

For your live website to work:

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add both variables:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`, Value: `https://xxxxx.supabase.co`
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`, Value: `eyJhbGci...`
5. Click **Save**
6. Redeploy your site

---

## Step 7: Test the Form

1. Go to your website
2. Fill out the consultation form
3. Submit it
4. Check Supabase:
   - Go to **"Table Editor"** in left sidebar
   - Click on `consultations` table
   - You should see your test submission!

---

## How to View Consultations (For Lawyer/Staff)

### Option 1: Use Supabase Dashboard (Recommended)

The easiest way to view consultations:

1. Go to [https://supabase.com](https://supabase.com)
2. Log in
3. Select the "BR Associates" project
4. Click **"Table Editor"** in left sidebar
5. Click on the **`consultations`** table

**You'll see a beautiful table with:**
- Full Name
- Mobile Number
- Email
- Legal Matter
- Consultation Mode
- Preferred Date/Time
- Description
- Status (Pending/Contacted/etc.)
- Created At (when they submitted)

**Features:**
- 🔍 **Search**: Type in the search box to find specific consultations
- 🏷️ **Filter**: Click column headers to filter by status, date, etc.
- ✏️ **Edit Status**: Click on a row → Change "status" from "pending" to "contacted"
- 📊 **Export**: Click "..." menu → "Download as CSV" to export to Excel
- 🔄 **Real-time**: Refreshes automatically when new consultations come in

### Option 2: Give Access to Staff Members

To let staff view consultations without your login:

1. In Supabase dashboard, click **"Authentication"** in left sidebar
2. Click **"Users"** → **"Invite user"**
3. Enter staff member's email address
4. They'll receive an invite email
5. They create their own password
6. They can now log in and view the `consultations` table

**Security:**
- Staff can VIEW and UPDATE consultations (mark status)
- Staff CANNOT delete consultations
- Staff CANNOT see your API keys or settings

---

## Managing Consultation Status

You can track the progress of each consultation:

1. Go to Table Editor → consultations table
2. Click on any row
3. Change the **status** field:
   - **pending** - New consultation, not yet contacted
   - **contacted** - You've called/emailed them
   - **scheduled** - Consultation meeting is scheduled
   - **completed** - Consultation finished
   - **cancelled** - Client cancelled or no-show

This helps you keep track of which consultations need follow-up!

---

## How It Works (Behind the Scenes)

When someone submits the consultation form:

1. ✅ Form data is **saved to Supabase database first** (most important!)
2. 📧 Then an email is sent to adv.bhaktirajput@gmail.com
3. ✅ Success message shown to user

**If email fails:**
- ✅ Data is still safe in database
- ⚠️ Warning is logged (you can check database directly)
- ✅ User still sees success message

**You'll never lose a consultation request!**

---

## Common Tasks

### View All Consultations
1. Table Editor → consultations
2. Sorted by newest first automatically

### Search for a Specific Client
1. Table Editor → consultations
2. Use search box (searches name, mobile, email, legal matter)

### Export to Excel
1. Table Editor → consultations
2. Click "..." menu in top right
3. Select "Download as CSV"
4. Open in Excel

### See Only Pending Consultations
1. Table Editor → consultations
2. Click "Filter" → status → "pending"

### Mark Consultation as Contacted
1. Table Editor → consultations
2. Click on the row
3. Change status to "contacted"
4. Click outside to save

---

## Free Tier Limits

Supabase free tier includes:
- ✅ 500 MB database storage (thousands of consultations)
- ✅ 2 GB bandwidth per month
- ✅ 50,000 monthly active users
- ✅ Unlimited API requests

**This is more than enough for a law firm website!**

If you somehow exceed limits (unlikely), Supabase will notify you and you can upgrade for ~$25/month.

---

## Troubleshooting

### "Failed to save consultation request"
- Check that you added SUPABASE_URL and SUPABASE_ANON_KEY to .env.local
- Check that you ran the SQL schema (Step 3)
- Restart your dev server

### "Cannot see consultations in Table Editor"
- Make sure you ran the SQL schema completely
- Refresh the Table Editor page
- Check that you're looking at the right project

### "Email not received but data is saved"
- This is OK! Data is safe in database
- Check Resend configuration (see RESEND_SETUP.md)
- You can still view the consultation in Supabase

### "Cannot give access to staff"
- Make sure you've enabled authentication
- Staff member needs to check spam for invite email
- They need to create a password when they first log in

---

## Security Notes

✅ **Your data is secure:**
- Database is protected with Row Level Security (RLS)
- Only your website can insert data
- Only authenticated users can view data
- All connections are encrypted (HTTPS)

✅ **API keys are safe to expose:**
- The ANON_KEY is meant to be public (it's in your frontend code)
- It can only do what the RLS policies allow
- Sensitive operations require authentication

❌ **Never share:**
- Your database password
- The SERVICE_ROLE_KEY (if you see it, don't use it)
- Your Supabase project password

---

## Need Help?

- **Supabase Documentation**: [https://supabase.com/docs](https://supabase.com/docs)
- **Supabase Support**: Very responsive on their Discord and GitHub
- **Video Tutorials**: Search "Supabase tutorial" on YouTube

---

**Setup should take about 10 minutes. Once done, you'll have a bulletproof system that never loses consultation requests!**
