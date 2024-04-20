import "./styles/dark.css"
import "./styles/light.css"
import { useCurrentTheme } from "../../hooks/useCurrentTheme" 
import ListNavbar from "./components/ListNavbar"

const Navbar = () => {
  const { currentTheme, setTheme } = useCurrentTheme()
  const changeTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <div className="flex p-5 justify-between items-center">
        <div className="text-5xl font-bold">
          <span className="text-green-500 font-extrabold">G</span>
          <span className="text-blue-500 font-extrabold">M</span>
        </div>
        <div className="flex gap-5">
            <ListNavbar />
            <button onClick={() => changeTheme()}>Theme</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
