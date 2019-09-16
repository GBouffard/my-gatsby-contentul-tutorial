import React from "react"
import containerStyles from "./css-container.module.css"

// this is a <Container> wrapper component with default styles applied to them
export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
