const CartBackground = (props) => {
    const { visibility } = props

    return (
        <div id='cart-background' class={visibility}></div>
    )
}

export default CartBackground