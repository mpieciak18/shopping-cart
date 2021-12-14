import { useState } from 'react'

const Product = (props) => {    
    const {id, title, price, image, updateCart} = props

    const [hidden, setHidden] = useState('hidden')

    const addItem = (event) => {
        const productTile = event.target.parentElement.parentElement
        const productId = productTile.id

        // call updateCart, passing 'increase = true' and product ID as parameters
        updateCart(true, productId)

        triggerNotification()        
    }

    const triggerNotification = () => {
        setHidden('visible')
        setTimeout(
            () => {
                setHidden('hidden')
            }, 1500
        )
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
            <div class={`purchase-notification ${hidden}`}>
                <p class={hidden}>Added to Cart!</p>
            </div>
        </div>

    )
}

export default Product