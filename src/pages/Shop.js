import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js"
import ShoppingCart from "../components/ShoppingCart.js"

const Shop = (props) => {
    const { products, addToCart } = props

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
                            addToCart={addToCart}
                        />
                    )
                })}
            </div>
        </div>
    )

    return (
        <div id='shop' class='page'>
            <Header />
            {ShopContents}
            <Footer />
            <ShoppingCart />
        </div>
    )
}

export default Shop