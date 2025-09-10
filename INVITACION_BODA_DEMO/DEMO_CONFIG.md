# 🎯 Configuración DEMO - Invitación de Boda

## 📋 Datos de la Demo

### Pareja
- **Novia**: María Elena Rodríguez
- **Novio**: Carlos Antonio López
- **Fecha**: 20 de Agosto, 2025 (Sábado)
- **Hora**: 18:00 hrs

### Ubicaciones
- **Ceremonia**: Catedral de Guadalajara
  - Dirección: Av. Fray Antonio Alcalde #10, Centro Histórico, Guadalajara
  - Google Maps: [Enlace demo]
  - Waze: [Enlace demo]

- **Recepción**: Hotel Hilton Guadalajara
  - Dirección: Av. López Mateos Sur #2077, Col. del Valle, 44500 Guadalajara, Jal
  - Google Maps: [Enlace demo]
  - Waze: [Enlace demo]

### Paleta de Colores
```css
/* Azul Marino */
--navy-900: #102a43
--navy-800: #243b53
--navy-700: #334e68
--navy-600: #486581
--navy-500: #627d98

/* Dorado */
--gold-900: #78350f
--gold-800: #92400e
--gold-700: #b45309
--gold-600: #d97706
--gold-500: #f59e0b

/* Perla */
--pearl-500: #d1dadc
--pearl-400: #f5f5f5
--pearl-300: #f8f8f8
```

## 🔧 Configuración Técnica

### URLs
- **Producción**: https://boda-demo-maria-carlos.vercel.app
- **Desarrollo**: http://localhost:5173

### Meta Tags
- **Título**: 💍 Boda de María Elena & Carlos Antonio - 20 Agosto 2025 - DEMO
- **Descripción**: Invitación digital DEMO para la boda de María Elena Rodríguez y Carlos Antonio López
- **Keywords**: boda, matrimonio, invitación, María Elena, Carlos Antonio, 2025, demo
- **Theme Color**: #627d98

### Package.json
```json
{
  "name": "invitacion-boda-demo",
  "description": "Elegante invitación digital DEMO para la boda de María Elena y Carlos Antonio",
  "author": "María Elena & Carlos Antonio",
  "homepage": "https://boda-demo-maria-carlos.vercel.app"
}
```

## 🎨 Personalizaciones Realizadas

### 1. Nombres
- ✅ Cambiados en Hero.jsx
- ✅ Actualizados en todos los componentes
- ✅ Modificados en meta tags

### 2. Fechas
- ✅ Countdown: 20 de Agosto, 2025
- ✅ CeremonyDetails: 20 de Agosto, 2025
- ✅ Reception: 20 de Agosto, 2025

### 3. Ubicaciones
- ✅ Ceremonia: Catedral de Guadalajara
- ✅ Recepción: Hotel Hilton Guadalajara
- ✅ Enlaces de mapas actualizados

### 4. Colores
- ✅ Paleta azul-dorado implementada
- ✅ Mapeo de colores para compatibilidad
- ✅ Theme color actualizado

### 5. URLs y Meta Tags
- ✅ Todas las URLs actualizadas
- ✅ Meta tags de redes sociales
- ✅ Canonical URL actualizada

## 🚀 Instrucciones de Deployment

### Vercel
1. Sube la carpeta `INVITACION_BODA_DEMO` a un repositorio
2. Conecta el repositorio a Vercel
3. Configura:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy

### Variables de Entorno (Opcional)
```env
VITE_EMAILJS_SERVICE_ID=demo_service
VITE_EMAILJS_TEMPLATE_ID=demo_template
VITE_EMAILJS_PUBLIC_KEY=demo_key
```

## 📱 Testing

### Dispositivos a Probar
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari, Edge)

### Funcionalidades a Verificar
- [ ] Cuenta regresiva funciona correctamente
- [ ] Enlaces de mapas abren correctamente
- [ ] Formulario RSVP (si está configurado)
- [ ] Responsive design en todos los tamaños
- [ ] Animaciones suaves
- [ ] Carga rápida

## ⚠️ Notas Importantes

1. **Esta es una versión DEMO** - No usar para eventos reales
2. **Datos ficticios** - Todos los nombres y ubicaciones son de ejemplo
3. **Colores diferentes** - Paleta azul-dorado vs rosa-borgoña original
4. **URLs demo** - Configuradas para demostración
5. **Sin datos reales** - No hay integración con servicios reales

## 🔄 Para Convertir a Proyecto Real

1. Cambiar nombres en todos los archivos
2. Actualizar fechas y ubicaciones
3. Configurar paleta de colores deseada
4. Actualizar URLs y meta tags
5. Configurar servicios reales (EmailJS, Google Sheets)
6. Actualizar package.json y README

---

**Versión**: 1.0.0 Demo  
**Última actualización**: $(date)  
**Desarrollado para**: Demostración de funcionalidades
