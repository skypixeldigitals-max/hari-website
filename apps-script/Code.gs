/**
 * HARI — survey form → Google Sheet
 * ---------------------------------------------------------------------------
 * Receives a submission from survey.html and appends one row.
 *
 * SETUP (about two minutes, once)
 *
 *  1. Go to  https://sheets.new   — this makes a blank Google Sheet.
 *     Name it something like "HARI leads".
 *
 *  2. In that sheet:  Extensions  →  Apps Script
 *
 *  3. Delete whatever code is in the editor, paste this whole file in,
 *     then press the save icon.
 *
 *  4. Press  Deploy  →  New deployment
 *       - click the gear next to "Select type", choose  Web app
 *       - Description:      HARI survey
 *       - Execute as:       Me
 *       - Who has access:   Anyone            <-- important, must be "Anyone"
 *     Press Deploy. Google will ask you to authorise it — approve.
 *     (It will warn that the app "isn't verified" because it is your own
 *      private script. Click Advanced → Go to … → Allow.)
 *
 *  5. Copy the  Web app URL  it gives you. It looks like:
 *       https://script.google.com/macros/s/AKfycb..../exec
 *     Paste that into SCRIPT_URL in survey.html.
 *
 * If you ever change this code you must Deploy → Manage deployments →
 * edit → New version, or the live URL keeps running the old code.
 * ---------------------------------------------------------------------------
 */

/* The row the sheet starts with. Change the order here and the sheet follows —
   the header is written once, on the first submission into an empty sheet. */
var HEADERS = [
  'When',
  'Name',
  'WhatsApp',
  'Area',
  'Needs',
  'What is broken',
  'Status',
  'Notes'
];

/* Widths in pixels, matched to HEADERS above. "What is broken" gets the room
   because it is the only free-text column anyone actually reads. */
var WIDTHS = [150, 150, 130, 170, 200, 320, 120, 260];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      setUpSheet_(sheet);
    }

    sheet.appendRow([
      /* Written server-side on purpose: a timestamp from the visitor's own
         browser is whatever their phone clock says, which is not reliable. */
      new Date(),
      data.name || '',
      /* Leading apostrophe keeps 077... as text. Without it Sheets reads the
         number, drops the leading zero, and you can no longer call anyone. */
      "'" + (data.phone || ''),
      data.area || '',
      data.services || '',
      data.problem || '',
      'New',
      ''
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** Header row, colours and widths. Runs once, on the first submission. */
function setUpSheet_(sheet) {
  sheet.appendRow(HEADERS);

  var header = sheet.getRange(1, 1, 1, HEADERS.length);
  header
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground('#032416')   // HARI dark green
    .setVerticalAlignment('middle');

  sheet.setRowHeight(1, 36);
  sheet.setFrozenRows(1);

  for (var i = 0; i < WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, WIDTHS[i]);
  }

  sheet.getRange('A:A').setNumberFormat('d MMM yyyy, h:mm am/pm');
  sheet.getRange('F:F').setWrap(true);
  sheet.getRange('H:H').setWrap(true);

  /* Status is a dropdown so it stays consistent — free text here turns into
     "done", "Done", "DONE!!" within a week and stops being filterable. */
  var status = SpreadsheetApp.newDataValidation()
    .requireValueInList(['New', 'Messaged', 'Job booked', 'Job done', 'Not now'], true)
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 7, sheet.getMaxRows() - 1, 1).setDataValidation(status);

  /* Colour by status, so the follow-up list reads at a glance. */
  var body = sheet.getRange(2, 1, sheet.getMaxRows() - 1, HEADERS.length);
  sheet.setConditionalFormatRules([
    rule_('$G2="New"',       '#fff4d6', body),  // warm — needs a reply
    rule_('$G2="Messaged"',  '#e4eee8', body),  // sage — waiting on them
    rule_('$G2="Job done"',  '#d6ead9', body),  // green — finished
    rule_('$G2="Not now"',   '#f1f1ee', body)   // grey — parked
  ]);
}

function rule_(formula, colour, range) {
  return SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied('=' + formula)
    .setBackground(colour)
    .setRanges([range])
    .build();
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
