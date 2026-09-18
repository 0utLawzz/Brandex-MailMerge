/** @OnlyCurrentDoc */
// ═══════════════════════════════════════════════════════════════
// Brandex-MailMerge-Full.gs — SOURCE OF TRUTH (restore instructions)
// ═══════════════════════════════════════════════════════════════
//
// The COMPLETE script (~47KB) is NOT stored as one blob on main yet.
// Download it from this exact commit, then add doGet (see ADD-doGet.gs).
//
// DOWNLOAD FULL SCRIPT (Select All → Copy):
// https://raw.githubusercontent.com/0utLawzz/Brandex-MailMerge/3e5f2c8c9a5f8e5dbcc4616b15d54bb30986cd30/Brandex-MailMerge-Full.gs
//
// That commit has doPost, processFormSubmission, getRecordsForView,
// getOrCreateClientFolder, CONFIG, CLASS_DATA, CONSULTANT_DATA, etc.
// It does NOT include doGet — Record View needs GET.
//
// AFTER pasting the full script into Apps Script Code.gs:
// 1. Also paste the contents of ADD-doGet.gs into the SAME Code.gs
//    (or copy the doGet function below).
// 2. Deploy → Manage deployments → Edit (pencil) EXISTING web app
// 3. Version = New version → Deploy
// 4. Who has access = Anyone
// 5. NEVER create a New deployment (new URL breaks the form)
//
// Optional: improve getRecordsForView to use DATE L (row[5]) and img (row[19]).
// See DEPLOY-GUIDE.md
// ═══════════════════════════════════════════════════════════════

// If you only need the doGet block, use ADD-doGet.gs or paste this:
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
