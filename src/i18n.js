import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          welcome: 'Hello <br/> <strong>World</strong>',

          // Header tabs
          Employment: 'Employment',
          Education: 'Education',
          'Give back': 'Give back',
          Personal: 'Personal',
        },
      },
      de: {
        translations: {
          'Welcome to React': 'Willkommen bei React und react-i18next',

          // Header tabs
          Employment: 'Beschäftigung',
          Education: 'Bildung',
          'Give back': 'Zurück geben',
          Personal: 'Persönlich',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
