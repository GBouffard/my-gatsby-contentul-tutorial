import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import SkuItem from "../../components/sku-item"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
`

export default () => (
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
          <SkuItem key={sku.id} sku={sku} />
        ))}
      </StyledGrid>
    )}
  />
)
