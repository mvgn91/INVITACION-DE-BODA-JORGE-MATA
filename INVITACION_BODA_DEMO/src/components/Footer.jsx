import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Efectos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo iniciales */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white font-fraunces font-bold text-xl sm:text-2xl md:text-3xl tracking-wider bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              M & C
            </span>
          </motion.div>

          {/* Hashtag y Creditos */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.div 
              className="px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl border border-cyan-400/30 cursor-pointer hover:bg-blue-500/30 hover:border-cyan-400/60 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-sm sm:text-base font-fraunces font-bold text-cyan-300 tracking-wider hover:text-cyan-200 transition-colors duration-300">
                #BodaMariaYCarlos
              </h3>
            </motion.div>

            <motion.a
              href="https://mvgn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-4 sm:px-6 py-3 bg-gradient-to-r from-slate-700/30 to-blue-600/20 backdrop-blur-md rounded-2xl border border-blue-400/30 cursor-pointer hover:from-blue-500/40 hover:to-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              <h3 className="relative z-10 text-sm sm:text-base font-poppins font-semibold text-blue-200 tracking-wide group-hover:text-cyan-300 transition-colors duration-500">
                Designed By MVGN Labs
              </h3>
              
              {/* Partículas decorativas */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;