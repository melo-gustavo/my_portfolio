import { useCurrentTheme } from "../../../hooks/useCurrentTheme"
import { Link } from "react-router-dom"

const ListNavbar = () => {
  const { currentTheme } = useCurrentTheme()

  return (
    <ul className="flex gap-5">
      <li
        className={
          currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/"}>Home</Link>
      </li>
      <li
        className={
          currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/about"}>About</Link>
      </li>
      <li
        className={
          currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  )
}

export default ListNavbar
