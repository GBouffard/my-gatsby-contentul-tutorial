import React from "react"

import twitterIcon from "../images/twitter.png"
import fbIcon from "../images/facebook.png"

const deployUrl = "https://gbouffard-my-gatsby-contentul-tutorial.netlify.com"

const Share = ({ title, pathname }) => {
  const twitterHref = `https://twitter.com/intent/tweet?url=${deployUrl +
    pathname}&text=${title}`

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${deployUrl +
    pathname}`

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px 0 0 10px",
      }}
    >
      <strong>Share on: </strong>
      <a style={{ display: "flex" }} href={facebookHref} target="blank">
        <img src={fbIcon} alt="facebook" /> Facebook
      </a>

      <a style={{ display: "flex" }} href={twitterHref} target="blank">
        <img src={twitterIcon} alt="twitter" /> Twitter
      </a>
    </div>
  )
}

export default Share
