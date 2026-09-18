# Record View + Form improvements

## Done on GitHub

- `config.js` — central `APPS_SCRIPT_URL` + `SHEET_URL`
- `tm-records.json` — removed (empty stub)
- Apps Script `doGet` — live (you uncommented / deployed)
- Form generation + DONE status + Drive docs — confirmed working

## Still to commit (prepared in fix session)

### 1. Self-contained `trademark-application.html` (High)

Replace the remote loader with the full ~51KB form that already includes:

- v1.3 defaults (Class 3, Year 2023, BRANDEX, TM optional)
- Brandex header/footer
- **Pre-submit duplicate warning** (same mark + applicant + class → confirm dialog)
- **Success panel**: serial, Drive folder, TM-1, TM-48, link to Record View

### 2. `records.html` upgrades (Medium / Low)

- Fix `esc()` XSS (`&` `<` `>` `"` `&#39;`)
- `SHEET_URL` constant
- **Open Sheet** button in header
- **Edit** column → opens Google Sheet per row

### 3. Wire `config.js` (Low)

Optional: load `config.js` from HTML so URL changes are one-line only.

---

After the large HTML files are on `main`, hard-refresh Pages and re-test one application + Record View.
