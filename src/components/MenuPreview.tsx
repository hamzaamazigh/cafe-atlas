import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Traditional Lamb Tagine',
    price: '120 MAD',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&q=80&w=600',
    category: 'Main Dish',
  },
  {
    id: 2,
    name: 'Royal Couscous',
    price: '110 MAD',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    category: 'Main Dish',
  },
  {
    id: 3,
    name: 'Moroccan Harira Soup',
    price: '45 MAD',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600',
    category: 'Starter',
  },
  {
    id: 4,
    name: 'Chicken Pastilla',
    price: '85 MAD',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=600',
    category: 'Starter',
  },
];

export default function MenuPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
            >
              {t('menuPreview')}
            </motion.h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <Link
            to="/menu"
            className="group flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors"
          >
            {t('viewFullMenu')}
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-3xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-primary text-background px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
