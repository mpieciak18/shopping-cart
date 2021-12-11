const ShoppingCart = (props) => {
    const { visibility, toggleVisibility } = props

    return (
        <div id='shopping-cart' class={visibility}>
            <div id='shopping-cart-container'>
                <div id='shopping-cart-title'>Your Shopping Cart</div>
                <div id='shopping-cart-items-container'>(ITEMS: PLACEHOLDER)</div>
                <div id='shopping-cart-total'>(TOTAL: PLACEHOLDER)</div>
                <div id='shopping-cart-buttons'>
                    <div id='shopping-cart-checkout'>Checkout</div>
                    <div id='shopping-cart-close' onClick={toggleVisibility}>Close</div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart