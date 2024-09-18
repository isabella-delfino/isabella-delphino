// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';

// Create an i18n instance
const i18n = createI18n({
  legacy: false, // Set to false to enable Composition API mode
  locale: 'en', // Set the default locale
  fallbackLocale: 'en', // Fallback locale
  messages: {
    en,
    es
  },
});

export default i18n;
