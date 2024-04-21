import { useEffect } from "react"
import { useCurrentTheme } from "./hooks/useCurrentTheme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"
// import { useTranslation } from "react-i18next"
// import { useCurrentLanguage } from "./hooks/useCurrentLanguage"

const App = () => {
  const { currentTheme, setTheme } = useCurrentTheme()
  // const {
  //   t,
  //   i18n: { changeLanguage, language },
  // } = useTranslation()
  // const [currentLanguage, setCurrentLanguage] = useState(language)
  // const handleChangeLanguage = () => {
  //   const newLanguage = currentLanguage === "en" ? "pt" : "en"
  //   setCurrentLanguage(newLanguage)
  //   localStorage.setItem("i18nextLng", newLanguage === "pt" ? "pt-BR" : "en-US")
  //   changeLanguage(newLanguage)
  // }

  useEffect(() => {
    setTheme(currentTheme === "dark" ? "dark" : "light")
  }, [currentTheme, setTheme])

  return (
    <>
      <Router>
        <Navbar />
        {/* {t("specificKey")}
        <button type="button" onClick={handleChangeLanguage}>
          Change Language
        </button> */}
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
