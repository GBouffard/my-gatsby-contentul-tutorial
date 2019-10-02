import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import SkuCard from "../../components/sku-card"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`

class Skus extends Component {
  state = {
    stripe: null,
  }

  componentDidMount() {
    const stripe = window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)
    this.setState({ stripe })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku {
              edges {
                node {
                  id
                  currency
                  price
                  image
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <StyledGrid>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard
                {...this.props}
                key={sku.id}
                sku={sku}
                stripe={this.state.stripe}
              />
            ))}
          </StyledGrid>
        )}
      />
    )
  }
}
export default Skus
