import React, { Fragment, useEffect } from "react"
import { Link, navigate } from "gatsby"

const RelatedBlogPage = ({ data }) => {
  const { title, image } = data.contentfulRelatedBlog

  // allows to close the page with the escape key. A little feature I wanted to play with.
  const backToHomePage = "/"
  const handleKeyup = ({ key }) => {
    console.log(key)
    return key === "Escape" ? navigate(backToHomePage) : null
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyup, false)
    return () => document.removeEventListener("keyup", handleKeyup, false)
  }, [handleKeyup])

  return (
    <Fragment>
      <div>
        Page Related Blog: <b>{title}</b>
      </div>
      <br />
      <img alt={title} src={image.file.url} />
      <br />
      <Link to="/">Back to home page</Link>
    </Fragment>
  )
}

export default RelatedBlogPage

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulRelatedBlog(slug: { eq: $slug }) {
      title
      image {
        file {
          url
        }
      }
    }
  }
`
