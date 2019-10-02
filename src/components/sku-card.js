import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: white;
  border-radius: 6px;
  max-width: 300px;
`

const StyledName = styled.div`
  font-size: 24px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`

const StyledPrice = styled.div`
  color: mediumvioletred;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 10px;
`

const StyledButton = styled.button`
  color: darkgreen;
  background: palegreen;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  letter-spacing: 1.5px;

  &:hover {
    cursor: pointer;
  }
`

const CartStyledButton = styled(StyledButton)`
  color: darkgoldenrod;
  background: lightyellow;
`

const StyledQuantity = styled.div`
  color: rgb(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-size: 16px;
  padding: 10px;
`

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)

  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })

  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  state = {
    disabled: false,
    buttonText: "ADD TO CART",
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: "ADD ONE MORE" })
  }

  addToCart(event, skuId) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: "ADDED TO CART" })
    this.props.addToCart(skuId)
    setTimeout(this.resetButton.bind(this), 500)
  }

  async redirectToCheckout(event, skuid, quantity = 1) {
    event.preventDefault()

    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku: skuid, quantity }],
      successUrl: `http://localhost:8000/checkout-success/`,
      cancelUrl: `http://localhost:8000/shop`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    const sku = this.props.sku
    const { id, image, attributes, price, currency } = sku
    const isCartpage = !!this.props.addToCart
    const itemInCart = this.props.cart.find(el => el["sku"] === sku.id)
    const itemQuantity = (itemInCart && itemInCart["quantity"]) || 0

    return (
      <StyledCard>
        <StyledName>Item: {attributes.name}</StyledName>
        {image && <img src={image} alt={attributes.name} />}
        <StyledPrice>{`Price: ${formatPrice(price, currency)}`}</StyledPrice>

        {isCartpage ? (
          <div>
            <StyledQuantity>{`Items in cart: ${itemQuantity}`}</StyledQuantity>
            <CartStyledButton
              onClick={event => this.addToCart(event, sku.id)}
              disabled={this.state.disabled}
            >
              {this.state.buttonText}
            </CartStyledButton>
          </div>
        ) : (
          <StyledButton onClick={event => this.redirectToCheckout(event, id)}>
            DIRECT BUY
          </StyledButton>
        )}
      </StyledCard>
    )
  }
}
export default SkuCard
