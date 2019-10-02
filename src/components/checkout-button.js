import React from "react"
import styled from "styled-components"

const StyledCheckoutButton = styled.button`
  display: flex;
  color: ${props => (props.disabled ? "grey" : "palegreen")};
  background: ${props => (props.disabled ? "lightgrey" : "forestgreen")};
  padding: 12px 40px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;

  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`

const CheckoutButton = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY, {
      betas: ["checkout_beta_4"],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: this.props.cart,
      successUrl: `http://localhost:8000/checkout-success/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.error("Error:", error)
    }
  }

  render() {
    const hasItemsInCart = !!this.props.cart.length

    return (
      <StyledCheckoutButton
        onClick={event => this.redirectToCheckout(event)}
        disabled={!hasItemsInCart}
      >
        {hasItemsInCart ? "GO TO CHECKOUT" : "CART IS EMPTY"}
      </StyledCheckoutButton>
    )
  }
}

export default CheckoutButton
