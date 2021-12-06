import { Link } from 'react-router-dom'
import StoreIcon from '../assets/store-icon.png'
import CartIcon from '../assets/shopping-cart-icon.png'

const Header = () => {
    return (
        <header>
            <div id='header-left'>
                <Link id='title-container' to='/home'>
                    <h1 id='title'>StrengthStore</h1>
                    <img id='title-icon' src={StoreIcon}></img>
                </Link>
            </div>
            <nav id='header-right'>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <div id='shopping-cart-container'>
                    <img id='shopping-cart-icon' src={CartIcon}></img>
                </div>
            </nav>
        </header>
    )
}

export default Header