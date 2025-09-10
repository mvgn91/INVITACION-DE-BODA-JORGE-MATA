import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo iniciales */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-burgundy-800 font-fraunces font-bold text-lg sm:text-xl md:text-2xl tracking-wider">N & J</span>
          </motion.div>

          {/* Hashtag y Creditos */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <motion.div 
              className="px-3 sm:px-4 py-2 bg-gradient-to-r from-rose-500/20 to-burgundy-500/20 backdrop-blur-md rounded-xl border border-rose/30 cursor-pointer hover:bg-rose/30 hover:border-rose/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xs sm:text-sm font-fraunces font-bold text-burgundy-800 tracking-wider hover:text-rose-600 transition-colors duration-300">
                #BodaNoemiYJorge
              </h3>
            </motion.div>

            <motion.a
              href="https://mvgn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-500/20 to-slate-600/20 backdrop-blur-md rounded-xl border border-slate/30 cursor-pointer hover:from-burgundy-500/30 hover:to-wine-500/30 hover:border-burgundy/50 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              <h3 className="relative z-10 text-xs sm:text-sm font-poppins font-semibold text-slate-700 tracking-wide group-hover:text-burgundy-800 transition-colors duration-500">
                Designed By MVGN Labs
              </h3>
              
              {/* Partículas decorativas */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-burgundy-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-wine-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;