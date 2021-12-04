import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div id='header-left'>
                <Link to='/home'>Store Name</Link>
            </div>
            <nav id='header-right'>
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <img id='shopping-cart-icon'></img>
            </nav>
        </header>
    )
}

export default Header