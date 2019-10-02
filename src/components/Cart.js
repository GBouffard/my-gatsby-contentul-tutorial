import React from "react"

import Skus from "../components/Products/Skus"
import CheckoutButton from "./checkout-button"
import BackToHomepage from "../components/back-to-homepage"

const Cart = class extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    const existingCart = JSON.parse(localStorage.getItem("cart_items"))
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
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

  render() {
    return (
      <div>
        {React.cloneElement(<Skus />, {
          addToCart: this.addToCart.bind(this),
          cart: this.state.cart,
        })}
        <CheckoutButton cart={this.state.cart} />
        <BackToHomepage />
      </div>
    )
  }
}

export default Cart
