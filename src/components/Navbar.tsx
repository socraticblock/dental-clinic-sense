'use client';
import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';


const Navbar: FC = () => {
  const t = useTranslations('Navbar');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: (isScrolled || isMobile) ? 0 : -100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl py-4 shadow-sm"
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logo.jpg" alt={t('brandName')} className="h-12 w-auto mix-blend-multiply" />
          <span className="text-2xl font-bold font-serif tracking-tight text-primary">{t('brandName')}</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 font-medium text-primary">
          {['home', 'about', 'services', 'doctors', 'faq'].map((key) => (
            <a key={key} href={`#${key}`} className="hover:text-secondary transition-colors text-sm uppercase tracking-widest">
              {t(`links.${key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <LanguageSwitcher />
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
            {t('bookButton')}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
