import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import { useState } from 'react'

const ComingSoon = (props) => {
    const { cart, updateCart } = props

    const [overflow, setOverflow] = useState('visible')

    return (
        <div id='coming-soon' class='page' style={overflowY: {overflow}>
            <Header cart={cart} updateCart={updateCart} overflow={overflow} setOverflow={setOverflow} />
            <div id='coming-soon-contents'>
                <h2>Coming Soon!</h2>
            </div>
            <Footer />
        </div>
    )
}

export default ComingSoon