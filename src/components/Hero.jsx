import { motion } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import Plasma from './Plasma';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imágenes demo de parejas
  const coupleImages = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ];

  // Auto-rotación de imágenes cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === coupleImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [coupleImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen max-h-[100vh] bg-gradient-to-br from-burgundy-900 via-wine-900 to-burgundy-800 overflow-hidden">
      {/* Fondo Plasma elegante */}
      <div className="absolute inset-0">
        <Plasma 
          color="#c4176a"
          speed={0.4}
          direction="forward"
          scale={1.2}
          opacity={0.6}
          mouseInteractive={true}
        />
        {/* Overlay sutil para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/20 via-transparent to-wine-900/20"></div>
      </div>

      {/* Carrusel de imágenes de parejas con efecto difuminado */}
      <div className="absolute inset-0 overflow-hidden">
        {coupleImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 0.7 : 0,
              scale: index === currentImageIndex ? 1.05 : 1
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(2px) brightness(0.7)',
            }}
          />
        ))}
        {/* Overlay sutil para mantener el efecto gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/20 via-burgundy-800/15 to-wine-900/20"></div>
      </div>

      
      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 pb-8 -mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-6xl mx-auto flex flex-col justify-center h-full">

          {/* Main heading con diseño moderno */}
          <motion.div
            className="mb-8"
            variants={textVariants}
          >
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-fraunces font-bold text-white mb-4 leading-[0.85] tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Jorge Isaac
              </h1>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-fraunces font-bold text-white italic">
                  &
                </span>
              </div>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-fraunces font-bold text-white leading-[0.85] tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Noemí Sarahi
              </h1>
            </motion.div>
            
            <motion.div 
              className="relative inline-block px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-rose/20 to-burgundy-300/20 rounded-xl border-2 border-rose/30 backdrop-blur-md shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 group cursor-pointer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(196, 23, 106, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fraunces font-bold text-white italic tracking-wide group-hover:text-rose-100 transition-colors duration-300">
                Se Casan
              </h2>
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose/10 to-burgundy-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
        </motion.div>

          {/* CTA Buttons */}
        <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          variants={textVariants}
        >
            <motion.button
              onClick={() => scrollToSection('rsvp')}
              className="px-6 py-3 bg-gradient-to-r from-rose to-burgundy-500 text-white font-poppins font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirmar Asistencia
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('ceremony')}
              className="px-6 py-3 border-2 border-pearl-300/50 text-pearl-200 font-poppins font-semibold rounded-full hover:border-rose hover:bg-rose/10 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Detalles
            </motion.button>
        </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('countdown')}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            y: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            } 
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Hero;