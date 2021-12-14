import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePageContents from "../components/HomePageContents.js"

const Home = (props) => {
    const { cart, updateCart } = props

    return (
        <div id='home' class='page'>
            <Header cart={cart} updateCart={updateCart} />
            <HomePageContents />
            <Footer />
        </div>
    )
}

export default Home