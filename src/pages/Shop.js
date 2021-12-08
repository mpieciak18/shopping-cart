import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js"

const Shop = (props) => {
    const { products, cart, setCart } = props

    const ShopContents = (
        <div id='shop-contents'>
            <div id='products-container'>
                {products.map((products) => {
                    return <Product title={products.title} price={products.price} image={products.image}/>
                })}
            </div>
        </div>
    )

    return (
        <div id='shop' class='page'>
            <Header />
            <ShopContents />
            <Footer />
        </div>
    )
}

export default Shop