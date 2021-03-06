import React, { Fragment, useEffect } from "react"
import { graphql, navigate } from "gatsby"

import Image from "../components/image"
import BackToHomepage from "../components/back-to-homepage"

const RelatedBlogPage = ({ data: { contentfulRelatedBlog: relatedBlog } }) => {
  const { title, image } = relatedBlog

  // allows to close the page with the escape key. A little feature I wanted to play with.
  const backToHomePage = "/"
  const handleKeyup = ({ key }) =>
    key === "Escape" ? navigate(backToHomePage) : null

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
      <Image />
      <br />
      <BackToHomepage />
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
