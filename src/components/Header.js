import { Link } from 'react-router-dom'
import StoreIcon from '../assets/images/store-icon.png'
import CartIcon from '../assets/images/shopping-cart-icon.png'
import ShoppingCart from "../components/ShoppingCart.js"
import { useState } from 'react'

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

    // Update shopping cart total from cart subtotals
    useEffect(() => {
        let newTotal = 0
        for (let i = 0; i < cart.length; i++) {
            newTotal += cart[i].subtotal
        }
        setTotal(newTotal)
    }, [cart])

    return (
        <header>
            <div id='header-container'>
                <Link id='header-left' to='/home'>
                    <h1 id='title'>StrengthStore</h1>
                    <img id='title-icon' src={StoreIcon}></img>
                </Link>
                <nav id='header-right'>
                    <Link to='/home'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/about'>About</Link>
                    <div id='header-cart-container' onClick={toggleVisibility}>
                        <img id='header-cart-icon' src={CartIcon}></img>
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