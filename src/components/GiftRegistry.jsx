import { motion } from 'framer-motion';
import { 
  Gift,
  ExternalLink,
  Heart,
  Sparkles
} from 'lucide-react';

const GiftRegistry = () => {
  return (
    <section id="gift-registry" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-burgundy-900 via-wine-800 to-burgundy-800 relative overflow-hidden">
      {/* Fondo decorativo elegante */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-500/20 to-burgundy-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-burgundy-500/15 to-wine-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-500/25 to-burgundy-500/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-wine-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-pearl-100 mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="bg-gradient-to-r from-pearl-100 via-rose-300 to-pearl-100 bg-clip-text text-transparent">
              Mesa de Regalos
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-pearl-200 max-w-3xl mx-auto leading-relaxed font-poppins font-light">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo especial...
          </p>
        </motion.div>

        {/* Tarjeta principal elegante */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-burgundy-800/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-burgundy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Icono principal con animación */}
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-rose-500 to-burgundy-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
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
                <Gift className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
              </motion.div>

              {/* Información principal */}
              <div className="mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fraunces font-bold text-pearl-100 mb-4">
                  Liverpool
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-pearl-200 font-poppins font-medium mb-6">
                  Si deseas obsequiarnos algo especial
                </p>
                <p className="text-base sm:text-lg text-pearl-300 font-poppins leading-relaxed max-w-2xl mx-auto">
                  Tu atención y cariño son el mejor regalo que podemos recibir.
                </p>
              </div>

              {/* Call to Action principal */}
              <motion.a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51755425"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center px-10 sm:px-12 md:px-16 py-5 sm:py-6 md:py-8 bg-rose-600 hover:bg-rose-700 font-poppins font-bold text-lg sm:text-xl md:text-2xl rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl group hover:scale-105 active:scale-95 border-2 border-rose-500 text-white"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gift className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 sm:mr-4 group-hover:rotate-12 transition-transform duration-300 text-white" />
                <span className="text-white">Ver Mesa de Regalos</span>
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ml-3 sm:ml-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de agradecimiento con fondo blanco distintivo */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block px-10 py-8 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden group shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              y: -4,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Borde fijo */}
            <div className="absolute inset-0 rounded-2xl border-2 border-burgundy-300/40"></div>
            
            {/* Contenido principal */}
            <div className="relative z-10">
              {/* Icono único con animación */}
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-burgundy-600 to-burgundy-800 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
              {/* Texto fijo */}
              <p className="text-lg font-poppins font-medium text-burgundy-800">
                Gracias por ser parte de nuestra historia
              </p>
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftRegistry;
