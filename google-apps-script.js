// Google Apps Script para recibir datos del formulario RSVP y guardarlos en Google Sheets
// ID de la hoja de cálculo: 1nLRzsyi7ZF1vAnRSUsD-ZKmpwhHwjZCOf4tRqDrI3yY

function doPost(e) {
  try {
    // Obtener los datos del formulario
    const data = JSON.parse(e.postData.contents);
    
    // Abrir la hoja de cálculo
    const spreadsheet = SpreadsheetApp.openById('1nLRzsyi7ZF1vAnRSUsD-ZKmpwhHwjZCOf4tRqDrI3yY');
    const sheet = spreadsheet.getActiveSheet();
    
    // Verificar si los encabezados ya existen
    const lastRow = sheet.getLastRow();
    const firstRow = sheet.getRange(1, 1, 1, 5).getValues()[0];
    const hasHeaders = firstRow.some(cell => cell && cell.toString().trim() !== '');
    
    // Solo crear encabezados si la hoja está completamente vacía
    if (lastRow === 0 || !hasHeaders) {
      // Crear encabezados en la primera fila
      sheet.getRange(1, 1, 1, 5).setValues([
        ['Nombre', 'Acompañantes', 'Telefono', 'Estado de confirmación de asistencia', 'Restricciones Alimentarias']
      ]);
      
      // Formatear encabezados
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }
    
    // Preparar los datos para insertar
    const rowData = [
      data.nombre || '',
      data.acompanantes || 0,
      data.telefono || '',
      data.asistencia || '',
      data.restricciones || ''
    ];
    
    // Insertar los datos en la siguiente fila disponible
    const newRow = lastRow + 1;
    sheet.getRange(newRow, 1, 1, 5).setValues([rowData]);
    
    // Devolver respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Datos guardados exitosamente'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    
    // Devolver respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error al guardar los datos: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Manejar solicitudes GET (opcional)
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'API de RSVP funcionando correctamente'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
