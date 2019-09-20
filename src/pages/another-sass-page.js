import React, { Fragment } from "react"

import BackToHomepage from "../components/backToHomepage"
import myStyles from "../styles/myOtherSassPage.module.scss"

const ASassPage = () => (
  <Fragment>
    <div className={myStyles.container}>
      <div>
        <h2>This page is also styled but let's see if this clashes!</h2>
      </div>

      <p>
        The purpose of this page is to test that SCSS modules styles do not
        clash on import despite the fact that they have the same names.
      </p>
    </div>

    <p
      className={myStyles.paragraph}
    >{`🎉 YAY! Using a SCSS module with different names DOES NOT clash with the previous page! 🎉`}</p>
    <BackToHomepage />
  </Fragment>
)

export default ASassPage
