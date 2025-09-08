import { motion } from 'framer-motion';
import RSVPForm from './RSVPForm';
import { Heart, Mail, Sparkles } from 'lucide-react';

const RSVP = () => {


  return (
    <section id="rsvp" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-100/40 to-burgundy-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-bl from-burgundy-100/30 to-wine-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-rose-100/35 to-burgundy-100/35 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-tl from-wine-100/40 to-rose-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fraunces font-bold text-burgundy-800 mb-6 sm:mb-8 tracking-tight relative inline-block drop-shadow-[0_0_8px_rgba(139,69,19,0.15)]">
            <span className="relative z-10 bg-gradient-to-r from-burgundy-800 via-rose-600 to-burgundy-800 bg-clip-text text-transparent">Confirma tu Asistencia</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-rose/15 via-burgundy-300/15 to-rose/15 blur-sm opacity-40 rounded-lg"></div>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-poppins text-burgundy-600 max-w-2xl mx-auto leading-relaxed">
            Por favor, confirma tu asistencia antes del 1 de noviembre. 
            Tu presencia es muy importante para nosotros.
          </p>
        </motion.div>

        <RSVPForm />

      </div>
    </section>
  );
};

export default RSVP;