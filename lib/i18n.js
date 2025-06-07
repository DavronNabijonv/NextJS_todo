import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// JSON fayllarni import qilamiz
import en from '../messages/en.json';
import uz from '../messages/uz.json';
import de from '../messages/ru.json';

i18n.use(initReactI18next).init({
  lng: 'en', // boshlang‘ich til
  fallbackLng: 'en',
  supportedLngs: ['en', 'uz', 'ru'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    uz: { translation: uz },
    de: { translation: de },
  },
});

export default i18n;
