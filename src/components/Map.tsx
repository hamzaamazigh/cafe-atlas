import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function Map() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
          >
            {t('location')}
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">{t('address')}</h4>
                <p className="text-white/60 font-medium">Rooftop Dades, Boumalne Dades, Morocco</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">{t('openingHours')}</h4>
                <p className="text-white/60 font-medium">11:00 AM - 11:00 PM (Daily)</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">{t('phone')}</h4>
                <p className="text-white/60 font-medium">+212 6 00 00 00 00</p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-background px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
            >
              <Navigation size={20} />
              {t('getDirections')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            {/* Placeholder for actual map - using an image or iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.31562304856!2d-5.986666!3d31.366666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIyJzAwLjAiTiA1wrA1OScwMC4wIlc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert contrast-125 opacity-80"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
