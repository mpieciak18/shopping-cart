import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js"
import { useState } from 'react'

const Shop = (props) => {
    const { products, cart, updateCart, overflow } = props

    const [overflow, setOverflow] = useState('visible')

    let ShopContents
    ShopContents = (
        <div id='shop-contents' class='page-contents'>
            <div id='products-container'>
                {products.map((product) => {
                    return (
                        <Product 
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            image={product.image}
                            updateCart={updateCart}
                        />
                    )
                })}
            </div>
        </div>
    )

    return (
        <div id='shop' class='page' style={overflowY: {overflow}}>
            <Header cart={cart} updateCart={updateCart} overflow={overflow} setOverflow={setOverflow} />
            {ShopContents}
            <Footer />
        </div>
    )
}

export default Shop