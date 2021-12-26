import React from "react";
import Client from 'shopify-buy';
export default function ShopBuyTest(){
    const client = Client.buildClient(
        {
            domain:"nothing-but-the-tea.myshopify.com",
            storefrontAccessToken:"9c039cf853263f7eeda9dcd05f8874d6"
        }
    )

    client.checkout.create().then((checkout) => {
        // Do something with the checkout
        console.log(checkout);
      });
    return(
        <div>
            <h1>test</h1>
        </div>
    )
}