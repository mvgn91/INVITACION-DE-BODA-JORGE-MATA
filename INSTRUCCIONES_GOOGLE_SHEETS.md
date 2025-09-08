# Instrucciones para Configurar Google Sheets con Google Apps Script

## Paso 1: Crear el Google Apps Script

1. Ve a [Google Apps Script](https://script.google.com/)
2. Haz clic en "Nuevo proyecto"
3. Reemplaza el código predeterminado con el contenido del archivo `google-apps-script.js`
4. Guarda el proyecto con un nombre como "RSVP Wedding Form"

## Paso 2: Configurar el Script

1. En el editor de Apps Script, ve a "Configuración del proyecto" (ícono de engranaje)
2. Asegúrate de que "Mostrar archivos de manifiesto del editor" esté habilitado
3. En el archivo `appsscript.json`, agrega la siguiente configuración:

```json
{
  "timeZone": "America/Mexico_City",
  "dependencies": {
    "enabledAdvancedServices": []
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "ANYONE"
  }
}
```

## Paso 3: Desplegar el Script

1. Haz clic en "Desplegar" > "Nueva implementación"
2. Selecciona "Tipo: Aplicación web"
3. Configura:
   - Descripción: "RSVP Wedding Form Handler"
   - Ejecutar como: "Yo"
   - Quién tiene acceso: "Cualquiera"
4. Haz clic en "Desplegar"
5. **IMPORTANTE**: Copia la URL de la aplicación web que se genera

## Paso 4: Actualizar el Código del Formulario

1. Abre el archivo `src/components/RSVPForm.jsx`
2. Busca la línea que dice:
   ```javascript
   const response = await fetch('https://script.google.com/macros/s/AKfycbxYOUR_SCRIPT_ID/exec', {
   ```
3. Reemplaza `AKfycbxYOUR_SCRIPT_ID` con la URL real de tu Google Apps Script

## Paso 5: Configurar la Hoja de Cálculo

1. Ve a tu Google Sheet: https://docs.google.com/spreadsheets/d/1nLRzsyi7ZF1vAnRSUsD-ZKmpwhHwjZCOf4tRqDrI3yY/edit?usp=sharing
2. Asegúrate de que tienes permisos de edición
3. El script creará automáticamente los encabezados en la primera fila:
   - A: Nombre
   - B: Acompañantes
   - C: Telefono
   - D: Estado de confirmación de asistencia
   - E: Restricciones Alimentarias

## Paso 6: Probar la Integración

1. Ejecuta tu aplicación localmente: `npm run dev`
2. Llena el formulario RSVP con datos de prueba
3. Envía el formulario
4. Verifica que los datos aparezcan en tu Google Sheet

## Solución de Problemas

### Error de CORS
- Google Apps Script maneja CORS automáticamente, pero asegúrate de que el script esté desplegado correctamente

### Error 403 (Forbidden)
- Verifica que el script esté desplegado como "Cualquiera" puede acceder
- Asegúrate de que la URL del script sea correcta

### Los datos no aparecen en la hoja
- Verifica que el ID de la hoja de cálculo sea correcto en el script
- Asegúrate de que tienes permisos de edición en la hoja
- Revisa los logs de ejecución en Google Apps Script

## Estructura de Datos

El formulario enviará los siguientes datos:
- `nombre`: Nombre completo del invitado
- `acompanantes`: Número de acompañantes (entero)
- `telefono`: Número de teléfono
- `asistencia`: "Sí asistiré" o "No podré asistir"
- `restricciones`: Restricciones alimentarias (opcional)

## Notas Importantes

- El script creará automáticamente los encabezados si la hoja está vacía
- Cada envío del formulario agregará una nueva fila
- Los datos se validan en el frontend antes de enviarse
- El formulario muestra un mensaje de éxito independientemente del resultado del servidor (para mejor UX)
