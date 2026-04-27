import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Smile, ShieldCheck, Star, Heart } from 'lucide-react';

const services = [
  { 
    title: 'Aesthetic Dentistry', 
    desc: 'Premium whitening and veneers for a flawless, confident smile.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-secondary to-[#A38240]'
  },
  { 
    title: 'Implantology', 
    desc: 'State-of-the-art dental implants to restore full function and aesthetics.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-primary to-primary-dark'
  },
  { 
    title: 'Orthodontics', 
    desc: 'Modern alignment solutions including braces and clear aligners.',
    icon: <Activity className="w-8 h-8" />,
    color: 'from-secondary to-[#A38240]'
  },
  { 
    title: 'Professional Hygiene', 
    desc: 'Deep cleaning and preventive care for optimal oral health.',
    icon: <Star className="w-8 h-8" />,
    color: 'from-primary to-primary-dark'
  },
  { 
    title: 'Restorative Dentistry', 
    desc: 'Advanced procedures to recover the natural beauty and strength of teeth.',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-secondary to-[#A38240]'
  },
  { 
    title: 'Pediatric Dentistry', 
    desc: 'Gentle, comfortable care tailored specifically for children.',
    icon: <Smile className="w-8 h-8" />,
    color: 'from-primary to-primary-dark'
  }
];

const Services: FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-12"
        >
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-2">
              Our Expertise
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Premium Dental Care Solutions
            </h2>
          </div>
          <a 
            href="#services" 
            className="mt-6 md:mt-0 px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out whitespace-nowrap font-bold"
          >
            View All Services
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden p-10 flex flex-col justify-end border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="absolute inset-0 bg-slate-50 group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-primary group-hover:text-white transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
