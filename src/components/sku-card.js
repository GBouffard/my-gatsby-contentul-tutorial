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

    return (
      <StyledCard>
        <StyledName>Item: {attributes.name}</StyledName>
        {image && <img src={image} alt={attributes.name} />}
        <StyledPrice>{`Price: ${formatPrice(price, currency)}`}</StyledPrice>
        <StyledButton onClick={event => this.redirectToCheckout(event, id)}>
          BUY ME
        </StyledButton>
      </StyledCard>
    )
  }
}
export default SkuCard
