import React, { Fragment, useEffect } from "react"
import { Link, navigate } from "gatsby"

const RelatedBlogPage = () => {
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
      <div>Page Related Blog: data to come</div>
      <Link to="/">Back to home page</Link>
    </Fragment>
  )
}

export default RelatedBlogPage
