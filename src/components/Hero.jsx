import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imágenes de parejas más elegantes y variadas
  const coupleImages = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
  ];

  // Auto-rotación de imágenes cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === coupleImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [coupleImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen max-h-[100vh] overflow-hidden">
      {/* Fondo principal con gradiente de la paleta - menos intenso */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/80 via-wine-900/70 to-burgundy-800/80"></div>
      
      {/* Patrón decorativo de fondo - reducido */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(196,23,106,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(137,15,45,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(209,218,220,0.05) 0%, transparent 70%)`,
        }}></div>
      </div>

      {/* Carrusel de imágenes de fondo con overlay elegante */}
      <div className="absolute inset-0 overflow-hidden">
        {coupleImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 0.6 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ 
              duration: 2.5, 
              ease: "easeInOut" 
            }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(0.2px) brightness(0.8)',
            }}
          />
        ))}
        {/* Overlay con gradiente de la paleta - más sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 via-burgundy-800/10 to-wine-900/20"></div>
      </div>

      {/* Elementos decorativos flotantes originales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pearl-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Contenido principal - Mobile First con mejor distribución */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-3 pt-8 pb-20 sm:px-4 sm:pt-12 sm:pb-24 md:px-6 md:pt-16 md:pb-28 lg:px-8 lg:pt-20 lg:pb-32">
        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center">
          
          {/* Layout centrado con mejor espaciado */}
          <div className="text-center space-y-6 sm:space-y-6 md:space-y-8 lg:space-y-10">
            
            {/* Título principal - Mobile First */}
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="text-pearl-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-poppins tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] lg:tracking-[0.3em] uppercase px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Invitación de Boda
              </motion.p>

              <h1 className="font-fraunces font-bold leading-[0.75] sm:leading-[0.8] md:leading-[0.85] lg:leading-[0.9] tracking-tight" style={{ fontSize: 'min(14svh, 6em)' }}>
                <motion.div
                  className="space-y-0 sm:space-y-0 md:space-y-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <motion.div
                    className="block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    <motion.span
                      style={{
                        background: "linear-gradient(45deg, #c4176a, #890f2d, #d1dadc, #c4176a)",
                        backgroundSize: "400% 400%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Noemí Sarahi
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center justify-center my-0 sm:my-0 md:my-0 py-0 sm:py-0 md:py-0"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
                  >
                    <motion.span 
                      className="font-fraunces italic block"
                      style={{ 
                        fontSize: 'min(8svh, 3.2em)',
                        background: "linear-gradient(45deg, #d1dadc, #c4176a, #890f2d, #d1dadc)",
                        backgroundSize: "400% 400%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        lineHeight: "0.8",
                        padding: "0.1em 0.2em",
                        height: "auto",
                        overflow: "visible",
                        width: "auto",
                        minWidth: "1em"
                      }}
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        textShadow: [
                          "0 0 0px rgba(209,218,220,0)",
                          "0 0 15px rgba(209,218,220,0.4)",
                          "0 0 0px rgba(209,218,220,0)"
                        ]
                      }}
                      transition={{ 
                        backgroundPosition: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        textShadow: {
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }
                      }}
                    >
                      &
                    </motion.span>
                  </motion.div>
                  
                  <motion.div
                    className="block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    <motion.span
                      style={{
                        background: "linear-gradient(45deg, #890f2d, #d1dadc, #c4176a, #890f2d)",
                        backgroundSize: "400% 400%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent"
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                      }}
                    >
                      Jorge Isaac
                    </motion.span>
                  </motion.div>
                </motion.div>
              </h1>

            </motion.div>

            {/* Botones de acción - Mobile First con más espacio */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center mt-10 sm:mt-8 md:mt-10 lg:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <motion.button
                onClick={() => scrollToSection('rsvp')}
                className="group relative px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-2 md:py-3 lg:py-4 bg-gradient-to-r from-burgundy-500 to-wine-500 text-white font-poppins font-semibold rounded-full hover:from-burgundy-600 hover:to-wine-600 transition-all duration-300 text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-wider overflow-hidden active:scale-95 active:from-burgundy-600 active:to-wine-600"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-1 md:gap-2">
                  <Heart className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  Confirmar Asistencia
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-burgundy-400 to-wine-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('ceremony')}
                className="group px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-2 md:py-3 lg:py-4 border-2 border-pearl-400 text-pearl-300 font-poppins font-semibold rounded-full hover:bg-pearl-400 hover:text-burgundy-900 transition-all duration-300 text-xs sm:text-xs md:text-sm lg:text-base uppercase tracking-wider active:scale-95 active:bg-pearl-400/20"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-1 sm:gap-1 md:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  Ver Detalles
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Mobile First */}
      <motion.div 
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('countdown')}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-pearl-400/20 backdrop-blur-sm border border-pearl-400/50 rounded-full flex items-center justify-center text-pearl-300 hover:bg-pearl-400/30 hover:text-white hover:border-pearl-400/70 transition-all duration-200 active:scale-95 active:bg-pearl-400/40"
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            y: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            } 
          }}
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Hero;