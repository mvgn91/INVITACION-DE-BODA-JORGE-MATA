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

        {/* Tarjeta Liverpool */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-burgundy-800/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-burgundy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Icono principal */}
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-500 to-burgundy-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Información principal */}
              <div className="mb-6">
                <h3 className="text-xl font-fraunces font-bold text-pearl-100 mb-2">
                  Liverpool
                </h3>
                <p className="text-base text-pearl-200 font-poppins mb-4">
                  Si deseas obsequiarnos algo especial
                </p>
              </div>

              {/* Botón */}
              <motion.a
                href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51755425"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center px-6 sm:px-8 py-3 bg-rose-600 hover:bg-rose-700 font-poppins font-medium text-base sm:text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group hover:scale-105 active:scale-95 border-2 border-rose-500 text-white"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Ver en Liverpool</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Amazon Registry */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-amber-800/95 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl hover:shadow-3xl transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-fraunces font-bold text-amber-100 mb-2">
                  Amazon
                </h3>
                <p className="text-base text-amber-200 font-poppins">
                  También puedes encontrarnos en Amazon
                </p>
              </div>

              <motion.a
                href="https://www.amazon.com.mx/wedding/registry/2UDT5HVBCPR12"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-amber-600 hover:bg-amber-700 font-poppins font-medium text-base sm:text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl group-hover:scale-105 active:scale-95 border-2 border-amber-500 text-white"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span>Ver en Amazon</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de agradecimiento al final */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
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
            <div className="absolute inset-0 rounded-2xl border-2 border-burgundy-300/40"></div>
            
            <div className="relative z-10">
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
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
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
