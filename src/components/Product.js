const Product = (props) => {
    const {title, price, image} = props

    return (
        <div class='product'>
            <div class='product-top-half'>
                <img class='product-image' src={image} />
            </div>
            <div class='product-bottom-half'>
                <div class='product-title'>{title}</div>
                <div class='product-price'>${price}.00</div>
                <div class='product-button'>Add to Cart</div>
            </div>
        </div>
    )
}

export default Product