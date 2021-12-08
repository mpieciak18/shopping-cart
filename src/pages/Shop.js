import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Product from "../components/Product.js"

const Shop = (props) => {
    const { products, cart, setCart } = props

    let ShopContents
    ShopContents = (
        <div id='shop-contents' class='page-contents'>
            <div id='products-container'>
                {products.map((product) => {
                    return <Product title={product.title} price={product.price} image={product.image}/>
                })}
            </div>
        </div>
    )

    return (
        <div id='shop' class='page'>
            <Header />
            {ShopContents}
            <Footer />
        </div>
    )
}

export default Shop