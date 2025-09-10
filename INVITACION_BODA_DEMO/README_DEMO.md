# 💍 Invitación de Boda DEMO - María Elena & Carlos Antonio

## 🎯 Propósito
Esta es una **versión DEMO** de la invitación de boda digital, creada para demostrar las funcionalidades y el diseño sin comprometer los datos reales de los clientes.

## 🎨 Características de la Versión Demo

### Datos de Ejemplo
- **Pareja**: María Elena Rodríguez & Carlos Antonio López
- **Fecha**: 20 de Agosto, 2025
- **Ceremonia**: Catedral de Guadalajara
- **Recepción**: Hotel Hilton Guadalajara

### Paleta de Colores
- **Azul Marino**: `#102a43` (navegación, fondos oscuros)
- **Azul Principal**: `#627d98` (elementos principales)
- **Dorado**: `#f59e0b` (acentos, botones)
- **Perla**: `#d1dadc` (textos, elementos sutiles)

### Diferencias con el Proyecto Original
1. **Nombres**: Cambiados a datos ficticios
2. **Fechas**: Modificadas para la demo
3. **Ubicaciones**: Cambiadas a lugares públicos conocidos
4. **Colores**: Paleta azul-dorado en lugar de rosa-borgoña
5. **URLs**: Configuradas para deployment demo

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura el proyecto con:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy automático en cada push

### URL de Producción
```
https://boda-demo-maria-carlos.vercel.app
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Diseño responsive (mobile-first)
- [x] Animaciones suaves con Framer Motion
- [x] Cuenta regresiva en tiempo real
- [x] Información de ceremonia y recepción
- [x] Código de vestimenta
- [x] Registro de regalos
- [x] Formulario RSVP
- [x] Integración con Google Maps
- [x] Enlaces a calendarios (Google Calendar, iCal)
- [x] Optimización de imágenes
- [x] SEO optimizado

### 🎨 Componentes
- **Hero**: Sección principal con nombres y botones
- **Countdown**: Cuenta regresiva animada
- **CeremonyDetails**: Información de la ceremonia
- **DressCode**: Código de vestimenta
- **Reception**: Detalles de la recepción
- **GiftRegistry**: Registro de regalos
- **RSVP**: Formulario de confirmación
- **Footer**: Información adicional

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` con:
```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Google Sheets
Configura la integración con Google Sheets para el RSVP:
1. Crea una hoja de cálculo
2. Configura el script de Google Apps
3. Actualiza las credenciales en `src/config/googleSheets.js`

## 📊 Performance

### Optimizaciones Implementadas
- Lazy loading de componentes
- Optimización de imágenes
- Compresión de assets
- Caching de recursos estáticos
- Bundle splitting

### Métricas
- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 Uso para Demostración

### Para Clientes
1. Muestra la funcionalidad completa
2. Explica las personalizaciones disponibles
3. Demuestra la responsividad en diferentes dispositivos
4. Enseña el proceso de RSVP

### Para Desarrollo
1. Usa como base para nuevos proyectos
2. Modifica colores y datos según necesidades
3. Añade nuevas funcionalidades
4. Personaliza según preferencias del cliente

## 📝 Notas Importantes

- ⚠️ **Esta es una versión DEMO** - No usar datos reales
- 🔒 Los datos de contacto son ficticios
- 🎨 La paleta de colores es diferente al proyecto original
- 📱 Optimizada para todos los dispositivos
- 🚀 Lista para deployment en Vercel

## 📞 Soporte

Para dudas sobre la implementación o personalización, contacta al desarrollador.

---

**Desarrollado con ❤️ para demostrar el potencial de las invitaciones digitales modernas**
