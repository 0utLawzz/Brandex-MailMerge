// ═══════════════════════════════════════════════════════════════
// Brandex-MailMerge-Full.gs — SOURCE OF TRUTH for Apps Script
// ═══════════════════════════════════════════════════════════════
//
// This file was accidentally reduced to a placeholder (SEE_ARTIFACT).
// The last complete version is in git history:
//
//   https://raw.githubusercontent.com/0utLawzz/Brandex-MailMerge/3e5f2c8c9a5f/Brandex-MailMerge-Full.gs
//
// HOW TO RESTORE IN APPS SCRIPT:
// 1. Open that URL → Select All → Copy
// 2. Sheet → Extensions → Apps Script → paste into Code.gs (replace all)
// 3. ADD the doGet function below (if not already present) so Record View works via GET
// 4. Deploy → Manage deployments → Edit (pencil) on EXISTING web app
//    → Version: New version → Deploy
//    ⚠️ Do NOT create a New deployment (new URL breaks the form)
// 5. Who has access = Anyone
//
// After restore, replace this placeholder file in the repo with the full
// Code.gs contents so GitHub stays in sync.
//
// ── Required doGet (Record View uses GET ?action=getRecords) ──
/*
function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "";
    if (action === "getRecords") {
      return jsonResponse({ ok: true, records: getRecordsForView() });
    }
    return jsonResponse({
      ok: true,
      message: "Brandex MailMerge backend is live. Use ?action=getRecords or POST generateFromForm."
    });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err.message || err) });
  }
}
*/
//
// Also improve getRecordsForView to include:
//   img: row[19]
//   date: formatDateForView(row[5])  // DATE L column, not ISSUE-DATE
// See DEPLOY-GUIDE.md for full rules.
// ═══════════════════════════════════════════════════════════════
