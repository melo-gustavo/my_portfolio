import { Link } from "react-router-dom"
import { useCurrentLanguage } from "../../../hooks/useCurrentLanguage"

interface Props {
  currentTheme: string
}

const ListNavbar = (props: Props) => {
  const { t } = useCurrentLanguage()

  return (
    <ul className="flex gap-5">
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/"}>{t("navbar.listNavbar.home")}</Link>
      </li>
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/about"}>{t("navbar.listNavbar.about")}</Link>
      </li>
      <li
        className={
          props.currentTheme === "dark" ? "li-navbar-dark" : "li-navbar-light"
        }
      >
        <Link to={"/contact"}>{t("navbar.listNavbar.contact")}</Link>
      </li>
    </ul>
  )
}

export default ListNavbar
