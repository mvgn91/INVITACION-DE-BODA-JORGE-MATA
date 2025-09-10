// Configuración para Google Sheets
// Reemplaza 'TU_SCRIPT_ID_AQUI' con el ID real de tu Google Apps Script

export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbypnEUpipDWSnHtUvj3dRtQ1U-i54uhAuSx8NTJv72Dm2vtp3mvdFRfbhTa4FcbQZtimA/exec';

// Función para enviar datos a Google Sheets
export const sendToGoogleSheets = async (formData) => {
  try {
    const dataToSend = {
      nombre: formData.nombre.trim(),
      acompanantes: parseInt(formData.acompanantes) || 0,
      telefono: formData.telefono.trim(),
      asistencia: formData.asistencia,
      restricciones: formData.restricciones.trim()
    };

    console.log('🚀 Enviando datos a Google Sheets:', dataToSend);
    console.log('📡 URL del script:', GOOGLE_SCRIPT_URL);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necesario para Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    });

    console.log('✅ Petición enviada exitosamente');
    console.log('📊 Response status:', response.status);
    
    return { success: true, data: dataToSend };
  } catch (error) {
    console.error('❌ Error enviando a Google Sheets:', error);
    return { success: false, error: error.message };
  }
};
