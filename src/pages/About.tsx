import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Heart, Users, Map, Award } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            {t('about')}
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-surface shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
                alt="Our Story"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-3xl shadow-2xl hidden md:block max-w-xs">
              <p className="text-background font-black text-2xl tracking-tight">
                "A rooftop built to enjoy the beauty of Dades..."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-black text-white tracking-tight">Our Story</h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Founded in the heart of Boumalne Dades, Dades Rooftop was born from a passion for Moroccan hospitality and the breathtaking landscapes of the Dades Valley. 
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              We believe that dining is not just about food, but about the experience. That's why we built our restaurant on the highest point, offering a 360-degree view of the valley, the mountains, and the legendary sunset.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-primary">10+</h4>
                <p className="text-white/40 font-bold uppercase text-xs tracking-widest">Years of Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-primary">50k+</h4>
                <p className="text-white/40 font-bold uppercase text-xs tracking-widest">Happy Guests</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Heart size={32} />, title: 'Passion', desc: 'We love what we do and it shows in every dish.' },
            { icon: <Users size={32} />, title: 'Community', desc: 'Supporting local farmers and artisans.' },
            { icon: <Map size={32} />, title: 'Adventure', desc: 'The perfect stop for valley explorers.' },
            { icon: <Award size={32} />, title: 'Quality', desc: 'Only the freshest local ingredients.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-10 rounded-3xl border border-white/5 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/40 font-medium text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
