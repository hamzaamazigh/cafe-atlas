import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Jean-Pierre',
    country: 'France',
    text: 'Une vue incroyable sur la vallée du Dadès. La nourriture était délicieuse et le service impeccable. Un incontournable !',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    country: 'UK',
    text: 'Best sunset experience in Morocco. The lamb tagine was the best I have ever had. Highly recommend the rooftop seating.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmed Al-Fassi',
    country: 'Morocco',
    text: 'مكان رائع جداً وإطلالة ساحرة. الطعام لذيذ والخدمة ممتازة. أنصح به بشدة لكل من يزور بومالن دادس.',
    rating: 5,
  },
];

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
          >
            {t('reviews')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-10 rounded-3xl border border-white/5 relative group hover:border-primary/30 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-primary/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-8 font-medium italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-white/40 text-sm">{review.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
