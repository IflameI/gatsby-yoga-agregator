import * as React from "react"
import PropTypes from "prop-types"

import Header from "./Header/Header"
import "../styles/app.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
