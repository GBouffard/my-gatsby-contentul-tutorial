import React, { useState, useEffect } from "react"
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

const DirectBuyButton = styled.button`
  color: darkgreen;
  background: palegreen;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  letter-spacing: 1.5px;

  &:hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  }
`

const StyledCartButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledQuantity = styled.div`
  color: rgb(0, 0, 0, 0.8);
  font-family: sans-serif;
  font-size: 16px;
  padding: 10px;
`

const AddToCartStyledButton = styled(DirectBuyButton)`
  color: darkgoldenrod;
  background: lightyellow;
  letter-spacing: normal;
  margin: 5px 0;
`

const RemoveFromCartStyledButton = styled(DirectBuyButton)`
  color: ${props => (props.disabled ? "grey" : "darkred")};
  background: ${props => (props.disabled ? "lightgrey" : "lightpink")};
  letter-spacing: normal;
  margin: 5px 0;
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

const SkuCard = ({ cart, sku, stripe, addItem, removeItem }) => {
  const { id, image, attributes, price, currency } = sku
  const isCartpage = !!cart

  const itemInCart = cart && cart.find(el => el["sku"] === sku.id)
  const itemQuantity = (itemInCart && itemInCart["quantity"]) || 0

  const [addDisabled, setAddDisabled] = useState(false)
  const [addButtonText, setAddButtonText] = useState("ADD ITEM")
  const [removeButtonText, setRemoveButtonText] = useState("REMOVE ITEM")

  useEffect(() => {
    if (itemQuantity > 0) {
      setAddButtonText("ADD ANOTHER")
    }
  })

  const resetRemoveButton = () => {
    setRemoveButtonText("REMOVE ANOTHER")
  }

  const resetAddButton = () => {
    setAddDisabled(false)
    setAddButtonText("ADD ANOTHER")
  }

  const addToCart = (event, skuId) => {
    event.preventDefault()
    setAddDisabled(true)
    setAddButtonText("ADDED TO CART")
    addItem(skuId)
    setTimeout(resetAddButton, 500)
  }

  const removeFromCart = (event, skuId) => {
    event.preventDefault()
    setRemoveButtonText("REMOVED FROM CART")
    removeItem(skuId)
    setTimeout(resetRemoveButton, 500)
  }

  const redirectToCheckout = async (event, skuid, quantity = 1) => {
    event.preventDefault()

    const { error } = await stripe.redirectToCheckout({
      items: [{ sku: skuid, quantity }],
      successUrl: `http://localhost:8000/checkout-success/`,
      cancelUrl: `http://localhost:8000/shop`,
    })

    if (error) {
      console.warn("Error:", error)
    }
  }

  return (
    <StyledCard>
      <StyledName>Item: {attributes.name}</StyledName>
      {image && <img src={image} alt={attributes.name} />}
      <StyledPrice>{`Price: ${formatPrice(price, currency)}`}</StyledPrice>

      {isCartpage ? (
        <StyledCartButtonsContainer>
          <StyledQuantity>{`Items in cart: ${itemQuantity}`}</StyledQuantity>
          <AddToCartStyledButton
            onClick={event => addToCart(event, sku.id)}
            disabled={addDisabled}
          >
            {addButtonText}
          </AddToCartStyledButton>
          <RemoveFromCartStyledButton
            onClick={event => removeFromCart(event, sku.id)}
            disabled={itemQuantity <= 0}
          >
            {removeButtonText}
          </RemoveFromCartStyledButton>
        </StyledCartButtonsContainer>
      ) : (
        <DirectBuyButton onClick={event => redirectToCheckout(event, id)}>
          DIRECT BUY
        </DirectBuyButton>
      )}
    </StyledCard>
  )
}

export default SkuCard
