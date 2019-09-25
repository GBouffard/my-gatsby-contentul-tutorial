import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import styled from "styled-components"

import Icon from "../../src/svg-assets/x-icon.svg"
import BackToHomepage from "../components/backToHomepage"

const StyledIcon = styled(Icon)`
  float: right;
  fill: darkslategrey;

  &:hover {
    fill: grey;
  }

  &:active {
    fill: lightgrey;
  }
`

const RelatedBlogContent = ({ modal, closeTo, title, image }) => (
  <Fragment>
    {modal && (
      <Link to={closeTo}>
        <StyledIcon />
      </Link>
    )}
    <h6>{`This Modal is about: ${title}`}</h6>
    <img alt={title} src={image.file.url} />
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
          <BackToHomepage />
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
