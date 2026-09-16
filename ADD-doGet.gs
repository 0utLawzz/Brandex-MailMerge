// ═══════════════════════════════════════════════════════════════
// PASTE THIS WHOLE BLOCK into your Apps Script project
// (anywhere after jsonResponse is fine — near doPost)
// Then: Save → Deploy → Manage deployments → Edit → New version → Deploy
// ═══════════════════════════════════════════════════════════════

function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "";

    if (action === "getRecords") {
      var records = getRecordsForView();
      return jsonResponse({
        ok: true,
        count: records.length,
        records: records
      });
    }

    // health check — browser mein URL open karke test
    return jsonResponse({
      ok: true,
      message: "Brandex Web App OK",
      tip: "Use ?action=getRecords"
    });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err.message || err) });
  }
}
