import React, {useState} from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
export default function ProductPage({data,pageContext}){
    
    const product = data.product
    const [selectedType,setType] = useState("")
    const [quantity,setQuantity] = useState(1)
    console.log(product.variants)
    return(
        <Layout>
            <title>{product.title} | nbttea</title>
            <Link to="/products">back to all products</Link>
        
            <div className="grid grid-cols-2 product-page">
                <div className="flex image-box">
                    
                    <img src={product.featuredImage.originalSrc} className="product-image"/>
                </div>
                <div className="product-details">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h1>{product.priceRangeV2.maxVariantPrice.amount}</h1>
                    
                    {product.variants.length > 0 && 
                        <div className="variants">
                           {product.variants.map((variant) => {
                               return (
                                   <div key={variant.productId} className="variant"> 
                                       <h4>{variant.title}</h4>
                                   </div>
                               )
                           })}
                        </div>
                    }
                    <button className="add-to-cart">add to cart</button>
                </div>
                
            </div>
        </Layout>
    )
}

export const query = graphql `
    query($id: String!) {
        product: shopifyProduct(id: {eq: $id}) {
            id
            title
            productType
            description
            variants {
                title
                productId
              }
              featuredImage {
                id
                originalSrc
              }
              priceRangeV2 {
                maxVariantPrice {
                  amount
                }
              }
        }
    }
`