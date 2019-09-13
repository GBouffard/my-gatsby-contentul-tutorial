import React from "react"

const footerStyle = {
  position: "absolute",
  background: "yellow",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: ".5rem",
}

const Footer = () => (
  <footer style={footerStyle}>
    Guillaume's footer
    <br />
    Styled footer
  </footer>
)

export default Footer
