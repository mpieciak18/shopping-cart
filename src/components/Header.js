import { Link } from 'react-router-dom'
import StoreIcon from '../assets/images/store-icon.png'
import CartIcon from '../assets/images/shopping-cart-icon.png'
import ShoppingCart from "../components/ShoppingCart.js"
import { useState, useEffect } from 'react'

const Header = (props) => {
    const { cart, updateCart } = props

    const [visibility, setVisibility] = useState('hidden')

    // Hide or display shopping cart
    const toggleVisibility = () => {
        const page = document.querySelector('body') 

        if (visibility == 'hidden') {
            setVisibility('visible')
            page.style.overflow = 'hidden'
        } else {
            setVisibility('hidden')
            page.style.overflow = 'visible'
        }
    }

    const [total, setTotal] = useState(0)
    const [quant, setQuant] = useState(0)
    const [stickerVis, setStickerVis] = useState('hidden')

    // Update shopping cart total from cart subtotals
    // and then update visibility of shopping cart sticker
    useEffect(() => {
        let newTotal = 0
        let newQuant = 0
        for (let i = 0; i < cart.length; i++) {
            newTotal += cart[i].subtotal
            newQuant += cart[i].quantity
        }
        setTotal(newTotal)
        setQuant(newQuant)

        if (newQuant > 0) {
            setStickerVis('visible')
        } else {
            setStickerVis('hidden')
        }
    }, [cart])

    return (
        <header>
            <div id='header-container'>
                <Link id='header-left' to='/\'>
                    <h1 id='title'>StrengthStore</h1>
                    <img id='title-icon' src={StoreIcon}></img>
                </Link>
                <nav id='header-right'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <div id='header-cart-container' onClick={toggleVisibility}>
                        <img id='header-cart-icon' src={CartIcon}></img>
                        <div id='header-cart-sticker' class={stickerVis}>{quant}</div>
                    </div>
                </nav>
            </div>
            <ShoppingCart
                visibility={visibility}
                toggleVisibility={toggleVisibility}
                cart={cart}
                updateCart={updateCart}
                total={total}
            />
        </header>
    )
}

export default Header