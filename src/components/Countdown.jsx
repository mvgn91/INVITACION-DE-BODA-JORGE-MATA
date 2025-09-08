import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Sparkles } from 'lucide-react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-15T19:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const timeUnits = [
    { label: 'Días', value: timeLeft.days, color: 'from-rose to-burgundy-500' },
    { label: 'Horas', value: timeLeft.hours, color: 'from-burgundy-400 to-burgundy-600' },
    { label: 'Minutos', value: timeLeft.minutes, color: 'from-burgundy-400 to-wine-500' },
    { label: 'Segundos', value: timeLeft.seconds, color: 'from-wine-400 to-rose' },
  ];

  return (
    <section id="countdown" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-burgundy-50 via-burgundy-100 to-burgundy-200 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-10 w-32 h-32 border border-rose/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-burgundy-300/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border border-burgundy-300/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 border border-wine-300/30 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-burgundy-800 mb-6 sm:mb-8 tracking-tight relative inline-block drop-shadow-[0_0_20px_rgba(139,69,19,0.2)]">
            <span className="relative z-10">Cuenta Regresiva</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-rose/30 via-burgundy-300/30 to-rose/30 blur-lg opacity-70 animate-pulse rounded-lg"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-rose/20 via-burgundy-300/20 to-rose/20 blur-md opacity-50 rounded-md"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-burgundy-600 max-w-3xl mx-auto leading-relaxed font-light">
            El gran día se acerca. ¡No podemos esperar para celebrar contigo!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="relative group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-rose/20 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-rose/40">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose/5 to-burgundy-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Número principal */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-fraunces font-bold bg-gradient-to-br ${unit.color} bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4`}
                    key={unit.value}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  
                  {/* Etiqueta */}
                  <p className="text-xs sm:text-sm md:text-base font-poppins font-medium text-burgundy-600 uppercase tracking-wider">
                    {unit.label}
                  </p>
                </div>

                {/* Elemento decorativo */}
                <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${unit.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje final mejorado */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose/10 to-burgundy-300/10 rounded-xl sm:rounded-2xl border border-rose/20">
            <p className="text-base sm:text-lg font-poppins text-burgundy-600 italic font-medium">
              ¡Nos vemos pronto!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Countdown;