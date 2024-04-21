import "./styles/dark.css"
import "./styles/light.css"
import { useCurrentTheme } from "../../hooks/useCurrentTheme"
import ListNavbar from "./components/ListNavbar"
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import DividerVertical from "../divider/DividerVertical"

const Navbar = () => {
  const { currentTheme, setTheme } = useCurrentTheme()

  return (
    <>
      <div className="flex p-5 justify-between items-center">
        <div className="text-5xl font-bold">
          <span className="text-green-500 font-extrabold">G</span>
          <span className="text-blue-500 font-extrabold">M</span>
        </div>
        <div className="flex gap-5 items-center">
          <ListNavbar currentTheme={currentTheme} />
          <DividerVertical currentTheme={currentTheme} />
          <>Theme: </>
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
