import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import NavBar from "../components/nav-bar"

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "sandybrown",
  padding: "1rem",
  marginBottom: `1.5rem`,
}

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
}

const noMargins = {
  margin: "0",
}

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <div>
      <h2 style={noMargins}>
        <Link to="/" style={linkStyle}>
          {siteTitle}
        </Link>
      </h2>
      <h5 style={noMargins}>Styled header</h5>
    </div>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
