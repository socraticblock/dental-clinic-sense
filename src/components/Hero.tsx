'use client';
import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';


const Hero: FC = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-32 pb-32 bg-primary min-h-screen flex items-center overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* Founder Image Column - HIDDEN ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-2 border-white/10 group">
              <img 
                src="/hero.png" 
                alt="Dr. Salome Tsiskarava" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40"></div>
            </div>
          </motion.div>

          {/* Content Column - CENTERED ON MOBILE, LEFT-ALIGNED ON DESKTOP */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Main Headline (H1) */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-secondary font-serif italic font-bold">
              {t('quote')}
            </h1>
            
            {/* Attribution */}
            <p className="text-secondary tracking-[0.4em] uppercase text-[10px] md:text-sm font-medium mb-12 opacity-80">
              {t('attribution')}
            </p>
            
            {/* Supporting Text */}
            <div className="max-w-2xl mb-12 lg:border-l-2 lg:border-secondary/20 lg:pl-8">
              <h2 className="text-xl md:text-2xl text-white font-bold mb-6 uppercase tracking-tight leading-snug">
                {t('secondaryHeadline')}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed opacity-90">
                {t('description')}
              </p>
            </div>

            <div className="flex gap-4 w-full md:w-auto justify-center lg:justify-start">
              <button className="bg-secondary text-primary-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-secondary/20">
                {t('cta')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-10 rounded-l-[200px] blur-3xl hidden lg:block"></div>
    </section>
  );
};

export default Hero;
