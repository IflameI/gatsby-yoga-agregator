import * as React from "react"
import HeaderMenu from "./headerMenu"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">Yoga</div>
          <div className="menu__icon icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <HeaderMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
