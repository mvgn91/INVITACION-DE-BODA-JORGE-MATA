// Configuración de EmailJS
// Copia este archivo como emailjs.js y configura tus credenciales

export const EMAILJS_CONFIG = {
  // Reemplaza con tu Service ID de EmailJS
  SERVICE_ID: 'YOUR_SERVICE_ID',
  
  // Reemplaza con tu Template ID de EmailJS
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  
  // Reemplaza con tu Public Key de EmailJS
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY'
}

// Ejemplo de plantilla de email para EmailJS:
/*
Asunto: Nueva confirmación de boda - {{from_name}}

Hola Noemí y Jorge,

Han recibido una nueva confirmación de boda:

Nombre: {{from_name}}
Número de acompañantes: {{guests}}
Confirmación: {{confirmation}}
Mensaje: {{message}}

¡Que tengan un hermoso día de boda!

---
Invitación Digital de Boda
*/
