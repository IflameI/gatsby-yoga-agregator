import * as React from "react"
import HeaderItem from "./HeaderItem"

const aviableArea = [
  {
    title: "Москва",
    typeName: "msk",
  },
  {
    title: "Екатеринбург",
    typeName: "ekb",
  },
  {
    title: "Казань",
    typeName: "kz",
  },
]

const HeaderMenu = () => {
  const [activeArea, setActiveArea] = React.useState("ekb")
  return (
    <nav className="header__menu menu">
      <div className="menu__body">
        <ul className="menu__list">
          {aviableArea.map((item, index) => (
            <HeaderItem
              setActiveArea={setActiveArea}
              activeArea={activeArea}
              key={`${item.title}__${index}`}
              {...item}
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default HeaderMenu
