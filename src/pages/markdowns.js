import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToHomepage from "../components/backToHomepage"

const MarkDowns = ({ data }) => (
  <Layout>
    <SEO title="Markdowns" />
    {data.allMarkdownRemark.edges.map(edge => (
      <Link
        to={edge.node.frontmatter.path}
        key={edge.node.frontmatter.path}
        style={{ display: "block", padding: "10px" }}
      >{`Link to ${edge.node.frontmatter.path.slice(1)}`}</Link>
    ))}
    <BackToHomepage />
  </Layout>
)

export default MarkDowns

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "markdown" } } }) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`
