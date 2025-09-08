import { motion } from 'framer-motion';
import { 
  Shirt, 
  X, 
  AlertTriangle, 
  Heart,
  Sparkles,
  Circle
} from 'lucide-react';

const DressCode = () => {
  const prohibitedColors = [
    { name: 'Rojo', color: 'bg-red-500' },
    { name: 'Blanco', color: 'bg-white border-2 border-gray-300' },
    { name: 'Beige', color: 'bg-amber-100' },
    { name: 'Hueso', color: 'bg-stone-100' },
    { name: 'Crema', color: 'bg-yellow-50' }
  ];

  return (
    <section id="dress-code" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-4 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-rose-200/25 to-amber-200/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-amber-200/35 to-rose-200/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-rose-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-burgundy-800 mb-6 sm:mb-8 tracking-tight drop-shadow-[0_0_20px_rgba(196,23,106,0.1)]">
            <span className="bg-gradient-to-r from-burgundy-800 via-amber-700 to-burgundy-800 bg-clip-text text-transparent">
              Código de Vestimenta
            </span>
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            <div className="w-24 h-px bg-gradient-to-l from-transparent via-amber-500 to-transparent"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-poppins font-medium">
            Para que todos se vean elegantes y respeten la solemnidad de nuestra boda
          </p>
        </motion.div>

        {/* Contenido Principal */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, staggerChildren: 0.15 }}
          viewport={{ once: true }}
        >
          {/* Vestimenta de Etiqueta */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-amber-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-amber-300/70 h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/20 to-rose-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shirt className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-fraunces font-bold text-burgundy-800 mb-4 text-center">
                  Vestimenta de Etiqueta
                </h3>
                
                <div className="space-y-4 text-lg font-poppins text-burgundy-700">
                  <div className="flex items-center gap-3">
                    <Circle className="w-3 h-3 text-amber-600 fill-current" />
                    <span><strong>Caballeros:</strong> Traje oscuro o smoking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="w-3 h-3 text-amber-600 fill-current" />
                    <span><strong>Damas:</strong> Vestido largo o traje sastre elegante</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="w-3 h-3 text-amber-600 fill-current" />
                    <span><strong>Accesorios:</strong> Zapatos cerrados y elegantes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colores Prohibidos */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-red-200/50 shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:border-red-300/70 h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <X className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-3xl font-fraunces font-bold text-burgundy-800 mb-6 text-center">
                  Colores Prohibidos
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {prohibitedColors.map((color, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`w-12 h-12 rounded-full ${color.color} shadow-md border-2 border-gray-200`}></div>
                      <span className="text-sm font-poppins font-semibold text-burgundy-700 text-center">
                        {color.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Advertencia Importante */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative inline-block group w-full"
            whileHover={{ 
              scale: 1.02, 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-red-200/30 via-amber-200/30 to-red-200/30 rounded-3xl blur-lg opacity-60"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <div className="relative bg-gradient-to-r from-red-50 to-amber-50 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded-2xl sm:rounded-3xl border-2 border-red-200 shadow-2xl overflow-hidden">
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-100/20 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  className="absolute top-4 left-8 w-1 h-1 bg-red-400 rounded-full"
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
                  className="absolute top-8 right-12 w-1 h-1 bg-amber-400 rounded-full"
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
                  className="absolute bottom-6 left-16 w-1 h-1 bg-red-300 rounded-full"
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
              
              <div className="relative z-10 text-center">
                <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-3">
                  <div className="flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-fraunces font-bold text-red-700 text-center">
                    Aviso Importante
                  </h3>
                </div>
                
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-red-200 shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.1)",
                      "0 0 30px rgba(239, 68, 68, 0.2)",
                      "0 0 20px rgba(239, 68, 68, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg font-fraunces text-red-800 font-bold mb-2 sm:mb-3 leading-relaxed px-2 sm:px-0"
                    animate={{
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Si te presentas con alguno de los colores descritos anteriormente, 
                    <br className="sm:hidden" />
                    <span className="text-red-900 font-black uppercase"> NO PODRÁS ENTRAR A LA CEREMONIA.</span>
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs sm:text-sm font-poppins text-red-700 font-medium px-2 sm:px-0"
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
                    Por favor, respeta nuestro código de vestimenta para que todos podamos celebrar juntos.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;
