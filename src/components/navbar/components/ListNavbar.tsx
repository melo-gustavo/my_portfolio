import { Link } from "react-router-dom"

interface Props {
  currentTheme: string
}

const ListNavbar = (props: Props) => {
  return (
    <ul className="flex gap-5">
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/"}>Home</Link>
      </li>
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/about"}>About</Link>
      </li>
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/contact"}>Contact</Link>
      </li>
    </ul>
  )
}

export default ListNavbar
