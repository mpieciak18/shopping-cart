import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

const About = (props) => {
    return (
        <div id='about' class='page'>
            <Header cart={props.cart} />
            <div id='about-contents'></div>
            <Footer />
        </div>
    )
}

export default About