import { arTranslation } from "@/_translations/ar";
import { enTranslation } from "@/_translations/en";
import { esTranslation } from "@/_translations/es";
import { frTranslation } from "@/_translations/fr";
import { itTranslation } from "@/_translations/it";
import { zhTranslation } from "@/_translations/zh";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
    es: {
      translation: esTranslation,
    },
    fr: {
      translation: frTranslation,
    },
    it: {
      translation: itTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
  },
});

export default i18n;
