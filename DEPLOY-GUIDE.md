# Brandex MailMerge — Deploy & Troubleshooting Guide

This project has **two separate systems**. Mixing them up is why one fix often breaks another.

---

## 1. Architecture (remember this)

| What | Where it lives | How it updates |
|------|----------------|----------------|
| Web form, Record View, CMS home | **GitHub Pages** (`*.html` in this repo) | `git push` → Pages auto-redeploys in 1–2 min |
| Document generation, Sheet/Drive logic | **Google Apps Script** (bound to the Sheet) | Paste code → **Deploy → Manage deployments → Edit → New version → Deploy** |
| Client data rows | **Google Sheet** (Sheet1) | Edit cells directly — **no deploy needed** |

```
Browser (GitHub Pages HTML)
        │
        │  fetch(APPS_SCRIPT_URL)
        ▼
Google Apps Script  (doGet / doPost)
        │
        ├── Google Sheet (Sheet1)
        └── Google Drive (client folders + TM-1 / TM-48 docs)
```

---

## 2. When do you need to redeploy Apps Script?

| Change | Redeploy Script? | Push GitHub? |
|--------|------------------|--------------|
| Edit a cell in the Sheet (status, filing, name…) | **NO** | NO |
| Add/delete rows in Sheet | **NO** | NO |
| Change HTML / CSS / JS in this repo | NO | **YES** (`git push`) |
| Change logic inside `Brandex-MailMerge-Full.gs` | **YES** (New version) | YES (keep repo in sync) |
| Change `APPS_SCRIPT_URL` in HTML | NO | **YES** |
| Change template Doc or Drive folder IDs in CONFIG | **YES** | YES |

**Manual Sheet updates never require a script redeploy.**  
The script always reads the live Sheet on every request.

---

## 3. Correct Apps Script deploy steps (critical)

1. Open the **bound** Apps Script project from the Sheet:  
   `Extensions → Apps Script`
2. Paste the full contents of `Brandex-MailMerge-Full.gs` into `Code.gs` (replace all).
3. **Deploy → Manage deployments**
4. Click the **pencil (Edit)** on the **existing** Web App deployment  
   ⚠️ Do **not** click “New deployment” — that creates a **new URL** and breaks the form.
5. Version → **New version** → Deploy
6. Confirm “Who has access” = **Anyone**
7. Copy the Web App URL only if it changed — then update `APPS_SCRIPT_URL` in:
   - `trademark-application.html`
   - `records.html`
   and `git push`

---

## 4. Why “one thing fixes, another breaks”

Common causes in this project’s history:

1. **Partial / placeholder overwrites** — files were replaced with `PLACEHOLDER` / `SEE_ARTIFACT` / truncated HTML (e.g. form reduced to 697 bytes). Always restore from a known-good commit, never overwrite with empty stubs.
2. **Two platforms, two deploys** — changing HTML does nothing to Apps Script, and vice versa.
3. **New deployment instead of New version** — creates a new URL; HTML still points at the old one → form “stops working”.
4. **Duplicated CONFIG** — IDs/URLs must match in HTML + `.gs`. Change in one place only and forget the other → silent failures.
5. **Browser cache** — after Pages deploy, hard-refresh (Ctrl+Shift+R).

---

## 5. Quick health checks

**Form blank / “No content”**  
→ `trademark-application.html` is truncated. Restore full file from a good commit and push.

**Record View: Live fetch failed / not JSON**  
→ `doGet` missing or not deployed. Paste latest `.gs`, Deploy → New version.  
→ Or access = not “Anyone”.

**Form submits but nothing in Drive/Sheet**  
→ Wrong `APPS_SCRIPT_URL` or deployment not “Anyone”.  
→ Check Apps Script Executions log for errors.

**Duplicate client folders**  
→ Old script without `getOrCreateClientFolder`. Use current Full.gs.

**Row stuck on ON IT**  
→ Error path didn’t set ERROR. Current script sets `ERROR ❌` on failure.

---

## 6. File map (clean structure)

```
Brandex-MailMerge/
├── index.html                    # CMS home (GitHub Pages)
├── trademark-application.html    # TM form (GitHub Pages)
├── records.html                  # Record table (GitHub Pages)
├── Brandex-MailMerge-Full.gs     # SOURCE OF TRUTH for Apps Script → paste into Code.gs
├── favicon.svg / favicon.png
├── README.md
├── DEPLOY-GUIDE.md               # this file
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

Empty stub files (`ADD-doGet.gs`, `FIX-*.gs`, `tm-records.json`, placeholder README) should not be used — they caused confusion.

---

## 7. GitHub Pages vs Vercel

| | GitHub Pages | Vercel |
|--|--------------|--------|
| Fit for this project | **Good** — pure static HTML | Optional, same result |
| Backend | Still Google Apps Script either way | Same |
| Cost | Free | Free tier |
| When Vercel helps | Custom domain, previews, serverless later | Only if you outgrow static+GAS |

**Recommendation:** Stay on GitHub Pages for now. Moving to Vercel does **not** fix Sheet/Script issues — those live in Google’s stack. Fix process (this guide) first; migrate only if you need previews or a Node backend later.

---

## 8. Safe update checklist

Before any change:

- [ ] Know which side you’re editing (HTML vs `.gs` vs Sheet)
- [ ] Never replace a full file with a 10-byte placeholder
- [ ] After `.gs` change → **Edit existing deployment → New version**
- [ ] After HTML change → `git push` + hard refresh
- [ ] After manual Sheet edit → do nothing (already live)
