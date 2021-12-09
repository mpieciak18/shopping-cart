const Product = (props) => {
    const {id, title, price, image, addToCart} = props

    const addItem = (event) => {
        const prodId = event.target.parentElement.parentElement.id
        // call addToCart and pass product ID as parameter
        addToCart(prodId)
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