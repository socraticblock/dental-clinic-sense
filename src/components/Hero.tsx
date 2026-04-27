'use client';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';


const Hero: FC = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-48 pb-32 overflow-hidden bg-primary min-h-[90vh] flex items-center">
      <div className="container flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Main Headline (H1) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-secondary font-serif italic font-bold">
            {t('quote')}
          </h1>
          
          {/* Attribution */}
          <p className="text-secondary tracking-[0.4em] uppercase text-sm md:text-base font-medium mb-16 opacity-80">
            {t('attribution')}
          </p>
          
          {/* Supporting Text */}
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-xl md:text-3xl text-white font-bold mb-6 uppercase tracking-tight">
              {t('secondaryHeadline')}
            </h2>
            <p className="text-lg text-white leading-relaxed max-w-xl mx-auto opacity-90">
              {t('description')}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <button className="bg-secondary text-primary-dark px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-secondary/20">
              {t('cta')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Luxury Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-10 rounded-l-[200px] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 -z-10 rounded-r-[200px] blur-3xl"></div>
    </section>
  );
};

export default Hero;
