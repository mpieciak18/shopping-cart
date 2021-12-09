const Product = (props) => {
    const {id, title, price, image, updateQuantity} = props

    const addToCart = (event) => {
        const prodId = event.target.parentElement.parentElement.id
        // pass product ID and 'increase = true' as arguments to updateQuantity
        updateQuantity(prodId, true)
    }

    return (
        <div class='product' id={id}>
            <div class='product-top-half'>
                <img class='product-image' src={image} />
            </div>
            <div class='product-bottom-half'>
                <div class='product-title'>{title}</div>
                <div class='product-price'>${price}.00</div>
                <div class='product-button' onClick={addToCart}>Add to Cart</div>
            </div>
        </div>
    )
}

export default Product