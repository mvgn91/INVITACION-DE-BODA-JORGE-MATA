import { motion } from 'framer-motion';
import { 
  Heart,
  MapPin,
  Calendar,
  Navigation,
  Car
} from 'lucide-react';

const Reception = () => {
  const eventDate = new Date('2025-11-15');
  
  const generateGoogleCalendarLink = () => {
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const details = encodeURIComponent('Boda de Noemí Sarahi Hernández Arevalos y Jorge Isaac Mata Guerrero\n\nDetalles de la recepción se confirmarán próximamente.\n\n¡Esperamos verte ahí!');
    const location = encodeURIComponent('Ubicación por confirmar');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda de Noemí y Jorge&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  const generateICalLink = () => {
    const startDate = eventDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(eventDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icalContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Event//EN
BEGIN:VEVENT
UID:wedding-${Date.now()}@example.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:Boda de Noemí y Jorge
DESCRIPTION:Boda de Noemí Sarahi Hernández Arevalos y Jorge Isaac Mata Guerrero\\n\\nDetalles de la recepción se confirmarán próximamente.\\n\\n¡Esperamos verte ahí!
LOCATION:Ubicación por confirmar
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    return URL.createObjectURL(blob);
  };


  return (
    <section id="reception" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-4 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-100/40 to-burgundy-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-burgundy-100/30 to-wine-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-100/35 to-burgundy-100/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-wine-100/40 to-rose-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-burgundy-800 mb-6 sm:mb-8 tracking-tight drop-shadow-[0_0_20px_rgba(139,69,19,0.3)]">
            <span className="bg-gradient-to-r from-burgundy-800 via-rose-600 to-burgundy-800 bg-clip-text text-transparent">
              Recepción
            </span>
          </h2>
          
        </motion.div>


        {/* Sección de Ubicación */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-fraunces font-bold text-burgundy-800 mb-4">
              Eventos GREENOVIA
            </h3>
            <p className="text-lg md:text-xl font-poppins text-burgundy-600 max-w-3xl mx-auto leading-relaxed">
              Volcán Kenia 5471A, Panorámica de Huentitán, 44259 Guadalajara, Jal
            </p>
            <div className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200/50">
              <p className="text-base font-poppins font-semibold text-amber-800">
                *Sujeta a cambios
              </p>
            </div>
          </div>
          
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose/5 to-burgundy-500/10"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-gradient-to-r from-rose-500/20 to-burgundy-500/20 rounded-2xl p-6 border border-rose/30">
                    <h4 className="text-xl font-fraunces font-bold text-burgundy-800 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 text-rose-500 mr-3" />
                      Dirección
                    </h4>
                    <p className="text-lg font-poppins font-semibold text-burgundy-700 mb-2">Eventos GREENOVIA</p>
                    <p className="text-base font-poppins text-burgundy-600">Volcán Kenia 5471A, Panorámica de Huentitán</p>
                    <p className="text-sm font-poppins text-burgundy-500">44259 Guadalajara, Jal</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber/30">
                    <h4 className="text-xl font-fraunces font-bold text-burgundy-800 mb-4 flex items-center">
                      <Heart className="w-6 h-6 text-amber-500 mr-3" />
                      Información Adicional
                    </h4>
                    <p className="text-base font-poppins text-burgundy-700 mb-2">Detalles por confirmar</p>
                    <p className="text-sm font-poppins text-amber-700 font-semibold">*Sujeta a cambios</p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber/30">
                    <h4 className="text-xl font-fraunces font-bold text-burgundy-800 mb-4 flex items-center">
                      <Navigation className="w-6 h-6 text-amber-500 mr-3" />
                      Cómo llegar
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="https://maps.app.goo.gl/NW7YH3GWM7rF6rwt5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-poppins font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden xs:inline">Abrir en </span>Google Maps
                      </a>
                      <a
                        href="https://www.waze.com/en/live-map/directions/mx/jal./guadalajara/eventos-greenovia?place=ChIJh4MHjJCxKIQR9p57R1shNEA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-poppins font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden xs:inline">Abrir en </span>Waze
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 hidden sm:block">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.394990469191!2d-103.3119085!3d20.7347786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1908c078387%3A0x4034215b477b9ef6!2sEventos%20GREENOVIA!5e0!3m2!1ses-419!2smx!4v1757285542922!5m2!1ses-419!2smx" 
                      width="100%" 
                      height="300" 
                      style={{border: 0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl sm:h-[400px] lg:h-[500px]"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mini Sección de Calendario */}
        <motion.div
          className="relative bg-gradient-to-br from-burgundy-50 via-rose-50 to-wine-50 rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 mb-12 border border-burgundy-200/50 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Decoración de fondo */}
          <div className="absolute inset-0 rounded-3xl sm:rounded-4xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-burgundy-200/20 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-tr from-rose-200/20 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Contenido */}
          <div className="relative z-10 text-center">
            {/* Icono decorativo */}
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-burgundy-500 to-wine-500 rounded-full mb-4 sm:mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </motion.div>

            {/* Título */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fraunces font-bold text-burgundy-800 mb-2 sm:mb-3">
              ¡No te olvides!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-burgundy-600 mb-6 sm:mb-8 font-poppins">
              Agrega la fecha a tu calendario
            </p>
            
            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
              <motion.a
                href={generateGoogleCalendarLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/50 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Agregar a </span>Google Calendar
              </motion.a>

              <motion.a
                href={generateICalLink()}
                download="boda-noemi-jorge.ics"
                className="group flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-burgundy-500 to-wine-500 hover:from-burgundy-600 hover:to-wine-600 text-white rounded-2xl font-poppins font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl border border-burgundy-400/50 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iCal
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mensaje Final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block group"
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-rose/20 via-burgundy-200/20 to-rose/20 rounded-3xl blur-lg opacity-60"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="relative bg-white/90 backdrop-blur-md px-12 py-10 rounded-3xl border border-rose/30 shadow-2xl overflow-hidden">
              
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-burgundy-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  className="absolute top-4 left-8 w-1 h-1 bg-rose-400 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.8, 0.2],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0
                  }}
                />
                <motion.div
                  className="absolute top-8 right-12 w-1 h-1 bg-burgundy-400 rounded-full"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.3, 0.9, 0.3],
                    x: [0, -3, 0]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-16 w-1 h-1 bg-rose-300 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.1, 0.6, 0.1],
                    x: [0, 8, 0]
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    delay: 2
                  }}
                />
              </div>
              
              <div className="relative z-10">
                <motion.blockquote 
                  className="text-2xl md:text-3xl font-fraunces text-burgundy-800 italic font-medium max-w-4xl leading-relaxed mb-6"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "Amar profundamente a alguien nos da fuerza. Sentirse amado profundamente por alguien nos da valor."
                </motion.blockquote>
                
                <motion.p 
                  className="text-lg font-poppins text-burgundy-600 font-medium"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  — Lao-Tsé
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Reception;