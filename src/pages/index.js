import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { isLoggedIn } from "../services/auth"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="home">
      <h1>Hello World</h1>
      <p>Welcome to my first Gatsby + Contentul + Netlify tutorial</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        Click to see:
        <li>
          <Link to="/blogposts">Posts made from Contentful data</Link>
        </li>
        <li>
          <Link to="/markdowns">Posts made from Markdown data</Link>
        </li>
        <li>
          <Link to="/about-css-modules">A page using CSS modules</Link>
        </li>
        <li>
          <Link to="/my-sass-page">A page using Sass</Link>
        </li>
        <li>
          <Link to="/another-sass-page">
            Another Sass page with same module names
          </Link>
        </li>
        <li>
          <Link to="/this-does-not-work">
            A link that does not exist and will redirect to my 404
          </Link>
        </li>
        <li>
          <Link to="/shop">Link to my shop page made with Stripe items</Link>
        </li>
        <li>
          {isLoggedIn() ? (
            <Link to="/secret-page">
              This is a secret page that can only be accessed if you are logged
              in.
            </Link>
          ) : (
            <span>
              This link is not accessible because you are not logged in.
            </span>
          )}
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
