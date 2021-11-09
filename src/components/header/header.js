import * as React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

import HeaderMenu from "./HeaderMenu"

const Header = () => {
  const location = useLocation()
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link to="/">Yoga </Link>
          </div>
          <div className="menu__icon icon-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {location.pathname === "/" && <HeaderMenu />}
        </div>
      </div>
    </header>
  )
}

export default Header
