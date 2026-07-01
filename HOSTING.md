# 🚀 VE Solar Solutions — Hosting Guide
## How to get your website live on Google

---

## Step 1: Push Code to GitHub

1. Go to [github.com](https://github.com) → Sign up / Log in (free)
2. Click **New Repository** → Name it `ve-solar-website` → Click **Create**
3. On your computer, open PowerShell inside the `solar-vn` folder and run:

```bash
git init
git add .
git commit -m "Initial VE Solar website"
git remote add origin https://github.com/YOUR_USERNAME/ve-solar-website.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel (Free Hosting)

Vercel is the best free host for Next.js websites. Your site will be live in **under 2 minutes**.

1. Go to [vercel.com](https://vercel.com) → Sign up with your GitHub account
2. Click **"Add New Project"** → Select your `ve-solar-website` repository
3. Keep all settings as default → Click **"Deploy"**
4. ✅ Your site is now live at `https://ve-solar-website.vercel.app`

> **Tip:** Every time you update your code and push to GitHub, Vercel automatically re-deploys. No manual work needed!

---

## Step 3: Add a Custom Domain (Optional but Recommended)

A custom domain like `vesolar.in` looks more professional and helps with Google ranking.

### Buy a domain:
- [GoDaddy India](https://in.godaddy.com) — search for `vesolar.in` (~₹500–800/year)
- [Namecheap](https://namecheap.com) — often cheaper

### Connect domain to Vercel:
1. In Vercel dashboard → Your project → **Settings → Domains**
2. Click **Add Domain** → Type `vesolar.in`
3. Vercel shows you DNS records → Go to your domain registrar (GoDaddy etc.)
4. Add the DNS records shown by Vercel
5. Wait 10–30 minutes → ✅ Done!

---

## Step 4: Update the Domain in Your Code

Once you have a real domain, update 2 files:

**`app/layout.tsx`** — change line 7:
```js
const SITE_URL = "https://vesolar.in";  // ← change to your real domain
```

**`public/sitemap.xml`** — change line 4:
```xml
<loc>https://vesolar.in/</loc>  <!-- ← change to your real domain -->
```

**`public/robots.txt`** — change line 4:
```
Sitemap: https://vesolar.in/sitemap.xml  # ← change to your real domain
```

Then push to GitHub → Vercel auto-deploys.

---

## Step 5: Submit to Google Search Console

This tells Google your site exists and gets you indexed faster.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"** → Enter your URL (e.g. `https://vesolar.in`)
4. Verify ownership: Choose **"HTML tag"** method → Copy the meta tag → Vercel lets you add it in Settings
5. Once verified, click **"Sitemaps"** in the left menu
6. Enter: `sitemap.xml` → Click **Submit**
7. ✅ Google will now crawl and index your website!

> **Timeline:** Google typically indexes new sites within 1–7 days. For local keywords like "solar Lucknow", you may start appearing within 2–4 weeks.

---

## Step 6: Google My Business (Critical for Local Search!)

This is the **most important step** for appearing in local Google searches like "solar Lucknow".

1. Go to [business.google.com](https://business.google.com)
2. Click **"Manage now"** → Search for your business
3. Fill in: Business name, category (Solar Energy Company), address (Aliganj, Lucknow), phone
4. Verify by postcard or phone call
5. Add your website URL, photos, working hours
6. ✅ You'll now appear in **Google Maps** and the local pack!

> **Pro tip:** Ask satisfied customers to leave Google reviews. More reviews = higher ranking = more leads!

---

## SEO Keywords Your Site is Optimized For

Your website is already optimized for these searches:

| Keyword | Search Intent |
|---|---|
| solar panel Lucknow | Buying intent |
| solar installation Lucknow | Buying intent |
| best solar company Lucknow | Comparison intent |
| solar subsidy Lucknow | Information intent |
| UPNEDA solar installer | Trust signal |
| solar panel price Lucknow | Buying intent |
| rooftop solar Aliganj | Local intent |
| solar panel installer near me | High-conversion |

---

## Monthly SEO Maintenance (Optional but Helpful)

- **Add new project photos** to the gallery every month (fresh content helps)
- **Ask customers for Google reviews** after every installation
- **Update your Google My Business** with new photos and posts
- Consider adding a **WhatsApp link** to your Google My Business profile

---

## Summary

| Step | Time | Cost |
|---|---|---|
| GitHub + Vercel deploy | 15 minutes | Free |
| Custom domain | 30 minutes | ~₹500–800/year |
| Google Search Console | 30 minutes | Free |
| Google My Business | 1 hour | Free |

**Total cost to be on Google: ₹500–800/year (just the domain)**
