import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Heart, Check, X, User, Users, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    confirmation: '',
    message: '',
    dietary: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.confirmation) {
      newErrors.confirmation = 'Por favor confirma tu asistencia';
    }
    
    if (formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
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

    try {
      // Simular envío (reemplazar con EmailJS real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setShowConfetti(true);
      
      // Ocultar confetti después de 4 segundos
      setTimeout(() => setShowConfetti(false), 4000);
      
      // Reset form
      setFormData({
        name: '',
        guests: '',
        confirmation: '',
        message: '',
        dietary: ''
      });
    } catch (error) {
      console.error('Error sending RSVP:', error);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="rsvp" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-wine-800 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-20 w-40 h-40 border border-rose/30 rounded-full"></div>
        <div className="absolute top-40 right-32 w-32 h-32 border border-sage-300/30 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 border border-burgundy-300/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border border-wine-300/30 rounded-full"></div>
      </div>

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

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-fraunces font-bold text-pearl-100 mb-6 sm:mb-8 tracking-tight relative inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Confirma tu Asistencia</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-rose/30 via-burgundy-300/30 to-rose/30 blur-lg opacity-70 animate-pulse rounded-lg"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-rose/20 via-burgundy-300/20 to-rose/20 blur-md opacity-50 rounded-md"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-poppins text-pearl-200 max-w-2xl mx-auto leading-relaxed">
            Por favor, confirma tu asistencia antes del 1 de noviembre. 
            Tu presencia es muy importante para nosotros.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-burgundy-800/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-rose/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose/5 to-burgundy-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {isSubmitted ? (
              <motion.div
                className="text-center py-8 sm:py-12 md:py-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-rose to-sage-400 flex items-center justify-center shadow-2xl"
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
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pearl-100" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-fraunces font-bold text-rose mb-4 sm:mb-6">
                  ¡Gracias por confirmar!
                </h3>
                <p className="text-lg sm:text-xl font-poppins text-pearl-200 mb-6 sm:mb-8">
                  Tu respuesta ha sido enviada exitosamente
                </p>
                <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose/20 to-burgundy-100/20 rounded-xl sm:rounded-2xl border border-rose/30">
                  <p className="text-base sm:text-lg font-poppins text-pearl-100 italic">
                    ¡Nos vemos el 15 de noviembre!
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Name Input */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center gap-2 text-base sm:text-lg font-poppins font-semibold text-pearl-100 mb-2 sm:mb-3">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />
                    Nombre Completo *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 rounded-xl sm:rounded-2xl text-pearl-100 placeholder-pearl-300/60 focus:outline-none focus:ring-4 focus:ring-rose/30 transition-all duration-300 text-base sm:text-lg ${
                      errors.name ? 'border-red-400' : 'border-pearl-300/30 focus:border-rose'
                    }`}
                    placeholder="Tu nombre completo"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(196, 23, 106, 0.3)",
                    }}
                  />
                  {errors.name && (
                    <motion.p 
                      className="text-red-400 text-sm mt-2 font-poppins"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Guests Input */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center gap-2 text-lg font-poppins font-semibold text-pearl-100 mb-3">
                    <Users className="w-5 h-5 text-burgundy-400" />
                    Número de Acompañantes
                  </label>
                  <motion.select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-pearl-300/30 rounded-2xl text-pearl-100 focus:border-rose focus:outline-none focus:ring-4 focus:ring-rose/30 transition-all duration-300 text-lg"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(196, 23, 106, 0.3)",
                    }}
                  >
                    <option value="" className="bg-burgundy-900 text-pearl-100">Selecciona el número de acompañantes</option>
                    <option value="0" className="bg-burgundy-900 text-pearl-100">Solo yo</option>
                    <option value="1" className="bg-burgundy-900 text-pearl-100">1 acompañante</option>
                    <option value="2" className="bg-burgundy-900 text-pearl-100">2 acompañantes</option>
                    <option value="3" className="bg-burgundy-900 text-pearl-100">3 acompañantes</option>
                    <option value="4" className="bg-burgundy-900 text-pearl-100">4 acompañantes</option>
                  </motion.select>
                </motion.div>

                {/* Confirmation Radio */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center gap-2 text-lg font-poppins font-semibold text-pearl-100 mb-6">
                    <Heart className="w-5 h-5 text-rose-400" />
                    ¿Confirmas tu asistencia? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { value: 'yes', label: 'Sí, asistiré', icon: Check },
                      { value: 'no', label: 'No podré asistir', icon: X }
                    ].map((option) => (
                      <motion.label
                        key={option.value}
                        className={`flex items-center space-x-4 cursor-pointer p-4 rounded-2xl border-2 transition-all duration-300 group ${
                          formData.confirmation === option.value
                            ? 'bg-gradient-to-r from-rose/20 to-sage-300/20 border-rose shadow-lg'
                            : 'bg-white/5 border-pearl-300/30 hover:border-rose/50 hover:bg-white/10'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="confirmation"
                          value={option.value}
                          checked={formData.confirmation === option.value}
                          onChange={handleInputChange}
                          required
                          className="w-6 h-6 text-rose bg-transparent border-2 border-rose/50 focus:ring-rose focus:ring-4"
                        />
                        <option.icon className="w-6 h-6 text-rose-500" />
                        <span className="text-lg font-poppins text-pearl-100 group-hover:text-rose transition-colors duration-200">
                          {option.label}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                  {errors.confirmation && (
                    <motion.p 
                      className="text-red-400 text-sm mt-3 font-poppins"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.confirmation}
                    </motion.p>
                  )}
                </motion.div>

                {/* Dietary Restrictions */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center gap-2 text-lg font-poppins font-semibold text-pearl-100 mb-3">
                    <Mail className="w-5 h-5 text-burgundy-400" />
                    Restricciones Alimentarias (opcional)
                  </label>
                  <motion.input
                    type="text"
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-pearl-300/30 rounded-2xl text-pearl-100 placeholder-pearl-300/60 focus:border-rose focus:outline-none focus:ring-4 focus:ring-rose/30 transition-all duration-300 text-lg"
                    placeholder="Ej: Vegetariano, Alergia a mariscos, etc."
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(196, 23, 106, 0.3)",
                    }}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center gap-2 text-lg font-poppins font-semibold text-pearl-100 mb-3">
                    <MessageSquare className="w-5 h-5 text-burgundy-400" />
                    Mensaje Especial (opcional)
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-pearl-300/30 rounded-2xl text-pearl-100 placeholder-pearl-300/60 focus:border-rose focus:outline-none focus:ring-4 focus:ring-rose/30 transition-all duration-300 resize-none text-lg"
                    placeholder="Déjanos un mensaje especial para este día tan importante..."
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(196, 23, 106, 0.3)",
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-6">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-6 bg-gradient-to-r from-rose to-burgundy-400 text-pearl-100 font-poppins font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-rose/25 relative overflow-hidden group"
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.05,
                      boxShadow: "0 0 40px rgba(196, 23, 106, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Efecto de brillo */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-6 h-6 border-2 border-pearl-100 border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando confirmación...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3 relative z-10">
                        <Send className="w-5 h-5" />
                        <span>Enviar Confirmación</span>
                      </div>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Elementos decorativos flotantes */}
        <motion.div
          className="absolute top-1/4 left-8"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-5 h-5 text-rose-300 fill-rose-100" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-12"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Mail className="w-4 h-4 text-burgundy-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-12"
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Sparkles className="w-6 h-6 text-burgundy-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;