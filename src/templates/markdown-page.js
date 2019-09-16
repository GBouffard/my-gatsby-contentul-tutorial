import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: markdown } = data

  return (
    <Fragment>
      <Helmet title={`My Markdown - ${markdown.frontmatter.title}`} />
      <div>
        <h1>{markdown.frontmatter.title}</h1>
        <h4>{`Date added: ${markdown.frontmatter.date}`}</h4>
        <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
        <Link to="/">Back to Homepage</Link>
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
      }
    }
  }
`
