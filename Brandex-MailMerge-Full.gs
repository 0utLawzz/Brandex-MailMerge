/** @OnlyCurrentDoc */
// ═══════════════════════════════════════════════════════════════
// Brandex-MailMerge-Full.gs — SOURCE OF TRUTH
// ═══════════════════════════════════════════════════════════════
//
// STATUS (2026-09-18): Full working script lives at commit:
//   3e5f2c8c9a5f8e5dbcc4616b15d54bb30986cd30
//
// DOWNLOAD FULL SCRIPT:
//   https://raw.githubusercontent.com/0utLawzz/Brandex-MailMerge/3e5f2c8c9a5f8e5dbcc4616b15d54bb30986cd30/Brandex-MailMerge-Full.gs
//
// REQUIRED PATCHES before deploy (if not already in that commit):
//
// --- 1. Add doGet (Record View uses GET) ---
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
// --- 2. In getRecordsForView() set ---
//   date: format from row[5] (DATE L column), not ISSUE-DATE
//   img:  row[19]
//
// DEPLOY STEPS (critical):
// 1. Open the DOWNLOAD URL above → Select All → Copy
// 2. Google Sheet → Extensions → Apps Script → replace Code.gs entirely
// 3. Add doGet if missing
// 4. Deploy → Manage deployments → Edit (pencil) on EXISTING web app
// 5. Version = New version → Deploy
// 6. Who has access = Anyone
// 7. NEVER click "New deployment" (that changes the URL and breaks the form)
//
// After deploy succeeds, replace THIS file with the full Code.gs contents
// so the repo stays the source of truth.
//
// See DEPLOY-GUIDE.md
// ═══════════════════════════════════════════════════════════════
