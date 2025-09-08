# 🎉 Guidelines de Desarrollo - Invitación de Boda

## 📋 Índice
- [Visión General](#visión-general)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Patrones de Diseño](#patrones-de-diseño)
- [Sistema de Colores](#sistema-de-colores)
- [Componentes](#componentes)
- [Problemas Conocidos y Soluciones](#problemas-conocidos-y-soluciones)
- [Mejores Prácticas](#mejores-prácticas)
- [Estructura de Archivos](#estructura-de-archivos)

## 🎯 Visión General

Este es un proyecto de invitación de boda moderna construido con React + Vite, utilizando Tailwind CSS para el diseño y Framer Motion para las animaciones. El diseño sigue un tema elegante con colores burgundy/rose y se enfoca en una experiencia de usuario fluida y responsiva.

### Tecnologías Principales
- **React 18** + **Vite** - Framework y bundler
- **Tailwind CSS** - Sistema de diseño y estilos
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconografía
- **EmailJS** - Envío de formularios

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes
```
src/
├── components/           # Componentes reutilizables
│   ├── Header.jsx       # Navegación principal
│   ├── Hero.jsx         # Sección principal con nombres
│   ├── Countdown.jsx    # Contador regresivo
│   ├── CeremonyDetails.jsx # Detalles de la ceremonia
│   ├── Reception.jsx    # Información de la recepción
│   ├── GiftRegistry.jsx # Mesa de regalos
│   ├── RSVP.jsx         # Formulario de confirmación
│   ├── Footer.jsx       # Pie de página
│   └── ScrollToTop.jsx  # Botón de scroll
├── config/              # Configuraciones
│   └── emailjs.example.js
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── index.css            # Estilos globales
```

## 🎨 Patrones de Diseño

### 1. Secciones Claras vs Oscuras

#### Secciones Claras (Hero, Reception, GiftRegistry, RSVP)
```jsx
// Fondo
className="bg-gradient-to-br from-slate-50 via-white to-rose-50"

// Elementos decorativos
<div className="absolute inset-0">
  <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-100/40 to-burgundy-100/40 rounded-full blur-3xl"></div>
  // ... más elementos
</div>

// Tarjetas
className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 border border-rose/30"
```

#### Secciones Oscuras (CeremonyDetails)
```jsx
// Fondo
className="bg-gradient-to-br from-burgundy-900 via-wine-800 to-burgundy-800"

// Elementos decorativos
<div className="absolute inset-0">
  <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-500/20 to-burgundy-500/20 rounded-full blur-3xl"></div>
  // ... más elementos
</div>

// Tarjetas
className="bg-burgundy-800/95 backdrop-blur-lg rounded-3xl p-8 border border-rose/30"
```

### 2. Patrón de Animaciones

```jsx
// Estructura estándar de animaciones
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
  viewport={{ once: true }}
>
  {/* Contenido */}
</motion.div>

// Animaciones de hover
whileHover={{ scale: 1.05, y: -8 }}
whileTap={{ scale: 0.95 }}
```

### 3. Patrón de Títulos

```jsx
// Títulos principales
<h2 className="text-4xl sm:text-5xl md:text-6xl font-fraunces font-bold text-burgundy-800 mb-6">
  <span className="bg-gradient-to-r from-burgundy-800 via-rose-600 to-burgundy-800 bg-clip-text text-transparent">
    Título
  </span>
</h2>

// Títulos de sección
<h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-burgundy-800 mb-4">
  Subtítulo
</h3>
```

## 🎨 Sistema de Colores

### Paleta Principal
```css
/* Colores principales */
--burgundy-800: #8B4513  /* Títulos principales */
--burgundy-600: #A0522D  /* Texto secundario */
--rose-600: #E91E63      /* Acentos */
--rose-500: #F06292      /* Botones y elementos interactivos */
--pearl-100: #F5F5F5     /* Texto en secciones oscuras */
--sage-400: #9CAF88      /* Acentos verdes */
```

### Uso por Contexto
- **Títulos**: `text-burgundy-800`
- **Subtítulos**: `text-burgundy-600` o `text-burgundy-700`
- **Texto en secciones oscuras**: `text-pearl-100`
- **Botones principales**: `bg-rose-500` (colores planos, sin gradientes)
- **Botones secundarios**: `bg-burgundy-600` (colores planos, sin gradientes)
- **Botones hover**: `hover:bg-rose-600` o `hover:bg-burgundy-700`

## 🧩 Componentes

### 1. Header
- Navegación fija con scroll suave
- Logo centrado
- Menú hamburguesa en móvil
- Transición de opacidad al hacer scroll

### 2. Hero
- Sección principal con nombres de los novios
- Fondo con partículas animadas
- Botón de scroll hacia abajo
- Responsive con diferentes tamaños de texto

### 3. Countdown
- Contador regresivo hasta la fecha de la boda
- Animaciones de números
- Formato: Días, Horas, Minutos, Segundos
- Actualización en tiempo real

### 4. CeremonyDetails
- Información de la ceremonia en cards
- Mapa integrado de Google Maps
- Enlaces a Google Maps y Waze
- Sección oscura con efectos de cristal

### 5. Reception
- Información de la recepción
- Enlaces a ubicación (sujeta a cambios)
- Botones para agregar al calendario
- Sección clara con tarjetas elegantes

### 6. GiftRegistry
- Mesa de regalos de Liverpool
- Call-to-action prominente
- Diseño elegante y discreto
- Sección clara independiente

### 7. RSVP
- Formulario de confirmación de asistencia
- Integración con EmailJS
- Validación de campos
- Animaciones de confirmación
- Sección oscura con efectos especiales

## ⚠️ Problemas Conocidos y Soluciones

### 1. Problema de Contraste en Secciones Claras

**Problema**: El CSS global tiene `color: #171717` que afecta elementos con texto blanco.

**Solución**:
```jsx
// Usar estilos inline con !important
style={{ color: 'white !important' }}

// Ejemplo en botones
<button style={{ color: 'white !important' }}>
  Texto
</button>
```

### 2. Iconos No Visibles

**Problema**: Los iconos de Lucide React no se ven en secciones claras.

**Solución**:
```jsx
// Aplicar color explícito
<Gift className="w-6 h-6" style={{ color: 'white !important' }} />
```

### 3. Overlays Interfiriendo

**Problema**: Los overlays de hover pueden interferir con la visibilidad.

**Solución**:
```jsx
// Usar z-index alto
className="relative z-20"
```

## ✅ Mejores Prácticas

### 1. Estructura de Componentes
```jsx
const ComponentName = () => {
  // 1. Imports
  // 2. Estados y hooks
  // 3. Funciones auxiliares
  // 4. Render
  return (
    <section className="...">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        {/* Elementos decorativos */}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Contenido principal */}
      </div>
    </section>
  );
};
```

### 2. Responsive Design
- Usar breakpoints de Tailwind: `sm:`, `md:`, `lg:`, `xl:`
- Probar en diferentes dispositivos
- Usar `max-w-*` para contenedores
- Ajustar padding y márgenes por breakpoint

### 3. Animaciones
- Usar `whileInView` para animaciones al scroll
- Aplicar `viewport={{ once: true }}` para performance
- Usar `staggerChildren` para animaciones secuenciales
- Mantener duraciones consistentes (0.8s, 1.2s)

### 4. Botones
- **Usar colores planos**: Evitar gradientes en botones
- **Botones principales**: `bg-rose-500 hover:bg-rose-600`
- **Botones secundarios**: `bg-burgundy-600 hover:bg-burgundy-700`
- **Estados**: Incluir `hover:`, `focus:`, `active:` states
- **Consistencia**: Mantener el mismo estilo en todo el sitio

### 5. Accesibilidad
- Usar `alt` en imágenes
- Aplicar `aria-label` en botones
- Mantener contraste adecuado
- Usar `focus:` states en elementos interactivos

## 📁 Estructura de Archivos Detallada

```
PROYECTO/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx     # Navegación
│   │   ├── Hero.jsx       # Sección principal
│   │   ├── Countdown.jsx  # Contador regresivo
│   │   ├── CeremonyDetails.jsx # Detalles ceremonia
│   │   ├── Reception.jsx  # Información recepción
│   │   ├── GiftRegistry.jsx # Mesa de regalos
│   │   ├── RSVP.jsx       # Formulario confirmación
│   │   ├── Footer.jsx     # Pie de página
│   │   └── ScrollToTop.jsx # Botón scroll
│   ├── config/            # Configuraciones
│   │   └── emailjs.example.js
│   ├── App.jsx            # Componente raíz
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── dist/                  # Build de producción
├── node_modules/          # Dependencias
├── package.json           # Configuración del proyecto
├── tailwind.config.js     # Configuración Tailwind
├── vite.config.js         # Configuración Vite
├── vercel.json            # Configuración Vercel
└── README.md              # Documentación principal
```

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📝 Notas Importantes

1. **EmailJS**: Configurar las variables de entorno para el envío de emails
2. **Google Maps**: Los enlaces están hardcodeados, considerar hacerlos configurables
3. **Responsive**: Siempre probar en móvil, tablet y desktop
4. **Performance**: Usar `viewport={{ once: true }}` en animaciones
5. **Colores**: Mantener consistencia con la paleta definida
6. **Animaciones**: No exceder 1.5s de duración para mantener fluidez

## 🔄 Flujo de Trabajo Recomendado

1. **Nuevo Componente**:
   - Crear archivo en `src/components/`
   - Seguir la estructura estándar
   - Aplicar patrones de diseño consistentes
   - Agregar al `App.jsx`

2. **Modificaciones**:
   - Revisar impacto en responsive
   - Verificar contraste en secciones claras/oscuras
   - Probar animaciones
   - Validar accesibilidad

3. **Testing**:
   - Probar en diferentes dispositivos
   - Verificar en diferentes navegadores
   - Validar formularios
   - Comprobar enlaces externos

---

*Este documento debe mantenerse actualizado con cada cambio significativo en el proyecto.*
