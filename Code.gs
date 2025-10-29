function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form');
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var timestamp = new Date();

  sheet.appendRow([
    timestamp,
    e.parameter.Nombre,
    e.parameter.Correo,
    e.parameter.Telefono,
    e.parameter.Asunto,
    e.parameter.Mensaje,
  ]);

  return ContentService.createTextOutput('Datos guardados exitosamente');
}