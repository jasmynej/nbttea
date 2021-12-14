import React, {useState} from "react"
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


}