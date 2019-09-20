import React from "react"

import SEO from "../components/seo"
import BackToHomepage from "../components/backToHomepage"

const my404Container = {
  position: "absolute",
  height: "100%",
  width: "100%",
  background: "radial-gradient(crimson, black)",
}

const myMessage = {
  color: "mistyrose",
  margin: "50px auto",
  display: "table",
  fontSize: "3rem",
  lineHeight: "7rem",
  whiteSpace: "pre",
  textShadow: "0 0 3px #FF0000, 0 0 5px #0000FF",
}

const NotFoundPage = () => (
  <div style={my404Container}>
    <SEO title="404: Not found" />
    <div style={myMessage}>{`Aaaaahhhh!!!
    Catastrophy!
    Page Not Found`}</div>
    <BackToHomepage />
  </div>
)

export default NotFoundPage
