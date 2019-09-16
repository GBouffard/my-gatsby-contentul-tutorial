import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = ({ data }) => {
  const markdownLinks = data.allMarkdownRemark.edges.map(edge => (
    <Link
      to={edge.node.frontmatter.path}
      key={edge.node.frontmatter.path}
      style={{ display: "block", padding: "10px" }}
    >{`Link to ${edge.node.frontmatter.path.slice(1)}`}</Link>
  ))

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="home">
        <h1>Hello World</h1>
        <p>Welcome to my first Gatsby + Contentul + Netlify tutorial</p>
        <Link to="/blogposts">View all posts</Link>
        {markdownLinks}
        <Link to="/about-css-modules">A page using CSS modules</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

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
