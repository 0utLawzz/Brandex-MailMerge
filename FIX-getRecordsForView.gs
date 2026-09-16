// ═══════════════════════════════════════════════════════════════
// REPLACE your existing getRecordsForView() with THIS version
// Then: Save → Deploy → Manage deployments → New version → Deploy
// ═══════════════════════════════════════════════════════════════

function getRecordsForView() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1");
  if (!sheet) throw new Error("Sheet1 not found");

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  // rows 2 → lastRow inclusive, columns A–V (1–22)
  var data = sheet.getRange(2, 1, lastRow, 22).getValues();
  var records = [];

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    // skip completely empty rows
    if (!row[4] && !row[9] && !row[0]) continue;

    // F = DATE L (index 5)
    var dateVal = row[5];
    if (dateVal instanceof Date) {
      dateVal = Utilities.formatDate(dateVal, "Asia/Karachi", "dd-MMM-yy");
    } else if (dateVal) {
      dateVal = dateVal.toString();
    } else {
      dateVal = "";
    }

    records.push({
      status: row[0] || "",
      folder: row[4] || "",
      tm: row[3] || "",
      classNo: row[6] || "",
      appName: row[9] || "",
      appTrade: row[14] || "",
      year: row[16] || "",
      conName: row[17] || "",
      noImg: row[20] || "",
      filingProcess: row[21] || "",
      date: dateVal
    });
  }

  return records.reverse(); // newest first
}
