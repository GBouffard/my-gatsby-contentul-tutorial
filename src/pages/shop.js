import React from "react"

import Skus from "../components/Products/Skus"
import DirectBuyButton from "../components/direct-buy-button"
import BackToHomepage from "../components/back-to-homepage"
import GoToCartButton from "../components/go-to-cart-button"

const ShopPage = () => (
  <>
    <h1>My Shop:</h1>
    <Skus />
    Direct buy: <DirectBuyButton />
    <GoToCartButton />
    <BackToHomepage />
  </>
)
export default ShopPage
