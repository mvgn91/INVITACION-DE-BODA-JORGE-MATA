import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Users, Phone, Check, X, Utensils, Send, Sparkles, Shirt, AlertTriangle, UserPlus, Hash, Plus } from 'lucide-react';
import { sendToGoogleSheets } from '../config/googleSheets';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    acompanantes: 0,
    telefono: '',
    asistencia: '',
    restricciones: '',
    dressCodeAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }
    
    if (!formData.asistencia) {
      newErrors.asistencia = 'Por favor confirma tu asistencia';
    }
    
    if (!formData.dressCodeAccepted) {
      newErrors.dressCodeAccepted = 'Debes aceptar el código de vestimenta para continuar';
    }
    
    if (formData.nombre.length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (formData.telefono.length < 10) {
      newErrors.telefono = 'El teléfono debe tener al menos 10 dígitos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    // DEMO: Simular envío sin enviar datos reales
    setTimeout(() => {
      console.log('🎯 DEMO: Formulario RSVP simulado - No se enviaron datos reales');
      setIsSubmitted(true);
      setShowConfetti(true);
      
      // Ocultar confetti después de 4 segundos
      setTimeout(() => setShowConfetti(false), 4000);
      
      // Reset form
      setFormData({
        nombre: '',
        acompanantes: 0,
        telefono: '',
        asistencia: '',
        restricciones: '',
        dressCodeAccepted: false
      });
      
      setIsSubmitting(false);
    }, 2000); // Simular delay de 2 segundos
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const confettiVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const confettiItemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: -100,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative">
      {/* Confetti Effect */}
      {showConfetti && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-50"
          variants={confettiVariants}
          initial="hidden"
          animate="visible"
        >
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
                backgroundColor: ['#C4176A', '#CFD3C9', '#D1DADC', '#590F2F', '#890F2D'][Math.floor(Math.random() * 5)],
              }}
              variants={confettiItemVariants}
              animate={{
                x: (Math.random() - 0.5) * 300,
                rotate: 360,
              }}
            />
          ))}
        </motion.div>
      )}

        <motion.div
          className="relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-gray-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Efecto de brillo sutil */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-400 to-secondary-500 flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Check className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-gray-800 mb-4">
                🎉 ¡Gracias por probar la demo!
              </h3>
              <p className="text-lg font-poppins text-gray-600 mb-8">
                Esta es una versión DEMO - No se enviaron datos reales
              </p>
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-accent-50 to-secondary-50 rounded-2xl border border-accent-200">
                <p className="text-lg font-poppins text-gray-700 italic">
                  ¡Nos vemos el 20 de agosto!
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nombre Completo */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-gray-800 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  Nombre Completo *
                </label>
                <motion.input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent-200/50 transition-all duration-300 text-lg font-poppins font-medium ${
                    errors.nombre ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-accent-400'
                  }`}
                  placeholder="Tu nombre completo"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                  }}
                />
                {errors.nombre && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 font-poppins font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.nombre}
                  </motion.p>
                )}
              </motion.div>

              {/* Número de Acompañantes */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-gray-800 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  Número de Acompañantes
                </label>
                <motion.input
                  type="number"
                  name="acompanantes"
                  value={formData.acompanantes}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent-200/50 focus:border-accent-400 transition-all duration-300 text-lg font-poppins font-medium"
                  placeholder="0"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                  }}
                />
              </motion.div>

              {/* Teléfono */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-gray-800 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  Teléfono *
                </label>
                <motion.input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 bg-white border-2 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent-200/50 transition-all duration-300 text-lg font-poppins font-medium ${
                    errors.telefono ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-accent-400'
                  }`}
                  placeholder="Tu número de teléfono"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                  }}
                />
                {errors.telefono && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 font-poppins font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.telefono}
                  </motion.p>
                )}
              </motion.div>

              {/* Asistencia */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-gray-800 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  ¿Confirmas tu asistencia? *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: 'Sí asistiré', label: 'Sí asistiré', icon: Check },
                    { value: 'No podré asistir', label: 'No podré asistir', icon: X }
                  ].map((option) => (
                    <motion.label
                      key={option.value}
                        className={`flex items-center space-x-3 sm:space-x-4 cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 group ${
                        formData.asistencia === option.value
                          ? 'bg-gradient-to-r from-accent-50 to-secondary-50 border-accent-400 shadow-lg'
                          : 'bg-white border-gray-200 hover:border-accent-300 hover:bg-accent-50/30'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="asistencia"
                        value={option.value}
                        checked={formData.asistencia === option.value}
                        onChange={handleInputChange}
                        required
                        className="w-6 h-6 text-accent-600 bg-transparent border-2 border-accent-300 focus:ring-accent-500 focus:ring-4"
                      />
                      <option.icon className={`w-6 h-6 ${formData.asistencia === option.value ? 'text-accent-600' : 'text-gray-400'}`} />
                      <span className={`text-base sm:text-lg font-poppins font-medium group-hover:text-accent-700 transition-colors duration-200 ${
                        formData.asistencia === option.value ? 'text-accent-800' : 'text-gray-700'
                      }`}>
                        {option.label}
                      </span>
                    </motion.label>
                  ))}
                </div>
                {errors.asistencia && (
                  <motion.p 
                    className="text-red-500 text-sm mt-3 font-poppins font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.asistencia}
                  </motion.p>
                )}
              </motion.div>

              {/* Restricciones Alimentarias */}
              <motion.div variants={itemVariants}>
                <label className="flex items-center gap-4 text-lg sm:text-xl font-fraunces font-bold text-gray-800 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  Restricciones Alimentarias (opcional)
                </label>
                <motion.textarea
                  name="restricciones"
                  value={formData.restricciones}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent-200/50 focus:border-accent-400 transition-all duration-300 resize-none text-lg font-poppins font-medium"
                  placeholder="Ejemplo: Vegetariano, Sin gluten, Alérgico a mariscos…"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(245, 158, 11, 0.2)",
                  }}
                />
              </motion.div>

              {/* Código de Vestimenta */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <label className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-base sm:text-lg font-fraunces font-bold text-gray-800 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Shirt className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <span className="block mb-2 sm:mb-3">Código de Vestimenta *</span>
                      <div className="text-xs sm:text-sm font-poppins text-gray-600 mb-3 sm:mb-4">
                        <p className="mb-2">He leído y acepto el código de vestimenta que incluye:</p>
                        <ul className="list-disc list-inside space-y-1 text-red-700 font-semibold">
                          <li>Vestimenta de etiqueta obligatoria</li>
                          <li>Colores prohibidos: Rojo, Blanco, Beige, Hueso, Crema</li>
                          <li>Entrada negada si no se respeta el código</li>
                        </ul>
                      </div>
                    </div>
                  </label>
                  
                  <motion.label
                    className="flex items-start sm:items-center gap-3 sm:gap-4 cursor-pointer p-3 sm:p-4 bg-white/80 rounded-lg sm:rounded-xl border-2 border-gray-200 hover:border-red-300 hover:bg-red-50/50 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="checkbox"
                      name="dressCodeAccepted"
                      checked={formData.dressCodeAccepted}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 bg-transparent border-2 border-red-300 focus:ring-red-500 focus:ring-4 rounded mt-1 sm:mt-0 flex-shrink-0"
                    />
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 group-hover:text-red-600 transition-colors duration-200 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="text-sm sm:text-base font-poppins font-semibold text-gray-700 group-hover:text-red-800 transition-colors duration-200 leading-relaxed">
                        Confirmo que he leído y acepto el código de vestimenta
                      </span>
                    </div>
                  </motion.label>
                  
                  {errors.dressCodeAccepted && (
                    <motion.div 
                      className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 rounded-lg sm:rounded-xl shadow-lg"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0 mt-0.5 sm:mt-0">
                          <AlertTriangle className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-red-700 font-poppins font-semibold text-sm sm:text-base">
                            {errors.dressCodeAccepted}
                          </p>
                          <p className="text-red-600 font-poppins text-xs sm:text-sm mt-1">
                            Por favor, marca la casilla para continuar
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-accent-100 hover:bg-accent-200 text-gray-800 font-poppins font-bold text-xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/25 relative overflow-hidden group"
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.05,
                    boxShadow: "0 0 40px rgba(245, 158, 11, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3" style={{ color: '#1f2937 !important' }}>
                      <div className="w-6 h-6 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
                      <span style={{ color: '#1f2937 !important' }}>Procesando demo...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-4 relative z-10" style={{ color: '#1f2937 !important' }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-accent-600 to-accent-700 rounded-lg flex items-center justify-center shadow-lg">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <span style={{ color: '#1f2937 !important' }} className="text-xl font-bold">Probar Demo</span>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RSVPForm;
