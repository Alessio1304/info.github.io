import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationIT from './locales/it.json';
import translationEN from './locales/en.json';

// Get default language from localStorage or default to 'it'
const savedLanguage = localStorage.getItem('app-language') || 'it';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      it: {
        translation: translationIT,
      },
    },
    lng: savedLanguage, 
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

// Save language changes to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('app-language', lng);
});

export default i18n;
