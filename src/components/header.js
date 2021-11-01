import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="header__row">
        <div className="header__logo">Yoga</div>
        <div className="menu__icon icon-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="header__menu menu">
          <div className="menu__body">
            <ul className="menu__list">
              <li>
                <a href="" className="menu__link">
                  Москва
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  Санкт-Петербург
                </a>
              </li>
              <li>
                <a href="" className="menu__link">
                  Казань
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
