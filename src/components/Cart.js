import React, { Fragment } from "react"
import styled from "styled-components"

import Skus from "../components/Products/Skus"
import CheckoutButton from "./checkout-button"
import ClearCartButton from "./clear-cart-button"
import BackToHomepage from "../components/back-to-homepage"

const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px;
`

const Cart = class extends React.Component {
  constructor() {
    super()
    this.addToCart = this.addToCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.state = {
      cart: [],
    }
  }

  componentDidMount() {
    const existingCart = JSON.parse(localStorage.getItem("cart_items"))
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })

    localStorage.setItem("cart_items", JSON.stringify(updatedCart))
  }

  clearCart() {
    localStorage.removeItem("cart_items")
    this.setState({ cart: [] })
  }

  render() {
    return (
      <Fragment>
        {React.cloneElement(<Skus />, {
          addToCart: this.addToCart,
          cart: this.state.cart,
        })}
        <StyledButtonsContainer>
          <CheckoutButton cart={this.state.cart} />
          <ClearCartButton
            clearCart={this.clearCart}
            hasItemsInCart={!!this.state.cart.length}
          />
        </StyledButtonsContainer>
        <BackToHomepage />
      </Fragment>
    )
  }
}

export default Cart
