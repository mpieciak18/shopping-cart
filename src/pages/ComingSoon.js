import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

const ComingSoon = (props) => {
    const { cart, updateCart } = props

    return (
        <div id='coming-soon' class='page'>
            <Header cart={cart} updateCart={updateCart} />
            <div id='coming-soon-contents'>
                <h2>Coming Soon!</h2>
            </div>
            <Footer />
        </div>
    )
}

export default ComingSoon