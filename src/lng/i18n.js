import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import vn from "./vn.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vn: {
      translation: vn,
    },
  },
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
