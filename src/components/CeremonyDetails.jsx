import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Heart,
  Church, 
  Sparkles,
  Circle,
  Camera,
  Music,
  Navigation,
  Car,
  Gift,
  ExternalLink
} from 'lucide-react';

const CeremonyDetails = () => {
  const ceremonyInfo = [
    {
      icon: Heart,
      title: "Fecha",
      value: "15 de Noviembre, 2025",
      subtitle: "Sábado",
      color: "from-rose-500 to-burgundy-600"
    },
    {
      icon: Church,
      title: "Ceremonia",
      value: "Parroquia San Gregorio Magno",
      subtitle: "Calle Amistad #1267",
      color: "from-burgundy-500 to-rose-600"
    },
    {
      icon: Camera,
      title: "Fotografías",
      value: "Sesión en el jardín",
      subtitle: "Después de la ceremonia",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Music,
      title: "Recepción",
      value: "Cena y celebración",
      subtitle: "Hasta el amanecer",
      color: "from-purple-500 to-indigo-500"
    }
  ];


  return (
    <section id="ceremony" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-4 bg-gradient-to-br from-burgundy-900 via-wine-800 to-burgundy-800 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-500/20 to-burgundy-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-burgundy-500/15 to-wine-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-500/25 to-burgundy-500/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-wine-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
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
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-pearl-100 mb-6 sm:mb-8 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="bg-gradient-to-r from-pearl-100 via-rose-300 to-pearl-100 bg-clip-text text-transparent">
              Nuestra Ceremonia
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-pearl-200 max-w-4xl mx-auto leading-relaxed font-poppins font-light">
            Un momento sagrado donde dos almas se unen para siempre en el amor y la bendición divina
          </p>
        </motion.div>

        {/* Información Principal - Grid de 4 columnas */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {ceremonyInfo.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="relative bg-burgundy-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-rose/50 h-full">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-fraunces font-bold text-pearl-100 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-base sm:text-lg font-poppins font-semibold text-pearl-200 mb-1 sm:mb-2">{item.value}</p>
                  <p className="text-xs sm:text-sm font-poppins text-pearl-300">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-pearl-100 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="bg-gradient-to-r from-pearl-100 via-rose-300 to-pearl-100 bg-clip-text text-transparent">
                Ubicación
              </span>
            </h3>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
            </div>
            <p className="text-xl font-poppins text-pearl-200 max-w-3xl mx-auto">
              Encuéntranos en el corazón de la ciudad, donde el amor se encuentra con la fe
            </p>
          </div>
          
          <div className="relative bg-burgundy-800/95 backdrop-blur-lg rounded-3xl p-8 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose/5 to-burgundy-500/10"></div>
            
            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-gradient-to-r from-rose-500/20 to-burgundy-500/20 rounded-2xl p-6 border border-rose/30">
                    <h4 className="text-xl font-fraunces font-bold text-pearl-100 mb-4 flex items-center">
                      <Church className="w-6 h-6 text-rose-400 mr-3" />
                      Dirección
                    </h4>
                    <p className="text-xl sm:text-2xl font-poppins font-semibold text-pearl-200 mb-2">Parroquia San Gregorio Magno</p>
                    <p className="text-base font-poppins text-pearl-300">Calle Amistad #1267</p>
                    <p className="text-base font-poppins text-pearl-300">Col. Margarita Maza de Juárez</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-burgundy-500/20 to-wine-500/20 rounded-2xl p-6 border border-burgundy/30">
                    <h4 className="text-xl font-fraunces font-bold text-pearl-100 mb-4 flex items-center">
                      <Car className="w-6 h-6 text-burgundy-400 mr-3" />
                      Estacionamiento
                    </h4>
                    <p className="text-base font-poppins text-pearl-200 mb-2">Disponible en la zona</p>
                    <p className="text-sm font-poppins text-pearl-300">Recomendamos llegar 15 min antes</p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber/30">
                    <h4 className="text-xl font-fraunces font-bold text-pearl-100 mb-4 flex items-center">
                      <Navigation className="w-6 h-6 text-amber-400 mr-3" />
                      Cómo llegar
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="https://maps.app.goo.gl/haV7toUE5krwgR1j6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-poppins font-semibold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center group hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="hidden xs:inline">Abrir en </span>Google Maps
                      </a>
                      <a
                        href="https://www.waze.com/en/live-map/directions/parroquia-san-gregorio-magno-amistad-1268-guadalajara?place=w.168231119.1682311191.9243343"
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d554.7714151508845!2d-103.3010881567749!3d20.708504638899733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b11b34bf70a5%3A0x310d772809651204!2sParroquia%20De%20San%20Gregorio%20Magno!5e0!3m2!1ses-419!2smx!4v1757216334071!5m2!1ses-419!2smx" 
                      width="100%" 
                      height="500" 
                      style={{border: 0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                </div>
              </div>
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
            <div className="relative bg-burgundy-800/90 backdrop-blur-md px-12 py-10 rounded-3xl border border-rose/30 shadow-2xl overflow-hidden">
              
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-burgundy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  className="absolute top-4 left-8 w-1 h-1 bg-rose-300 rounded-full"
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
                  className="absolute top-8 right-12 w-1 h-1 bg-pearl-300 rounded-full"
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
                  className="absolute bottom-6 left-16 w-1 h-1 bg-rose-200 rounded-full"
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
                  className="text-2xl md:text-3xl font-fraunces text-pearl-100 italic font-medium max-w-4xl leading-relaxed mb-6"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "El amor verdadero no consiste en mirarse el uno al otro, sino en mirar juntos en la misma dirección"
                </motion.blockquote>
                
                <motion.p 
                  className="text-lg font-poppins text-pearl-200 font-medium"
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
                  - Antoine de Saint-Exupéry
                </motion.p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CeremonyDetails;
