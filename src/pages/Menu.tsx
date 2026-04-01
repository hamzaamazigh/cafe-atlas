import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Utensils, Coffee, Wine, Soup } from 'lucide-react';

const menuCategories = [
  {
    id: 'starters',
    name: 'Starters',
    icon: <Soup className="w-6 h-6" />,
    items: [
      { name: 'Moroccan Harira Soup', price: '45 MAD', desc: 'Traditional lentil and tomato soup with herbs.' },
      { name: 'Chicken Pastilla', price: '85 MAD', desc: 'Sweet and savory filo pastry with chicken and almonds.' },
      { name: 'Mixed Moroccan Salads', price: '60 MAD', desc: 'A variety of fresh cooked and raw vegetable salads.' },
      { name: 'Brioates Assortment', price: '55 MAD', desc: 'Crispy filo triangles filled with cheese, meat, or vegetables.' },
    ]
  },
  {
    id: 'mains',
    name: 'Main Dishes',
    icon: <Utensils className="w-6 h-6" />,
    items: [
      { name: 'Lamb Tagine with Prunes', price: '120 MAD', desc: 'Slow-cooked lamb with caramelized prunes and almonds.' },
      { name: 'Royal Couscous', price: '110 MAD', desc: 'Fluffy semolina with seven vegetables and tender meat.' },
      { name: 'Lemon Chicken Tagine', price: '95 MAD', desc: 'Chicken with preserved lemons and green olives.' },
      { name: 'Beef Kefta Tagine', price: '90 MAD', desc: 'Spiced meatballs in tomato sauce with poached eggs.' },
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks & Desserts',
    icon: <Coffee className="w-6 h-6" />,
    items: [
      { name: 'Mint Tea Pot', price: '30 MAD', desc: 'Authentic Moroccan green tea with fresh mint.' },
      { name: 'Fresh Orange Juice', price: '25 MAD', desc: 'Squeezed from local valley oranges.' },
      { name: 'Orange with Cinnamon', price: '40 MAD', desc: 'Sliced oranges dusted with cinnamon and orange blossom water.' },
      { name: 'Moroccan Pastries', price: '50 MAD', desc: 'A selection of traditional honey and almond cakes.' },
    ]
  }
];

export default function Menu() {
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
            {t('menu')}
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id}>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex justify-between items-start gap-4 pb-6 border-b border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-1">
                        {item.name}
                      </h3>
                      <p className="text-white/40 text-sm font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-primary font-black text-lg whitespace-nowrap">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
