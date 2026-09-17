# Changelog

All notable changes to **Brandex MailMerge** are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.3.0] — 2026-09-17

### Summary

Production UI lock for the Brandex Trademark Application CMS: unified Neo-Brutalism chrome, form defaults tuned for daily filing work, Record View analytics, and deploy/troubleshooting documentation so HTML vs Apps Script changes no longer get mixed up.

**Live pages**

- CMS Home: https://0utlawzz.github.io/Brandex-MailMerge/
- Application form: https://0utlawzz.github.io/Brandex-MailMerge/trademark-application.html
- Record View: https://0utlawzz.github.io/Brandex-MailMerge/records.html

### Added

#### Standard Brandex chrome (all pages)
- Shared **header** (`.bx-nav`): dark `#0C0C0C` sticky bar, maroon/gold **R** logo mark, wordmark **BRANDEX LAW ASSOCIATES** + subtitle *Trademark & IP Registry*
- Shared **nav**: Home · Application · Records (active state = burnt orange fill)
- Shared **footer** (`.bx-footer`): cream band, 3px black top border, teal CMS link
- `THEME.md` — full Neo-Brutalism design reference (colors, type, borders, shadows, golden rules)

#### Record View analytics
- Large KPI boxes: **Total · Pending Filing · Dispatched · Done**
- Bar charts: **by month** (application date), **by consultant**, **filing & status**
- Filters: search, filing status, year
- Pagination: **50 records / page**, Back / Next
- Default sort: **most recent date first**
- Table fits viewport width (no horizontal scrollbar)
- **+ New Application** CTA in page header

#### Form defaults (v1.3)
- **Class** defaults to **3** (Nice class description auto-fills)
- **USING Year / Since** defaults to **2023**
- **Consultant** defaults to **BRANDEX LAW ASSOCIATES**
- **Trademark Number** is **optional** (required asterisk removed)
- Fallback text: image upload → **IMAGE UPLOADED**; otherwise **[Text Here]**

#### CMS Home
- Top quick actions: **＋ Trademark Application** + **Record View**
- Menu labels aligned with new flows
- Version stamp **CMS v1.3**

#### Documentation
- `DEPLOY-GUIDE.md` — two-platform architecture (GitHub Pages vs Apps Script), when to redeploy, why “one fix breaks another”, health checks
- `THEME.md` — locked design tokens for future pages
- `RELEASE_NOTES.md` — full v1.3.0 release write-up
- README restored and aligned with v1.3 live links

### Fixed

- Blank / truncated `trademark-application.html` on GitHub Pages (recovery loader + patches from last known-good form)
- Placeholder / empty stub files removed or replaced with clear restore instructions
- Confusing dual-platform deploy process documented so Sheet edits are never confused with script deploys

### Changed

- Neo-Brutalism tokens applied consistently across Home, Form, and Records
- Record View UX focused on office tracking (filing status + consultants + volume)

### Ops notes

| Change type | Action required |
|-------------|-----------------|
| Sheet cell / row edit | **None** — live immediately |
| HTML / CSS / JS in this repo | `git push` → Pages auto-deploy (~1–2 min) + hard refresh |
| Apps Script logic (`.gs`) | Paste into `Code.gs` → **Manage deployments → Edit existing → New version → Deploy** (never “New deployment”) |

Record View live data needs Apps Script `doGet(?action=getRecords)`. See `Brandex-MailMerge-Full.gs` and `DEPLOY-GUIDE.md`.

---

## [1.2.0] — 2026-09-14

### New Features

- Record View web interface (`records.html`)
- Required field validation on form submit
- `getRecordsForView()` / `getRecords` action for live Sheet data

### Enhancements

- Extended required fields (TM, e-stamp, trading as, year, fallback, consultant)
- Color-coded status rows in Record View

---

## [1.1.0] — 2026-09-14

### Fixed

- Duplicate Issue Date display
- Markdown linting in CHANGELOG / CONTRIBUTING

---

## [1.0.0] — 2026-09-14

### First stable release

- Critical fixes: duplicate Drive folders, hardcoded template IDs, image confidentiality
- FILING PROCESS column + 4-state STATUS system
- Single CONFIG block, community docs (LICENSE, SECURITY, CONTRIBUTING)

---

[1.3.0]: https://github.com/0utLawzz/Brandex-MailMerge/releases/tag/v1.3.0
[1.2.0]: https://github.com/0utLawzz/Brandex-MailMerge/releases/tag/v1.2.0
[1.1.0]: https://github.com/0utLawzz/Brandex-MailMerge/releases/tag/v1.1.0
[1.0.0]: https://github.com/0utLawzz/Brandex-MailMerge/releases/tag/v1.0.0
