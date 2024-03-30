import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import * as English from "./locales/en/translation.json";
import * as Portuguese from "./locales/ptBr/translation.json";
import * as French from "./locales/fr/translation.json";
import * as Spanish from "./locales/es/translation.json";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ptBr",
    resources: {
      en: {
        translation: English,
      },
      es: {
        translation: Spanish,
      },
      ptBr: {
        translation: Portuguese,
      },
      fr: {
        translation: French,
      },
    },
    keySeparator: false,
    nsSeparator: false,
  });

export default i18n;
