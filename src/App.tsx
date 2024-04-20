import { useEffect } from "react"
import { useCurrentTheme } from "./hooks/useCurrentTheme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Navbar from "./components/navbar/Navbar"
import About from "./pages/about/About"

const App = () => {
  const { currentTheme, setTheme } = useCurrentTheme()

  useEffect(() => {
    setTheme(currentTheme === "dark" ? "dark" : "light")
  }, [currentTheme, setTheme])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/contact"}
            element={<Contact />}
          />
          <Route
            path={"/about"}
            element={<About />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
