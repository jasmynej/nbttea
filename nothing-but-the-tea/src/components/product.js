import * as React from "react"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import '../styles/products.css'

export default function Product({fullProduct}){
    const image = getImage(fullProduct.src)
    return(
        <div className="product">
            <img src={fullProduct.src} className="h-60 w-60 mx-auto" />
            <h3 className="text-center">{fullProduct.product.title}</h3>
            <p>{fullProduct.product.description}</p>
            <p>{fullProduct.product.priceRangeV2.maxVariantPrice.amount}</p>
            <div class="buttons">
                <button className="add-to-cart">add to cart</button>
                <button className="view-more">view more</button>
            </div>
            
        </div>
    )
}
