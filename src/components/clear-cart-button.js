import React from "react"
import styled from "styled-components"

const ClearCartStyleButton = styled.button`
  display: flex;
  color: ${props => (props.disabled ? "grey" : "white")};
  background: ${props => (props.disabled ? "lightgrey" : "darkcyan")};
  padding: 12px 40px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`

const ClearCartButton = ({ clearCart, hasItemsInCart }) => (
  <ClearCartStyleButton onClick={() => clearCart()} disabled={!hasItemsInCart}>
    CLEAR CART
  </ClearCartStyleButton>
)

export default ClearCartButton
