import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'fr', name: 'FR' },
  { code: 'ar', name: 'AR' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('menu'), path: '/menu' },
    { name: t('gallery'), path: '/gallery' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-primary">DADES</span>
          <span className="text-white">ROOFTOP</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-2 ml-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  'text-xs px-2 py-1 rounded transition-colors',
                  i18n.language === lang.code ? 'bg-primary text-background font-bold' : 'text-white/60 hover:text-white'
                )}
              >
                {lang.name}
              </button>
            ))}
          </div>
          
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary-dark text-background px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            {t('bookNow')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.path ? 'text-primary' : 'text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4 py-4 border-t border-white/10">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={cn(
                      'px-4 py-2 rounded text-sm',
                      i18n.language === lang.code ? 'bg-primary text-background font-bold' : 'bg-white/5 text-white'
                    )}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-background text-center py-3 rounded-xl font-bold mt-2"
              >
                {t('bookNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
