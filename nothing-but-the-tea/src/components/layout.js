import React, {useState} from "react"
import { Link } from "gatsby"
import {ShoppingBagIcon, UserIcon} from "@heroicons/react/outline"
import '../styles/layout.css'

export default function Layout({title,children}){
    const [cartItems,setCartItems] = useState(0)
    return (
        <div className="container mx-auto flex flex-col">
            <title>{title}</title>
            <h2 className="text-center text-6xl m-2 text-amber-700"><Link to="/" >Nothing But The Tea</Link></h2>
            <div>

            </div>
            <div id="nav">
                <div id="nav-logo">
                    
                </div>
                <div className="nav-links">
                    <div className="nav-item">
                        <Link to="/" className="link" activeClassName="active-link">home</Link>
                    </div>
                    <div className="nav-item" >
                        <Link to="/products" className="link" activeClassName="active-link">shop</Link>  
                    </div>
                    <div className="nav-item">
                        <Link to="/about" className="link" activeClassName="active-link">about</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/contact" className="link" activeClassName="active-link">contact</Link>
                    </div>
                
                </div>
                <div className="icons">
                    <span className="relative inline-block">
                        <ShoppingBagIcon className="h-6 w-6 m-4 cart-icon"/>
                        <span className="cart-count">0</span>
                        <div className="cart">
                            <div className="cart-content">
                                <p>your cart</p>
                            </div>
                        </div>
                        
                    </span>
                    
                    
                    <UserIcon className="h-6 w-6 m-4 cart-icon"/>
                </div>
                
            </div>
          
            <main className="grow">
                {children}
            </main>
           
        </div>
    )
}
