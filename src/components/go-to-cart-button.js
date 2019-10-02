import React from "react"
import { navigateTo } from "gatsby"
import styled from "styled-components"

const CartStyledButton = styled.button`
  background: rebeccapurple;
  color: lightcyan;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 50px;
  cursor: pointer;
  border: 5px solid mediumpurple;

  &:hover {
    background: mediumpurple;
    border-color: lightpink;
  }
`

const GoToCartButton = () => (
  <CartStyledButton onClick={() => navigateTo("/cart")}>
    Go To Cart
  </CartStyledButton>
)

export default GoToCartButton
