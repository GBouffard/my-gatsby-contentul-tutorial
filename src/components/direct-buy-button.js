import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font-size: 13px;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 178, 56);
  border-radius: 6px;
  letter-spacing: 1.5px;
`

const DirectBuyButton = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)
  }

  async redirectToCheckout(event) {
    event.preventDefault()

    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FuBBYL1EB4qnka", quantity: 1 }], // sku of my book
      successUrl: `http://localhost:8000/checkout-success/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    return (
      <StyledButton onClick={event => this.redirectToCheckout(event)}>
        BUY MY FAKE BOOK
      </StyledButton>
    )
  }
}
export default DirectBuyButton
