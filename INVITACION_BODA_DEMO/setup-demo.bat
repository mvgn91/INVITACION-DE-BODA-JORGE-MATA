@echo off
REM 🎯 Script de Configuración DEMO - Invitación de Boda (Windows)
REM Este script configura automáticamente el proyecto demo

echo 🎉 Configurando Invitación de Boda DEMO...
echo ================================================

REM Verificar que estamos en la carpeta correcta
if not exist "package.json" (
    echo ❌ Error: No se encontró package.json. Asegúrate de estar en la carpeta INVITACION_BODA_DEMO
    pause
    exit /b 1
)

echo 📦 Instalando dependencias...
npm install

echo 🔧 Verificando configuración...
if not exist ".env" (
    echo 📝 Creando archivo .env de ejemplo...
    (
        echo # Configuración DEMO - Invitación de Boda
        echo VITE_EMAILJS_SERVICE_ID=demo_service
        echo VITE_EMAILJS_TEMPLATE_ID=demo_template
        echo VITE_EMAILJS_PUBLIC_KEY=demo_key
    ) > .env
    echo ✅ Archivo .env creado con valores demo
) else (
    echo ✅ Archivo .env ya existe
)

echo 🎨 Verificando paleta de colores...
findstr /C:"navy" tailwind.config.js >nul
if %errorlevel% equ 0 (
    echo ✅ Paleta de colores demo configurada
) else (
    echo ❌ Error: Paleta de colores no configurada correctamente
)

echo 📱 Verificando datos demo...
findstr /C:"María Elena" src\components\Hero.jsx >nul
if %errorlevel% equ 0 (
    echo ✅ Datos demo configurados correctamente
) else (
    echo ❌ Error: Datos demo no configurados
)

echo 🚀 Iniciando servidor de desarrollo...
echo ================================================
echo 🌐 La aplicación estará disponible en: http://localhost:5173
echo 📱 Prueba en diferentes dispositivos para verificar la responsividad
echo 🎯 Esta es una versión DEMO con datos ficticios
echo ================================================

npm run dev
