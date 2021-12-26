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