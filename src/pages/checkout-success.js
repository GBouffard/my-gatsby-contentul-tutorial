import React, { Fragment, useEffect } from "react"
import styled from "styled-components"

import BackToHomepage from "../components/back-to-homepage"

const StyledDiv = styled.div`
  white-space: pre-wrap;
`

const CheckoutSuccess = () => {
  useEffect(() => {
    localStorage.removeItem("cart_items")
  })

  return (
    <Fragment>
      <StyledDiv>{`CONGRATULATIONS!
    YOU BOUGHT THIS ITEM! 😄`}</StyledDiv>
      <BackToHomepage />
    </Fragment>
  )
}

export default CheckoutSuccess
