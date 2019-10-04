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
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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

const StyledAddRemoveButton = styled(DirectBuyButton)`
  letter-spacing: normal;
  margin: 5px 0;
`

const StyledAddButton = styled(StyledAddRemoveButton)`
  color: darkgoldenrod;
  background: lightyellow;
`

const StyledRemoveButton = styled(StyledAddRemoveButton)`
  color: ${({ disabled }) => (disabled ? "grey" : "darkred")};
  background: ${({ disabled }) => (disabled ? "lightgrey" : "lightpink")};
`

const StyledRemoveAllButton = styled(StyledAddRemoveButton)`
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  background: ${({ disabled }) => (disabled ? "lightgrey" : "black")};
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

const SkuCard = ({ cart, sku, stripe, addItem, removeItem, removeAllItem }) => {
  const { id, image, attributes, price, currency } = sku
  const isCartpage = !!cart

  const getItemFromCart = () => cart && cart.find(item => item.sku === sku.id)
  const item = getItemFromCart()
  const itemQuantity = (item && item.quantity) || 0

  // the buttons logic is a bit mad but in case we want such options it works.
  const [addButtonText, setAddButtonText] = useState("ADD ITEM")
  const [removeButtonText, setRemoveButtonText] = useState("REMOVE ITEM")
  const [removeAllButtonText, setRemoveAllButtonText] = useState("REMOVE ALL")

  useEffect(() => {
    if (itemQuantity === 0 && removeButtonText !== "-1") {
      setRemoveButtonText("REMOVE ITEM")
    }

    if (addButtonText !== "+1") {
      const updatedItem = getItemFromCart()
      const hasStillItemsInCart = updatedItem && !!updatedItem.quantity
      setAddButtonText(`ADD ${hasStillItemsInCart ? "ANOTHER" : "ITEM"}`)
    }
  })

  const updateAddButtonState = () => {
    setAddButtonText("ADD ANOTHER")
  }

  const addToCart = (event, skuId) => {
    event.preventDefault()
    setAddButtonText("+1")
    addItem(skuId)
    setTimeout(updateAddButtonState, 500)
  }

  const updateBothButtonState = () => {
    const updatedItem = getItemFromCart()
    const hasStillItemsInCart = updatedItem && !!updatedItem.quantity
    setRemoveButtonText(`REMOVE ${hasStillItemsInCart ? "ANOTHER" : "ITEM"}`)
    setAddButtonText(`ADD ${hasStillItemsInCart ? "ANOTHER" : "ITEM"}`)
  }

  const removeFromCart = (event, skuId) => {
    event.preventDefault()
    setRemoveButtonText("-1")
    removeItem(skuId)
    setTimeout(updateBothButtonState, 500)
  }

  const updateRemoveAllButtonState = () => {
    setRemoveAllButtonText("REMOVE ALL")
  }

  const removeAllFromCart = (event, skuId) => {
    event.preventDefault()
    const updatedItem = getItemFromCart()
    const removedQuantity = updatedItem && updatedItem.quantity
    setRemoveAllButtonText(`-${removedQuantity}`)
    removeAllItem(skuId)
    setTimeout(updateRemoveAllButtonState, 500)
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

          <StyledAddButton onClick={event => addToCart(event, sku.id)}>
            {addButtonText}
          </StyledAddButton>

          <StyledRemoveButton
            onClick={event => removeFromCart(event, sku.id)}
            disabled={itemQuantity <= 0}
          >
            {removeButtonText}
          </StyledRemoveButton>

          <StyledRemoveAllButton
            onClick={event => removeAllFromCart(event, sku.id)}
            disabled={itemQuantity <= 0}
          >
            {removeAllButtonText}
          </StyledRemoveAllButton>
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
