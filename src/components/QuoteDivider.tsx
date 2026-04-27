'use client';
import { motion } from 'framer-motion';

export default function QuoteDivider() {
  return (
    <section className="w-full bg-primary py-24 px-6 md:px-12 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-relaxed mb-6">
          "A smile is the prettiest thing you can wear."
        </h2>
        <p className="text-secondary tracking-[0.2em] uppercase text-sm font-semibold">
          — Emma Stone
        </p>
      </motion.div>
    </section>
  );
}
