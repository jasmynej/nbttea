import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// styles
import '../styles/home.css'

// markup
const IndexPage = ({data}) => {
  const products = data.allShopifyProductImage.edges
  return (
      <Layout title="home | nbttea">
        <div className="content">
            <div className="coming-soon">
              <h1>WEBSITE CURRENTLY BREWING....</h1>
            </div>
            
        </div>
      </Layout>
      
   
  )
}

export default IndexPage

export const query = graphql `
  query productImages {
    allShopifyProductImage {
      edges {
        node {
          src
          product {
            title
            id
          }
        }
      }
    }
  }
`