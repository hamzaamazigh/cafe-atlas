import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Reservation failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            {t('contact')}
          </motion.h1>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="bg-surface p-10 rounded-3xl border border-white/5 space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Get in Touch</h2>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{t('phone')}</h4>
                  <p className="text-white/60 font-medium">+212 6 00 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Email</h4>
                  <p className="text-white/60 font-medium">contact@dadesrooftop.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{t('address')}</h4>
                  <p className="text-white/60 font-medium">Boumalne Dades, Morocco</p>
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
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-surface p-10 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <CheckCircle2 size={80} className="text-primary mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-white mb-4">Reservation Sent!</h3>
                <p className="text-white/60 font-medium max-w-xs mx-auto">
                  {t('reservationForm.success')}
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                  {t('reservationForm.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-1">{t('reservationForm.name')}</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-1">{t('reservationForm.phone')}</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/60 ml-1">{t('reservationForm.date')}</label>
                      <input
                        required
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/60 ml-1">{t('reservationForm.time')}</label>
                      <input
                        required
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/60 ml-1">{t('reservationForm.guests')}</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                        <option key={num} value={num} className="bg-surface">
                          {num} {t('reservationForm.guests')}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-background py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mt-4"
                  >
                    <Send size={20} />
                    {t('reservationForm.submit')}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
