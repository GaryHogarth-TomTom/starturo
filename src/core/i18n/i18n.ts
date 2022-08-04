import * as Localization from 'expo-localization';

export const i18nConfig = {
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: require('./translations/en.json'),
    },
    es: {
      translation: require('./translations/es.json'),
    },
  },
  lng: Localization.locale,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
};

export const SUPPORTED_LANGUAGES = Object.keys(i18nConfig.resources);
