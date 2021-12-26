import React, {useEffect, useState} from "react"
import Client from "shopify-buy"


const client = Client.buildClient(
    {
        domain:"nothing-but-the-tea.myshopify.com",
        storefrontAccessToken:"9c039cf853263f7eeda9dcd05f8874d6"
    }
)
const defaultValues = {
    cart: [],
    isOpen: false,
    loading: false,
    onOpen: () => {},
    onClose: () => {},
    addVariantToCart: () => {},
    removeLineItem: () => {},
    updateLineItem: () => {},
    checkout: {
      lineItems: [],
    },
  }

export const StoreContext = React.createContext(defaultValues)
const isBrowser = typeof window !== `undefined`
const localStorageKey = `shopify_checkout_id`
export const StoreProvider = ({children}) => {
      const [checkout, setCheckout] = useState(defaultValues.checkout)
      const [loading,setLoading] = useState(false)

      const setCheckoutItem = (checkout) => {
        if (isBrowser) {
          localStorage.setItem(localStorageKey, checkout.id)
        }
    
        setCheckout(checkout)
      }
      const initializeCheckout = async () => {
        const existingCheckoutID = isBrowser
          ? localStorage.getItem(localStorageKey)
          : null
  
        if (existingCheckoutID && existingCheckoutID !== `null`) {
          try {
            const existingCheckout = await client.checkout.fetch(
              existingCheckoutID
            )
            if (!existingCheckout.completedAt) {
              setCheckoutItem(existingCheckout)
              return
            }
          } catch (e) {
            localStorage.setItem(localStorageKey, null)
          }
        }
  
        const newCheckout = await client.checkout.create()
        setCheckoutItem(newCheckout)
      }
      useEffect(() => {
        //set up checkout
        initializeCheckout()
      },[])

      const addVariantToCart = (variantId, quanity) => {
        const checkoutID = checkout.id

      }

}