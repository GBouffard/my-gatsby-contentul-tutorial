import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello World</h1>
      <p>Welcome to my first Gatsby + Contentul + Netlify tutorial</p>
      <Link to="/blogposts/">View all posts</Link>
    </div>
  </Layout>
)

export default IndexPage
