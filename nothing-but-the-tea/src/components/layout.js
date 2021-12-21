import React, {useState} from "react"
import { Link } from "gatsby"
import {ShoppingBagIcon, UserIcon} from "@heroicons/react/outline"
import '../styles/layout.css'

export default function Layout({children}){
    const [cartItems,setCartItems] = useState(0)
    return (
        <div className="container mx-auto flex flex-col">
            <h2 className="text-center text-6xl m-2 text-amber-700">nothing but the tea</h2>
            <div id="nav">
                <div className="nav-links">
                    <div className="nav-item">
                        <Link to="/" className="link" activeClassName="active-link">home</Link>
                    </div>
                    <div className="nav-item dropdown" >
                        <button className="dropdown-btn">shop</button>
                        <div className="dropdown-content">
                        <Link to="/products" className="link" activeClassName="active-link"> all products</Link>
                        </div>
                        
                    </div>
                    <div className="nav-item">
                        <Link to="/services" className="link" activeClassName="active-link">services</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/about" className="link" activeClassName="active-link">about us</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/contact" className="link" activeClassName="active-link">contact us</Link>
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
            <div id="footer" className="text-center absolute inset-x-0 bottom-0">
                merry christmas aunt connie! 🎄❤️
            </div>
        </div>
    )
}
