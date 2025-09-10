import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Ceremonia', href: '#ceremony' },
    { name: 'Recepción', href: '#reception' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const scrollToSection = (sectionId) => {
    console.log(`Navegando a sección: ${sectionId}`);
    
    // Cerrar el menú primero
    setIsMenuOpen(false);
    
    // Pequeño delay para que el menú se cierre antes de hacer scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      console.log(`Elemento encontrado:`, element);
      
      if (element) {
        // Calcular la posición considerando el header fijo
        const headerHeight = 80; // Altura aproximada del header
        const elementPosition = element.offsetTop - headerHeight;
        
        console.log(`Posición calculada: ${elementPosition}`);
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Elemento con ID "${sectionId}" no encontrado`);
      }
    }, 100);
  };

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 md:px-8 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white font-fraunces font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider">
            M & C
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className="text-blue-200 hover:text-cyan-300 transition-colors duration-300 font-poppins font-medium"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20 overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace('#', ''))}
              className="block text-blue-200 hover:text-cyan-300 transition-colors duration-300 font-poppins font-medium py-2 w-full text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                x: isMenuOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMenuOpen ? index * 0.1 : 0 
              }}
              whileHover={{ x: 10 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
