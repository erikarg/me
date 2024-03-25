import i18n from "i18next";
import frTranslations from "./fr.json";
import esTranslations from "./es.json";
import enTranslations from "./en.json";
import { initReactI18next } from "react-i18next";
import ptBrTranslations from "./ptBr.json";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US", "es-ES", "fr-FR"],
    debug: true,
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      ptbr: {
        translation: ptBrTranslations,
      },
    },
  });

export default i18next;
