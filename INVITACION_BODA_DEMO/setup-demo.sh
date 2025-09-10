#!/bin/bash

# 🎯 Script de Configuración DEMO - Invitación de Boda
# Este script configura automáticamente el proyecto demo

echo "🎉 Configurando Invitación de Boda DEMO..."
echo "================================================"

# Verificar que estamos en la carpeta correcta
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en la carpeta INVITACION_BODA_DEMO"
    exit 1
fi

echo "📦 Instalando dependencias..."
npm install

echo "🔧 Verificando configuración..."
if [ ! -f ".env" ]; then
    echo "📝 Creando archivo .env de ejemplo..."
    cat > .env << EOF
# Configuración DEMO - Invitación de Boda
VITE_EMAILJS_SERVICE_ID=demo_service
VITE_EMAILJS_TEMPLATE_ID=demo_template
VITE_EMAILJS_PUBLIC_KEY=demo_key
EOF
    echo "✅ Archivo .env creado con valores demo"
else
    echo "✅ Archivo .env ya existe"
fi

echo "🎨 Verificando paleta de colores..."
if grep -q "navy" tailwind.config.js; then
    echo "✅ Paleta de colores demo configurada"
else
    echo "❌ Error: Paleta de colores no configurada correctamente"
fi

echo "📱 Verificando datos demo..."
if grep -q "María Elena" src/components/Hero.jsx; then
    echo "✅ Datos demo configurados correctamente"
else
    echo "❌ Error: Datos demo no configurados"
fi

echo "🚀 Iniciando servidor de desarrollo..."
echo "================================================"
echo "🌐 La aplicación estará disponible en: http://localhost:5173"
echo "📱 Prueba en diferentes dispositivos para verificar la responsividad"
echo "🎯 Esta es una versión DEMO con datos ficticios"
echo "================================================"

npm run dev
