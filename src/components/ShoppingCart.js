import { Link } from 'react-router-dom'

const ShoppingCart = (props) => {
    const { visibility, toggleVisibility, cart, updateCart, total } = props

    const addItem = (event) => {
        const productId = event.target.parentElement.parentElement.parentElement.id
        // call updateCart, passing 'increase = true' and product ID as parameters
        updateCart(true, productId)
    }

    const delItem = (event) => {
        const productId = event.target.parentElement.parentElement.parentElement.id
        // call updateCart, passing 'increase = false' and product ID as parameters
        updateCart(false, productId)
    }

    const items = (
        <div id='shopping-cart-items-container'>
            {cart.map((item) => {
                    return (
                        <div id={item.id} class='shopping-cart-item'>
                            <div class='shopping-cart-item-left'>
                                <img class='shopping-cart-item-image' src={item.image} />
                            </div>
                            <div class='shopping-cart-item-right'>
                                <div class='shopping-cart-item-title'>{item.title}</div>
                                <div class='shopping-cart-item-subtotal'>${item.subtotal}.00</div>
                                <div class='shopping-cart-item-quantity-container'>
                                    <div class='shopping-cart-item-subtract-button' onClick={delItem}>-</div>
                                    <div class='shopping-cart-item-quantity'>{item.quantity}</div>
                                    <div class='shopping-cart-item-add-button' onClick={addItem}>+</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )

    return (
        <div id='cart-and-background'>
            <div id='shopping-cart' class={visibility}>
                <div id='shopping-cart-container'>
                    <div id='shopping-cart-title'>Your Shopping Cart</div>
                    {items}
                    <div id='shopping-cart-total'>Total: ${total}.00</div>
                    <div id='shopping-cart-buttons'>
                        <Link id='shopping-cart-checkout' onClick={toggleVisibility} to='/about'>Checkout</Link>
                        <div id='shopping-cart-close' onClick={toggleVisibility}>Close</div>
                    </div>
                </div>
            </div>
            <div id='cart-background' class={visibility} onClick={toggleVisibility}></div>
        </div>
    )
}

export default ShoppingCart