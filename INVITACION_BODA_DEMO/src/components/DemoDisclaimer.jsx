import { motion } from 'framer-motion';
import { AlertTriangle, Info, Eye, Shield, Sparkles, Zap } from 'lucide-react';

const DemoDisclaimer = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Fondo dinámico moderno */}
      <div className="absolute inset-0">
        {/* Elementos flotantes con paleta azul */}
        <motion.div 
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, 30, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-slate-800/40 to-blue-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -25, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-tr from-cyan-500/25 to-blue-800/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.8, 0.25],
            x: [0, 35, 0],
            y: [0, -25, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Partículas flotantes mejoradas */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.4, 1, 0.4],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Líneas de energía modernas */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400/50 to-transparent"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Efectos de cristal adicionales */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mb-8 shadow-2xl border-2 border-cyan-400/30"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 3, -3, 0],
              boxShadow: [
                "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                "0 25px 50px -12px rgba(6, 182, 212, 0.7)",
                "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <AlertTriangle className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-fraunces font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              ⚡ VERSIÓN DEMO
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-200 mb-8 font-poppins font-medium">
            Experiencia de demostración interactiva
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <motion.div
          className="bg-slate-800/90 backdrop-blur-xl rounded-3xl p-10 sm:p-12 md:p-16 border-2 border-cyan-400/30 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Efecto de brillo interno */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            {/* Información importante */}
            <div className="space-y-8">
              <motion.div 
                className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <Info className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-fraunces font-bold text-white mb-3">
                    Datos Ficticios
                  </h3>
                  <p className="text-blue-100 font-poppins leading-relaxed text-lg">
                    Todos los nombres, fechas, ubicaciones y datos de contacto mostrados en este sitio son completamente ficticios y solo para propósitos de demostración.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-fraunces font-bold text-white mb-3">
                    Solo Visualización
                  </h3>
                  <p className="text-blue-100 font-poppins leading-relaxed text-lg">
                    Esta es una demostración de las funcionalidades y diseño. Los formularios no envían datos reales y los enlaces están deshabilitados.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-6 p-6 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-fraunces font-bold text-white mb-3">
                    Sin Datos Reales
                  </h3>
                  <p className="text-blue-100 font-poppins leading-relaxed text-lg">
                    No se almacenan, procesan o envían datos personales reales. Esta versión es completamente segura para demostración.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Lista de características demo */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-fraunces font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Características de la Demo
                  </span>
                </h3>
                <p className="text-blue-200 text-lg font-poppins">
                  Explora todas las funcionalidades disponibles
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "📱", text: "Diseño responsive completo" },
                  { icon: "✨", text: "Animaciones y transiciones suaves" },
                  { icon: "⏰", text: "Cuenta regresiva en tiempo real" },
                  { icon: "📝", text: "Formulario RSVP simulado" },
                  { icon: "🗺️", text: "Enlaces de mapas deshabilitados" },
                  { icon: "🎁", text: "Mesa de regalos ficticia" },
                  { icon: "🎨", text: "Paleta de colores personalizada" },
                  { icon: "🔒", text: "Datos completamente ficticios" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                      {feature.icon}
                    </div>
                    <span className="text-blue-100 font-poppins font-medium text-sm sm:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mensaje final */}
          <motion.div
            className="mt-12 pt-8 border-t-2 border-cyan-400/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-10 py-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl border-2 border-cyan-400/40 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <p className="text-2xl font-fraunces font-bold text-white">
                  Propósito de Demostración
                </p>
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-blue-100 font-poppins text-lg max-w-2xl">
                Esta versión demo está diseñada para mostrar las capacidades y el diseño de invitaciones digitales modernas con tecnología de vanguardia.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoDisclaimer;
