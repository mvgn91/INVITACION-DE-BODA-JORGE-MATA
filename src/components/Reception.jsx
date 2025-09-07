import { motion } from 'framer-motion';
import { 
  Heart,
  MapPin,
  Bell
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
    <section id="reception" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Fondo decorativo elegante */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-100/40 to-burgundy-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-burgundy-100/30 to-wine-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-100/35 to-burgundy-100/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-wine-100/40 to-rose-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-fraunces font-bold text-burgundy-800 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(139,69,19,0.3)]">
            <span className="bg-gradient-to-r from-burgundy-800 via-rose-600 to-burgundy-800 bg-clip-text text-transparent">
              Recepción
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-burgundy-600 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
            Una celebración especial después de la ceremonia
          </p>
        </motion.div>

        {/* Tarjeta principal elegante */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 to-burgundy-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Icono principal con animación */}
                    <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-rose-500 to-burgundy-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                  boxShadow: [
                    "0 20px 25px -5px rgba(244, 63, 94, 0.1), 0 10px 10px -5px rgba(244, 63, 94, 0.04)",
                    "0 25px 50px -12px rgba(244, 63, 94, 0.25), 0 15px 15px -5px rgba(244, 63, 94, 0.1)",
                    "0 20px 25px -5px rgba(244, 63, 94, 0.1), 0 10px 10px -5px rgba(244, 63, 94, 0.04)"
                  ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                  ease: "easeInOut"
                      }}
                    >
                <Bell className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-rose-500" />
                    </motion.div>

              {/* Información de la fecha */}
              <div className="mb-10">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-fraunces font-bold text-burgundy-800 mb-4 text-center">
                  15 de Noviembre, 2025
                </h3>
                    </div>

              {/* Mensaje informativo */}
              <div className="mb-12">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-fraunces font-bold text-burgundy-800 mb-4 sm:mb-6">
                  ¡Mantente atento!
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-burgundy-600 font-poppins leading-relaxed max-w-3xl mx-auto">
                  La ubicación y detalles específicos de la recepción se confirmarán próximamente. 
                  Te mantendremos informado sobre todos los detalles para que puedas planificar tu asistencia.
                </p>
                  </div>
                  
              {/* CTAs para calendario mejorados */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <motion.a
                  href={generateGoogleCalendarLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 sm:px-8 md:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-poppins font-bold text-sm sm:text-base md:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-3xl group border-2 border-blue-400"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden xs:inline">Agregar a </span>Google Calendar
                </motion.a>

                <motion.a
                  href={generateICalLink()}
                  download="boda-noemi-jorge.ics"
                  className="flex items-center px-6 sm:px-8 md:px-12 py-4 sm:py-6 bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white rounded-xl sm:rounded-2xl font-poppins font-bold text-sm sm:text-base md:text-lg hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 shadow-2xl hover:shadow-3xl group border-2 border-burgundy-500"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden xs:inline">Descargar </span>iCal
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de espera elegante */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-10 py-6 bg-gradient-to-r from-rose-100/70 to-burgundy-100/70 rounded-2xl border border-rose-200/50 backdrop-blur-sm shadow-lg">
            <p className="text-xl font-poppins text-burgundy-600 tracking-wide font-medium">
              ¡Gracias por tu paciencia y comprensión!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reception;