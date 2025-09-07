import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 bg-gradient-to-t from-burgundy-900 via-burgundy-800 to-wine-800">
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
            <span className="text-pearl-100 font-fraunces font-bold text-xl sm:text-2xl tracking-wider">J & N</span>
          </motion.div>

          {/* Hashtag */}
          <motion.div 
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-pearl-300/30 cursor-pointer hover:bg-rose/20 hover:border-rose/60 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-sm font-fraunces font-bold text-rose tracking-wider hover:text-white transition-colors duration-300">
              #BodaNoemiYJorge
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;