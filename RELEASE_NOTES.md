# Brandex MailMerge v1.3.0

**Neo-Brutalism chrome · Form defaults · Records dashboard · Deploy docs**

Release date: **17 September 2026**

---

## What this release is

v1.3.0 locks the **day-to-day CMS UI** for Brandex Law Associates:

1. One shared **header / logo / footer** on every page  
2. Form opens ready to file (Class 3, Year 2023, BRANDEX, optional TM)  
3. Record View shows **KPIs + charts** so the office can see volume and bottlenecks  
4. Written rules so GitHub Pages and Google Apps Script stop stepping on each other  

This is a **frontend + documentation** release. Backend document generation still runs on the bound Google Apps Script + Sheet + Drive.

---

## Live URLs

| Page | URL |
|------|-----|
| CMS Home | https://0utlawzz.github.io/Brandex-MailMerge/ |
| Trademark Application | https://0utlawzz.github.io/Brandex-MailMerge/trademark-application.html |
| Record View + Stats | https://0utlawzz.github.io/Brandex-MailMerge/records.html |

After deploy: **hard refresh** (Ctrl+Shift+R / Cmd+Shift+R).

---

## Highlights

### 1. Unified Brandex chrome
- Dark sticky navbar (`#0C0C0C`)
- Logo mark: maroon square + gold **R**
- Wordmark: BRANDEX LAW ASSOCIATES · Trademark & IP Registry
- Nav: **Home · Application · Records**
- Matching footer on all pages  
- Spec: [`THEME.md`](./THEME.md)

### 2. Form defaults (faster filing)
| Field | Default / rule |
|-------|----------------|
| Class | **3** (description auto-fill) |
| Year | **2023** |
| Consultant | **BRANDEX LAW ASSOCIATES** |
| TM Number | **Optional** (no required *) |
| Fallback text | Image → `IMAGE UPLOADED` · else `[Text Here]` |

### 3. Record View dashboard
- KPI boxes: Total / Pending / Dispatched / Done  
- Charts: month · consultant · filing & status  
- Search + filing + year filters  
- 50 rows/page, Back/Next  
- Newest applications first  
- No horizontal table scroll  

### 4. Deploy clarity
See [`DEPLOY-GUIDE.md`](./DEPLOY-GUIDE.md):

- **Sheet edit** → no deploy  
- **HTML push** → GitHub Pages only  
- **Script change** → Edit **existing** Web App → **New version** (never New deployment)

---

## Upgrade / ops checklist

- [ ] Hard-refresh all three live pages  
- [ ] Confirm form defaults (Class 3, 2023, BRANDEX)  
- [ ] Confirm Records header shows logo + nav  
- [ ] If Record View fetch fails: restore full Apps Script from history + add `doGet` + **New version** deploy (`DEPLOY-GUIDE.md`)  
- [ ] Keep `Brandex-MailMerge-Full.gs` in repo in sync with live `Code.gs`  

---

## Breaking changes

- **None** for end users of the form/Sheet workflow.  
- TM Number is no longer required on the form (was required in 1.2.x).  
- Visual chrome is intentionally different (standard header replaces sparse old navbars).

---

## Credits

Brandex Law Associates · Trademark & IP Registry  
Theme: Neo-Brutalism BrandEx v1.0  
