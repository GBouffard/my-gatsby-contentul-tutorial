import React, { Fragment } from "react"
import { Link } from "gatsby"

import Container from "../components/css-container"

export default () => (
  <Fragment>
    <Container>
      <h1>A page about CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
    <Link to="/">Back to home page</Link>
  </Fragment>
)
