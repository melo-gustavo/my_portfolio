import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslations from "./translate/en.json"
import ptTranslations from "./translate/pt.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enTranslations },
    pt: { ...ptTranslations },
  },
  lng: localStorage.getItem("i18nextLng") === "pt-BR" ? "pt" : "en",
})
