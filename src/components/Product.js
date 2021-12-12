const Product = (props) => {
    const {id, title, price, image, updateCart} = props

    const addItem = (event) => {
        const productId = event.target.parentElement.parentElement.id
        // call updateCart, passing 'increase = true' and product ID as parameters
        updateCart(true, productId)
    }

    return (
        <div class='product' id={id}>
            <div class='product-top-half'>
                <img class='product-image' src={image} />
            </div>
            <div class='product-bottom-half'>
                <div class='product-title'>{title}</div>
                <div class='product-price'>${price}.00</div>
                <div class='product-button' onClick={addItem}>Add to Cart</div>
            </div>
        </div>
    )
}

export default Product