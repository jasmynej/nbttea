import * as React from "react"
import Layout from "../../components/layout"
import Product from "../../components/product"
import { graphql } from 'gatsby'
// styles
import '../../styles/products.css'

// markup
const ProductsPage = ({data}) => {
  return (
      <Layout title="products | nbttea">

        <div>
          <title>products</title>
          <div className="all-products">
              {
                data.allShopifyProductImage.edges.map((item) => {
                  return (
                    
                    <Product key={item.node.productId} fullProduct={item.node}/>   
                  )
                })
              }
          </div>
          
          
        </div>
      </Layout>
      
   
  )
}

export const query = graphql `
  query allProductsQuery {
    allShopifyProductImage {
        edges {
          node {
            productId
            src
            product {
              title
              id
              priceRangeV2 {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              description
            }
          }
        }
      }
  }
`
export default ProductsPage
