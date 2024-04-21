import { useState } from "react"
import { useTranslation } from "react-i18next"

export const useCurrentLanguage = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const defaultLanguage = localStorage.getItem("i18nextLng") === "pt-BR" ? "pt" : "en"
  const handleChangeLanguage = (defaultValue: string = defaultLanguage) => {
    setCurrentLanguage(defaultValue)
    localStorage.setItem("i18nextLng", defaultValue === "pt" ? "pt-BR" : "en-US")
    changeLanguage(defaultValue)
  }

  return {t, currentLanguage, handleChangeLanguage}
}
