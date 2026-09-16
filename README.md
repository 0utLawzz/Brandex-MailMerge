# Brandex Mail Merge

![Version](https://img.shields.io/badge/version-1.2.0-0D9970)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-production-C94A00)

Neo-Brutalism CMS for **Brandex Law Associates** — a trademark application generator, plus a links hub to the firm's other internal tools.

## Live Pages

- CMS Home: https://0utlawzz.github.io/Brandex-MailMerge/
- Trademark Application Form: https://0utlawzz.github.io/Brandex-MailMerge/trademark-application.html
- Record View: https://0utlawzz.github.io/Brandex-MailMerge/records.html

## Architecture: Which File Goes Where

This project spans **two separate platforms** — mixing them up is the single most common source of confusion.

| File | Lives in | Purpose |
|------|----------|----------|
| `Brandex-MailMerge-Full.gs` | **Google Apps Script** (paste into `Code.gs`) | Backend: Sheet, Drive, document generation, `doGet`/`doPost` |
| `trademark-application.html` | GitHub Pages | Public web form |
| `records.html` | GitHub Pages | Record view table |
| `index.html` | GitHub Pages | CMS home / links hub |

**Read [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md) before any deploy or code change.**

## Manual Sheet edits

Editing rows in Google Sheet (status, filing process, names, etc.) is **live immediately**. You do **not** need to redeploy Apps Script for data changes.

Redeploy only when you change the **script code** itself.

## Source of truth for Apps Script

Keep `Brandex-MailMerge-Full.gs` in this repo in sync with what is pasted in the Apps Script editor. After editing `.gs`:

1. Paste into `Code.gs`
2. Deploy → Manage deployments → **Edit existing** → New version → Deploy
3. Never create a brand-new deployment (that changes the URL and breaks the form)

## License

MIT — see `LICENSE`.
