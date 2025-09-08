# 🚀 Configuración Rápida - Google Sheets

## Paso 1: Crear Google Apps Script

1. Ve a: https://script.google.com/
2. Clic en "Nuevo proyecto"
3. Copia y pega este código:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById('1nLRzsyi7ZF1vAnRSUsD-ZKmpwhHwjZCOf4tRqDrI3yY');
    const sheet = spreadsheet.getActiveSheet();
    
    const lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([
        ['Nombre', 'Acompañantes', 'Telefono', 'Estado de confirmación de asistencia', 'Restricciones Alimentarias']
      ]);
    }
    
    const rowData = [
      data.nombre || '',
      data.acompanantes || 0,
      data.telefono || '',
      data.asistencia || '',
      data.restricciones || ''
    ];
    
    sheet.getRange(lastRow + 1, 1, 1, 5).setValues([rowData]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Paso 2: Desplegar el Script

1. Clic en "Desplegar" > "Nueva implementación"
2. Tipo: "Aplicación web"
3. Ejecutar como: "Yo"
4. Quién tiene acceso: "Cualquiera"
5. Clic en "Desplegar"
6. **COPIA LA URL** que aparece (algo como: `https://script.google.com/macros/s/AKfycbx...`)

## Paso 3: Actualizar el Código

1. Abre el archivo: `src/config/googleSheets.js`
2. Reemplaza `TU_SCRIPT_ID_AQUI` con la URL que copiaste
3. Guarda el archivo

## Paso 4: Probar

1. Ejecuta: `npm run dev`
2. Llena el formulario
3. Envía los datos
4. Verifica en tu Google Sheet que aparezcan los datos

## ✅ ¡Listo!

Los datos se guardarán automáticamente en tu Google Sheet con las columnas:
- A: Nombre
- B: Acompañantes
- C: Telefono
- D: Estado de confirmación de asistencia
- E: Restricciones Alimentarias
