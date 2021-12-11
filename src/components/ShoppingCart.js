import { useEffect, useState } from 'react'

const ShoppingCart = (props) => {
    const { visibility, toggleVisibility, cart } = props

    console.log(props.cart)

    const [total, setTotal] = useState(0)

    // Update shopping cart total from cart subtotals
    useEffect(() => {
        let newTotal = 0
        for (let i = 0; i < cart.length; i++) {
            newTotal =+ cart[i].subtotal
        }
        setTotal(newTotal)
    }, [cart])

    return (
        <div id='shopping-cart' class={visibility}>
            <div id='shopping-cart-container'>
                <div id='shopping-cart-title'>Your Shopping Cart</div>
                <div id='shopping-cart-items-container'>(ITEMS: PLACEHOLDER)</div>
                <div id='shopping-cart-total'>${total}.00</div>
                <div id='shopping-cart-buttons'>
                    <div id='shopping-cart-checkout'>Checkout</div>
                    <div id='shopping-cart-close' onClick={toggleVisibility}>Close</div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart