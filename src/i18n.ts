import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      heroTitle: "Best Rooftop View in Dades Valley",
      heroSubtitle: "Experience traditional and modern Moroccan cuisine with a breathtaking sunset view.",
      bookNow: "Book Now",
      whatsapp: "WhatsApp",
      whyChooseUs: "Why Choose Us",
      rooftopView: "Rooftop View",
      rooftopViewDesc: "The most stunning 360° panorama of the Dades Valley.",
      traditionalFood: "Traditional & Modern Food",
      traditionalFoodDesc: "Authentic Moroccan flavors with a contemporary twist.",
      sunsetExperience: "Sunset Experience",
      sunsetExperienceDesc: "Watch the valley turn gold from our premium rooftop.",
      friendlyService: "Friendly Service",
      friendlyServiceDesc: "Warm Moroccan hospitality that makes you feel at home.",
      menuPreview: "Menu Preview",
      viewFullMenu: "View Full Menu",
      gallery: "Gallery",
      reviews: "Customer Reviews",
      location: "Location & Map",
      getDirections: "Get Directions",
      reserveTable: "Reserve your table now",
      home: "Home",
      menu: "Menu",
      about: "About",
      contact: "Contact",
      openingHours: "Opening Hours",
      phone: "Phone",
      address: "Address",
      footerDesc: "A rooftop built to enjoy the beauty of Dades. Join us for an unforgettable dining experience.",
      reservationForm: {
        title: "Table Reservation",
        name: "Full Name",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        submit: "Confirm Reservation",
        success: "Reservation request sent! We will contact you soon.",
      }
    }
  },
  fr: {
    translation: {
      heroTitle: "La Meilleure Vue sur le Toit de la Vallée du Dadès",
      heroSubtitle: "Découvrez une cuisine marocaine traditionnelle et moderne avec une vue imprenable sur le coucher du soleil.",
      bookNow: "Réserver",
      whatsapp: "WhatsApp",
      whyChooseUs: "Pourquoi nous choisir",
      rooftopView: "Vue sur le Toit",
      rooftopViewDesc: "Le panorama à 360° le plus époustouflant de la vallée du Dadès.",
      traditionalFood: "Cuisine Traditionnelle et Moderne",
      traditionalFoodDesc: "Des saveurs marocaines authentiques avec une touche contemporaine.",
      sunsetExperience: "Expérience du Coucher du Soleil",
      sunsetExperienceDesc: "Regardez la vallée devenir dorée depuis notre toit premium.",
      friendlyService: "Service Amical",
      friendlyServiceDesc: "L'hospitalité marocaine chaleureuse qui vous fait vous sentir chez vous.",
      menuPreview: "Aperçu du Menu",
      viewFullMenu: "Voir le Menu Complet",
      gallery: "Galerie",
      reviews: "Avis Clients",
      location: "Emplacement et Carte",
      getDirections: "Obtenir l'itinéraire",
      reserveTable: "Réservez votre table maintenant",
      home: "Accueil",
      menu: "Menu",
      about: "À Propos",
      contact: "Contact",
      openingHours: "Horaires d'ouverture",
      phone: "Téléphone",
      address: "Adresse",
      footerDesc: "Un toit construit pour profiter de la beauté du Dadès. Rejoignez-nous pour une expérience culinaire inoubliable.",
      reservationForm: {
        title: "Réservation de Table",
        name: "Nom Complet",
        phone: "Numéro de Téléphone",
        date: "Date",
        time: "Heure",
        guests: "Nombre de Personnes",
        submit: "Confirmer la Réservation",
        success: "Demande de réservation envoyée ! Nous vous contacterons bientôt.",
      }
    }
  },
  ar: {
    translation: {
      heroTitle: "أفضل إطلالة من السطح في وادي دادس",
      heroSubtitle: "استمتع بالمأكولات المغربية التقليدية والحديثة مع إطلالة خلابة على غروب الشمس.",
      bookNow: "احجز الآن",
      whatsapp: "واتساب",
      whyChooseUs: "لماذا تختارنا",
      rooftopView: "إطلالة من السطح",
      rooftopViewDesc: "أروع بانوراما 360 درجة لوادي دادس.",
      traditionalFood: "طعام تقليدي وحديث",
      traditionalFoodDesc: "نكهات مغربية أصيلة بلمسة عصرية.",
      sunsetExperience: "تجربة غروب الشمس",
      sunsetExperienceDesc: "شاهد الوادي يتحول إلى اللون الذهبي من سطحنا المميز.",
      friendlyService: "خدمة ودودة",
      friendlyServiceDesc: "ضيافة مغربية دافئة تجعلك تشعر وكأنك في بيتك.",
      menuPreview: "معاينة القائمة",
      viewFullMenu: "عرض القائمة الكاملة",
      gallery: "المعرض",
      reviews: "آراء العملاء",
      location: "الموقع والخريطة",
      getDirections: "الحصول على الاتجاهات",
      reserveTable: "احجز طاولتك الآن",
      home: "الرئيسية",
      menu: "القائمة",
      about: "حولنا",
      contact: "اتصل بنا",
      openingHours: "ساعات العمل",
      phone: "الهاتف",
      address: "العنوان",
      footerDesc: "سطح بني للاستمتاع بجمال دادس. انضم إلينا لتجربة طعام لا تُنسى.",
      reservationForm: {
        title: "حجز طاولة",
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        date: "التاريخ",
        time: "الوقت",
        guests: "عدد الأشخاص",
        submit: "تأكيد الحجز",
        success: "تم إرسال طلب الحجز! سنتصل بك قريباً.",
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
