import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PrevNext from "../components/prev-next"
import BackToHomepage from "../components/backToHomepage"
import Share from "../components/share"

export default function Template({ data, pageContext, location }) {
  const { markdownRemark: markdown } = data
  const { prev, next } = pageContext

  return (
    <Fragment>
      <Helmet title={`My Markdown - ${markdown.frontmatter.title}`} />
      <div>
        <PrevNext prev={prev && prev.node} next={next && next.node} />
        <h1>{markdown.frontmatter.title}</h1>
        <h4>{`Date added: ${markdown.frontmatter.date}`}</h4>
        <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
        <BackToHomepage />
        <br />
        <div>See below for the effect of image lazy loading:</div>
        <Img fluid={markdown.frontmatter.image.childImageSharp.fluid} />
        <Share
          title={markdown.frontmatter.title}
          pathname={location.pathname}
          // nb: location.pathname and markdown.frontmatter.path are the same.
          // Different ways of getting them.
        />
      </div>
    </Fragment>
  )
}
export const pageQuery = graphql`
  query MarkdownPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
