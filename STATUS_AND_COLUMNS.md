# Status values & column labels (sync Sheet + Apps Script + UI)

## Column A — STATUS (simple values)

Use **only** these in the Sheet and Apps Script:

| Value | When |
|-------|------|
| `START` | New row / waiting to process |
| `PROCESSING` | Documents being generated |
| `DONE` | Finished successfully |
| `ERROR` | Failed (optional) |

### Apps Script replacements (in Code.gs)

```js
// Old → New
"START 💫"     → "START"
"ON IT 👉"     → "PROCESSING"
"DONE ✅"      → "DONE"
"ERROR ❌"     → "ERROR"
```

Update:
- `processFormSubmission` / row writes
- `processOneApplication` / bulk process
- `setupDropdowns` validation list: `["START", "PROCESSING", "DONE", "ERROR"]`
- Conditional formatting formulas if any

Record View already maps old emoji statuses to START / PROCESSING / DONE tags.

## Column header renames (UI)

| Old UI label | New UI label |
|--------------|--------------|
| Mark Text | Name |
| Date | Filing Date |
| TM No | Trademark Number |
| Img | Logo |

Sheet header row can stay technical; UI uses the new names.

## Filing date display

Format: `DD-MMM-YY hh:mm AM/PM` (e.g. `19-SEP-26 02:45 PM`)

## Class dropdown (Application form)

Show plain numbers only: `1`, `2`, `3`, … `45` (description still auto-fills in the description field).
