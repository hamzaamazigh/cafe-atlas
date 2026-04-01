import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black tracking-tighter flex items-center gap-2">
              <span className="text-primary">DADES</span>
              <span className="text-white">ROOFTOP</span>
            </Link>
            <p className="text-white/60 leading-relaxed font-medium">
              {t('footerDesc')}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">{t('home')}</h4>
            <ul className="space-y-4">
              {[t('home'), t('menu'), t('gallery'), t('about'), t('contact')].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link === t('home') ? '/' : `/${link.toLowerCase()}`}
                    className="text-white/60 hover:text-primary transition-colors font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">{t('contact')}</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-white/60 font-medium group">
                <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span>+212 6 00 00 00 00</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 font-medium group">
                <Mail size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span>contact@dadesrooftop.com</span>
              </li>
              <li className="flex items-center gap-4 text-white/60 font-medium group">
                <MapPin size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span>Boumalne Dades, Morocco</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Newsletter</h4>
            <p className="text-white/60 mb-6 font-medium">
              Subscribe to get special offers and sunset events.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-background border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary-dark text-background px-6 py-3 rounded-xl font-bold transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Dades Rooftop Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
