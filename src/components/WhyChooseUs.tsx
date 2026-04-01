import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mountain, Utensils, Sunset, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Mountain className="w-12 h-12 text-primary" />,
      title: t('rooftopView'),
      description: t('rooftopViewDesc'),
    },
    {
      icon: <Utensils className="w-12 h-12 text-primary" />,
      title: t('traditionalFood'),
      description: t('traditionalFoodDesc'),
    },
    {
      icon: <Sunset className="w-12 h-12 text-primary" />,
      title: t('sunsetExperience'),
      description: t('sunsetExperienceDesc'),
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: t('friendlyService'),
      description: t('friendlyServiceDesc'),
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
          >
            {t('whyChooseUs')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-10 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
