import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Building2, Microscope, Wand2 } from 'lucide-react';

const About: FC = () => {
  return (
    <section id="about" className="py-32 bg-azure/30 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl bg-white flex items-center justify-center text-secondary/10">
              <Building2 size={300} strokeWidth={0.5} />
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[32px] shadow-2xl border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-5xl font-serif font-bold text-secondary">5.0</p>
                <div className="flex text-secondary text-2xl">★★★★★</div>
              </div>
              <p className="text-primary font-black uppercase tracking-widest text-[10px]">Based on 22 Google Reviews</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-serif text-primary">Strengthening <br /><span className="italic text-secondary">Your Confidence</span></h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              Our core philosophy is an individual approach to every patient. We focus on both 
              the aesthetic beauty and the fundamental health of your smile, ensuring a 
              comfortable, anxiety-free treatment environment that empowers you.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">
                  <Microscope className="w-8 h-8" />
                </div>
                <p className="font-black text-primary uppercase tracking-widest text-xs">Digital Imaging</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">
                  <Wand2 className="w-8 h-8" />
                </div>
                <p className="font-black text-primary uppercase tracking-widest text-xs">Painless Care</p>
              </div>
            </div>

            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Discover Our Method
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
