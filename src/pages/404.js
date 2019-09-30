import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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

const fluidContainer = {
  position: "absolute",
  width: "100px",
  height: "100px",
  top: "20px",
  left: "20px",
}

// nice trick to center on display: inline-block set by default
const centerImageStyle = {
  left: "50%",
  transform: "translateX(-50%)",
}

const NotFoundPage = ({ data }) => (
  <div style={my404Container}>
    <SEO title="404: Not found" />
    <div style={myMessage}>{`Aaaaahhhh!!!
    Catastrophy!
    Page Not Found`}</div>
    <Img
      style={centerImageStyle}
      fixed={data.fixedImage.childImageSharp.fixed}
      alt={"this is my image"}
    />
    <Img
      style={centerImageStyle}
      fixed={data.tacedSVGImage.childImageSharp.fixed}
      alt={"this is my image"}
    />
    <div style={fluidContainer}>
      <Img
        style={{ overflow: "visible" }}
        fluid={data.fluidImage.childImageSharp.fluid}
      />
    </div>
    <BackToHomepage />
  </div>
)

export default NotFoundPage

// Calling the same image as fixed and fluid
export const pageQuery = graphql`
  query {
    fixedImage: file(relativePath: { eq: "sad.png" }) {
      childImageSharp {
        fixed(
          width: 250
          height: 250
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImage: file(relativePath: { eq: "sad.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tacedSVGImage: file(relativePath: { eq: "sad.png" }) {
      childImageSharp {
        fixed(
          width: 250
          height: 250
          traceSVG: { background: "#fff", color: "#663399" }
        ) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
