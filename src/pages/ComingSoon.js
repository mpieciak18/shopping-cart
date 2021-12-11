import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

const ComingSoon = (props) => {
    return (
        <div id='coming-soon' class='page'>
            <Header cart={props.cart} />
            <div id='coming-soon-contents'></div>
            <Footer />
        </div>
    )
}

export default ComingSoon