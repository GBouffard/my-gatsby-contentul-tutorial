import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const RelatedBlogContent = ({ modal, closeTo, title, image }) => (
  <Fragment>
    {`This Modal is about: ${title}`}
    <img alt={title} src={image.file.url} />
    <div>{modal && <Link to={closeTo}>Close Modal</Link>}</div>
  </Fragment>
)

const RelatedBlogModal = ({ data }) => {
  const { title, image } = data.contentfulRelatedBlog
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo = "/" }) => (
        <Fragment>
          <RelatedBlogContent
            modal={modal}
            closeTo={closeTo}
            title={title}
            image={image}
          />
          <Link to="/">Go back to the homepage</Link>
        </Fragment>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default RelatedBlogModal

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
