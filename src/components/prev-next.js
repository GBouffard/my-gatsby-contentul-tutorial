import React from "react"
import { Link } from "gatsby"

const PrevNext = ({ prev, next }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: "10px",
    }}
  >
    {prev && <Link to={prev.frontmatter.path}>Previous Markdown</Link>}
    {next && <Link to={next.frontmatter.path}>Next Markdown</Link>}
  </div>
)

export default PrevNext
