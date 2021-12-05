import { Link } from 'react-router-dom'
import Icon from '../assets/shopping-cart-icon.png'

const Header = () => {
    return (
        <header>
            <div id='header-left'>
                <Link to='/home'><h1 id='title'>Store Name</h1></Link>
            </div>
            <nav id='header-right'>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <div id='shopping-cart-container'>
                    <img id='shopping-cart-icon' src={Icon}></img>
                </div>
            </nav>
        </header>
    )
}

export default Header