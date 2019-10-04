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
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.removeAllItem = this.removeAllItem.bind(this)
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

  addItem(addedItemSku) {
    let isAlreadyPresentInCart = false
    let updatedCart = this.state.cart.map(item => {
      if (addedItemSku === item.sku) {
        isAlreadyPresentInCart = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })

    if (!isAlreadyPresentInCart) {
      updatedCart = [...updatedCart, { sku: addedItemSku, quantity: 1 }]
    }

    this.setState({ cart: updatedCart })
    localStorage.setItem("cart_items", JSON.stringify(updatedCart))
  }

  removeItem(removedItemSku) {
    const updatedCart = this.state.cart
      .map(item =>
        removedItemSku === item.sku
          ? { sku: item.sku, quantity: --item.quantity }
          : item
      )
      .filter(item => item.quantity !== 0)

    this.setState({ cart: updatedCart })
    localStorage.setItem("cart_items", JSON.stringify(updatedCart))
  }

  removeAllItem(removedItemSku) {
    const updatedCart = this.state.cart.filter(
      item => removedItemSku !== item.sku
    )

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
        <Skus
          cart={this.state.cart}
          addItem={this.addItem}
          removeItem={this.removeItem}
          removeAllItem={this.removeAllItem}
        />

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
