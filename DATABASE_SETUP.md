# Database Setup Guide - Vercel Postgres

## Why Database?

**Critical for your business:** The database ensures you **never lose a consultation request**, even if email fails.

- ✅ **All consultations saved forever** - Safe storage in database
- ✅ **No external dependencies** - Everything stays in Vercel
- ✅ **Easy to view** - Vercel has built-in data browser
- ✅ **100% Free** - Free tier (256 MB storage)
- ✅ **No DNS setup** - Zero configuration needed
- ✅ **One-click setup** - Add from Vercel dashboard

---

## Setup Steps (5 minutes)

### Step 1: Create Vercel Postgres Database

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project ("brassociates")
3. Go to the **Storage** tab
4. Click **"Create Database"**
5. Select **"Postgres"**
6. Choose:
   - **Region**: Same as your project (for best performance)
   - Leave other settings as default
7. Click **"Create"**
8. Wait 1-2 minutes for setup

**That's it!** Vercel automatically adds all database environment variables to your project.

---

### Step 2: Run Database Migration

This creates the `consultations` table in your database.

1. Go back to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Storage** tab
4. Click on your Postgres database
5. Click **"Query"** tab
6. Copy and paste this SQL:

```sql
-- Run this in Vercel Postgres Query tab

-- Create consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  legal_matter TEXT NOT NULL,
  consultation_mode TEXT NOT NULL,
  preferred_date_time TEXT,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster searching
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultations_status ON consultations(status);

-- Done! Your database is ready.
```

7. Click **"Run Query"**
8. You should see "Query executed successfully"

---

### Step 3: Pull Environment Variables Locally

For local development:

1. Open your terminal
2. Navigate to your project folder
3. Run:
   ```bash
   vercel env pull .env.local
   ```
4. This downloads all database credentials to your `.env.local` file

---

### Step 4: Generate Prisma Client

1. In your terminal, run:
   ```bash
   npx prisma generate
   ```
2. This creates the type-safe database client

---

### Step 5: Test the Form

1. Make sure your dev server is running:
   ```bash
   npm run dev
   ```
2. Go to http://localhost:3000
3. Fill out the consultation form
4. Submit it
5. Check your database:
   - Go to Vercel Dashboard → Storage → Your Postgres DB → **Data** tab
   - You should see your test submission!

---

## How to View Consultations

### Option 1: Vercel Data Browser (Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Storage** → Your Postgres database
4. Click **"Data"** tab
5. Click on **"consultations"** table

**You'll see:**
- Full Name
- Mobile
- Email
- Legal Matter
- Consultation Mode
- Preferred Date/Time
- Description
- Status
- Created At
- Updated At

**Features:**
- View all consultations in a table
- Click on any row to see details
- Manually edit status (pending → contacted → completed)
- Search and filter (coming soon in Vercel)

### Option 2: Run SQL Queries

In the **Query** tab, you can run SQL to find specific data:

**See all consultations (newest first):**
```sql
SELECT * FROM consultations ORDER BY created_at DESC;
```

**See only pending consultations:**
```sql
SELECT * FROM consultations WHERE status = 'pending';
```

**Search by name:**
```sql
SELECT * FROM consultations WHERE full_name LIKE '%Sharma%';
```

**Count total consultations:**
```sql
SELECT COUNT(*) FROM consultations;
```

---

## Managing Consultation Status

You can track the progress of each consultation:

1. Go to **Data** tab
2. Click on a consultation row
3. Edit the **status** field:
   - `pending` - New, not yet contacted
   - `contacted` - You've called/emailed them
   - `scheduled` - Meeting is scheduled
   - `completed` - Consultation finished
   - `cancelled` - Cancelled or no-show

---

## How It Works

When someone submits the consultation form:

1. ✅ **Form data saved to database FIRST** (most critical!)
2. 📧 Then email is sent to adv.bhaktirajput@gmail.com
3. ✅ Success message shown to user

**If email fails:**
- ✅ Data is still safe in database
- ⚠️ Warning logged in console
- ✅ User sees success message
- ✅ You can check database directly

**You'll never lose a consultation!**

---

## Giving Access to Staff

Unfortunately, Vercel Postgres Data browser access is tied to Vercel project access. To give staff view-only access:

### Option A: Share Vercel Project (Read-Only)
1. Go to your project **Settings** → **Members**
2. Invite team member
3. Select **"Viewer"** role
4. They can view data but cannot change settings

### Option B: Build Simple Admin Page (Future)
I can help you build a simple admin page in your website where:
- Password-protected page
- View all consultations in a nice table
- Search and filter
- Mark status
- Only accessible by you/staff

Let me know if you want this!

---

## Free Tier Limits

Vercel Postgres free tier includes:
- ✅ 256 MB storage (thousands of consultations)
- ✅ 60 compute hours per month
- ✅ Unlimited queries

**More than enough for a law firm!**

If you exceed (very unlikely), you'll get notified and can upgrade for ~$20/month.

---

## Troubleshooting

### "Failed to save consultation request. Database may not be set up yet."
- Make sure you created the Postgres database in Vercel
- Make sure you ran the SQL migration (Step 2)
- Make sure you pulled environment variables (`vercel env pull`)
- Restart your dev server

### "Prisma Client not generated"
- Run: `npx prisma generate`
- Restart your dev server

### Cannot see data in Vercel Data browser
- Make sure you ran the SQL migration
- Refresh the page
- Check you're looking at the right database

### Email not received but data saved
- This is OK! Data is safe
- Check Resend configuration (RESEND_SETUP.md)
- Check spam folder
- The important thing is data is in database

---

## Local Development vs Production

**Local Development:**
- Pull env variables: `vercel env pull .env.local`
- Uses same Vercel Postgres database as production
- Data is shared between local and deployed site

**Production (Deployed):**
- Environment variables automatically available
- No setup needed - just works!

---

## Common Tasks

### View all consultations
```sql
SELECT * FROM consultations ORDER BY created_at DESC;
```

### Export to CSV
1. Run query to get data
2. Click "Export" button (if available)
3. Or copy/paste results into Excel

### Delete test data
```sql
DELETE FROM consultations WHERE full_name = 'Test User';
```

### See consultations from today
```sql
SELECT * FROM consultations
WHERE created_at > CURRENT_DATE;
```

---

## Security

✅ **Your data is secure:**
- Database requires authentication
- Only your Vercel project can access it
- All connections encrypted (TLS)
- Automatic backups

❌ **Never share:**
- Your POSTGRES_URL or database credentials
- Your Vercel account password
- The .env.local file

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs/storage/vercel-postgres
- **Prisma Docs**: https://www.prisma.io/docs
- **Support**: Contact me or Vercel support

---

**Setup takes 5 minutes. Once done, you have a bulletproof system that never loses consultations!**
