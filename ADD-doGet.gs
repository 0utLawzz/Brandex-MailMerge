// ═══════════════════════════════════════════════════════════════
// ADD-doGet.gs — PASTE INTO THE SAME Code.gs AS THE FULL SCRIPT
// ═══════════════════════════════════════════════════════════════
// After you paste Brandex-MailMerge-Full.gs from commit 3e5f2c8 into
// Apps Script, paste THIS function as well (anywhere in Code.gs).
// Then: Deploy → Manage deployments → Edit existing → New version.
// ═══════════════════════════════════════════════════════════════

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

// jsonResponse already exists in the full Full.gs — do not duplicate it.
// getRecordsForView already exists in the full Full.gs.
