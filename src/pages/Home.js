import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePageContents from "../components/HomePageContents.js"
import { useState } from 'react'

const Home = (props) => {
    const { cart, updateCart, overflow } = props

    const [overflow, setOverflow] = useState('visible')

    return (
        <div id='home' class='page' style={overflowY: {overflow}>
            <Header cart={cart} updateCart={updateCart} overflow={overflow} setOverflow={setOverflow} />
            <HomePageContents />
            <Footer />
        </div>
    )
}

export default Home