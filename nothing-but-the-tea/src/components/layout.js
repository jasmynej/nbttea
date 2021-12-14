import React from "react"
import { Link } from "gatsby"
import '../styles/layout.css'
export default function Layout({children}){
    return (
        <div className="container mx-auto flex flex-col">
            <h2 className="text-center text-6xl m-2 text-amber-700">nothing but the tea</h2>
            <div id="nav">
                <div className="nav-item">
                    <Link to="/" className="link" activeClassName="active-link">home</Link>
                </div>
                <div className="nav-item">
                    <Link to="/products" className="link" activeClassName="active-link">products</Link>
                </div>
                <div className="nav-item">
                    <Link to="/about" className="link" activeClassName="active-link">about us</Link>
                </div>
                <div className="nav-item">
                    <Link to="/services" className="link" activeClassName="active-link">services</Link>
                </div>
                <div className="nav-item">
                    <Link to="/contact" className="link" activeClassName="active-link">contact us</Link>
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