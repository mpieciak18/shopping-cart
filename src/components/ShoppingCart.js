import { useEffect, useState } from 'react'

const ShoppingCart = (props) => {
    const { visibility, toggleVisibility, cart } = props

    const [total, setTotal] = useState(0)

    // Update shopping cart total from cart subtotals
    useEffect(() => {
        let newTotal = 0
        for (let i = 0; i < cart.length; i++) {
            newTotal =+ cart[i].subtotal
        }
        setTotal(newTotal)
    }, [cart])

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
                                    <div class='shopping-cart-item-subtract-button'>-</div>
                                    <div class='shopping-cart-item-quantity'>{item.quantity}</div>
                                    <div class='shopping-cart-item-add-button'>+</div>
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
                        <div id='shopping-cart-checkout'>Checkout</div>
                        <div id='shopping-cart-close' onClick={toggleVisibility}>Close</div>
                    </div>
                </div>
            </div>
            <div id='cart-background' class={visibility} onClick={toggleVisibility}></div>
        </div>
    )
}

export default ShoppingCart