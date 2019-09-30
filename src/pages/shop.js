import React from "react"

import Skus from "../components/Products/Skus"
import DirectBuyButton from "../components/direct-buy-button"
import BackToHomepage from "../components/backToHomepage"

const ShopPage = () => (
  <>
    <h1>My Shop:</h1>
    <Skus />
    Direct buy: <DirectBuyButton />
    <BackToHomepage />
  </>
)
export default ShopPage
