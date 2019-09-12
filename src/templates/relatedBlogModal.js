import React, { Fragment } from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

const RelatedBlogContent = ({ modal, closeTo }) => (
  <Fragment>
    Modal Related Blog: data to come
    <div>
      {modal ? (
        <Link to={closeTo}>Close Modal</Link>
      ) : (
        <header>
          <h1>Placeholder in case this component is not a modal</h1>
        </header>
      )}
    </div>
  </Fragment>
)

const RelatedBlogModal = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo = "/" }) => (
      <Fragment>
        <RelatedBlogContent modal={modal} closeTo={closeTo} />
        <Link to="/">Go back to the homepage</Link>
      </Fragment>
    )}
  </ModalRoutingContext.Consumer>
)

export default RelatedBlogModal
