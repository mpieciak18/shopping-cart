import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

const About = (props) => {
    const { cart, updateCart } = props

    return (
        <div id='about' class='page'>
            <Header cart={cart} updateCart={updateCart} />
            <div id='about-contents'></div>
            <Footer />
        </div>
    )
}

export default About