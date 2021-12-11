import { Link } from 'react-router-dom'
import StoreIcon from '../assets/images/store-icon.png'
import CartIcon from '../assets/images/shopping-cart-icon.png'
import ShoppingCart from "../components/ShoppingCart.js"
import { useState } from 'react'


const Header = () => {
    const [visibility, setVisibility] = useState('hidden')

    const toggleVisibility = () => {
        console.log(visibility)
        if (visibility == 'hidden') {
            setVisibility('visible')
        } else {
            setVisibility('hidden')
        }
    }

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
                    <div id='shopping-cart-container' onClick={toggleVisibility}>
                        <img id='shopping-cart-icon' src={CartIcon}></img>
                    </div>
                </nav>
            </div>
            <ShoppingCart visibility={visibility} toggleVisibility={toggleVisibility} />
        </header>
    )
}

export default Header