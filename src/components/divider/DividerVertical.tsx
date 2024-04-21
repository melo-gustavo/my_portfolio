import "./style/dark.css"
import "./style/light.css"

interface Props {
  currentTheme: string
}

const DividerVertical = (props: Props) => {
  return (
    <>
      <div
        className={
          props.currentTheme === "dark"
            ? "divider-vertical-dark"
            : "divider-vertical-light"
        }
      ></div>
    </>
  )
}

export default DividerVertical
