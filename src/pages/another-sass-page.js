import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import BackToHomepage from "../components/backToHomepage"
import myStyles from "../styles/myOtherSassPage.module.scss"

/* Not adding more images animations but found some cool ones here:
  https://codepen.io/maheshambure21/pen/bNXXeM
  http://jsfiddle.net/Ramachandra/a3tncj0t/
  https://codepen.io/shubhamc_007/pen/MbErKp
*/

const ASassPage = ({ data }) => (
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
    <p>
      These are Gatsby images using tracedSVG, using a 5 seconds duration fade
      in to see it:
    </p>
    {/* fading duration is set up to 500ms by default */}
    {/* Set a colored background placeholder */}
    <Img
      className={myStyles.imageOne}
      durationFadeIn={5000}
      backgroundColor="red"
      fixed={data.imageOne.childImageSharp.fixed}
    />

    <div className={myStyles.imageTwoContainer}>
      <Img
        className={myStyles.imageTwo}
        durationFadeIn={5000}
        fixed={data.imageTwo.childImageSharp.fixed}
      />
      <div className={myStyles.imageTwoOverlay}>
        <div className={myStyles.imageTwoText}>
          Transition Adds a text, an outline and gray the background + opacity
        </div>
      </div>
    </div>

    <Img critical={false} fixed={data.imageThree.childImageSharp.fixed} />
    {/* critical=false is to opt-out of a lazy-loading behavior */}
  </Fragment>
)

export default ASassPage

export const fluidImage = graphql`
  fragment fixedImageFragment on File {
    childImageSharp {
      fixed(width: 600, height: 700) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      ...fixedImageFragment
    }
    imageTwo: file(relativePath: { eq: "two.png" }) {
      ...fixedImageFragment
    }
    imageThree: file(relativePath: { eq: "three.jpg" }) {
      ...fixedImageFragment
    }
  }
`
