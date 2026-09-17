# Brandex Mail Merge

![Version](https://img.shields.io/badge/version-1.3.0-0D9970)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-production-C94A00)
![Theme](https://img.shields.io/badge/theme-Neo--Brutalism-C94A00)

Neo-Brutalism CMS for **Brandex Law Associates** — trademark application generator (TM-1 / TM-48), live record view with stats, and a links hub to the firm’s other tools.

---

## Live pages

| Page | URL |
|------|-----|
| **CMS Home** | https://0utlawzz.github.io/Brandex-MailMerge/ |
| **Trademark Application** | https://0utlawzz.github.io/Brandex-MailMerge/trademark-application.html |
| **Record View + Stats** | https://0utlawzz.github.io/Brandex-MailMerge/records.html |

---

## What it does

Filing a trademark means retyping the same client details into official forms again and again. This tool:

1. Collects details **once** in a web form  
2. Auto-fills class descriptions and consultant address  
3. Generates **TM-1** and **TM-48** from Google Doc templates into a **client Drive folder**  
4. Logs a row in the shared Sheet (status + filing process)  
5. Lets the office review volume and bottlenecks in **Record View**

---

## Architecture (two platforms)

| Layer | Where | How it updates |
|-------|--------|----------------|
| UI (Home, Form, Records) | **GitHub Pages** (`*.html`) | `git push` → auto deploy |
| Generation + Sheet/Drive | **Google Apps Script** | Paste → Deploy → **Edit existing** → New version |
| Data rows | **Google Sheet** | Edit cells — **no deploy** |

Read **[DEPLOY-GUIDE.md](./DEPLOY-GUIDE.md)** before changing code.

Design tokens: **[THEME.md](./THEME.md)**  
Release notes: **[RELEASE_NOTES.md](./RELEASE_NOTES.md)** · **[CHANGELOG.md](./CHANGELOG.md)**

---

## v1.3.0 at a glance

- Standard **header / logo / footer** on every page  
- Form defaults: Class **3**, Year **2023**, Consultant **BRANDEX**, TM optional  
- Image text: **IMAGE UPLOADED** vs **[Text Here]**  
- Records: KPI boxes + month / consultant / filing charts, filters, 50/page  
- Docs: deploy guide + theme guide  

---

## Local structure

```
Brandex-MailMerge/
├── index.html                    # CMS home
├── trademark-application.html    # TM form (GitHub Pages)
├── records.html                  # Record table + stats
├── Brandex-MailMerge-Full.gs     # Source of truth → paste into Apps Script Code.gs
├── THEME.md                      # Neo-Brutalism design system
├── DEPLOY-GUIDE.md               # Deploy & troubleshooting
├── RELEASE_NOTES.md              # v1.3.0 release write-up
├── CHANGELOG.md
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── favicon.svg / favicon.png
```

---

## Manual Sheet edits

Editing status, filing process, names, or any cell in Sheet1 is **live immediately**.  
You do **not** redeploy Apps Script for data changes.

Redeploy only when **script code** changes — and always **Edit existing deployment → New version**, never a brand-new deployment (that changes the URL and breaks the form).

---

## License

MIT — see [LICENSE](./LICENSE).
