import React, { Fragment } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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
    <h2 style={noMargins}>
      <Link to="/" style={linkStyle}>
        {siteTitle}
      </Link>
    </h2>
    <h5 style={noMargins}>Styled header</h5>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
