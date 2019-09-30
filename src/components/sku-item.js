import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border: 5px inset grey;
  padding: 10px;
  margin: 20px 10px;
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

const SkuItem = ({ sku: { image, attributes, price, currency } }) => {
  const priceString = price.toString()
  const pl = priceString.length
  const units = priceString.substr(0, pl - 2) || "0"
  const decimals = priceString.substr(pl - 2, pl)

  return (
    <StyledContainer>
      <StyledName>Item: {attributes.name}</StyledName>
      {image && <img src={image} alt={attributes.name} />}
      <StyledPrice>{`Price: ${units}.${decimals} ${currency.toUpperCase()}`}</StyledPrice>
    </StyledContainer>
  )
}

export default SkuItem
