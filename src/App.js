import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.js'
import Shop from './pages/Shop.js'
import About from './pages/About.js'
import ComingSoon from './pages/ComingSoon.js'
import { useState } from 'react'
import SquatRack from './assets/images/squatrack.png'
import PowerRack from './assets/images/powerrack.png'
import Barbell from './assets/images/barbell.png'
import IronPlates from './assets/images/ironplates.png'
import BumperPlates from './assets/images/bumperplates.png'
import Bench from './assets/images/bench.png'

const App = () => {
    const initProductState = [
        {id: 0, title: 'Squat Rack', price: 499, image: SquatRack},
        {id: 1, title: 'Power Rack', price: 799, image: PowerRack},
        {id: 2, title: '45lb Olympic Barbell', price: 299, image: Barbell},
        {id: 3, title: '45lb Iron Plates - Pair', price: 59, image: IronPlates},
        {id: 4, title: '45lb Bumper Plates - Pair', price: 119, image: BumperPlates},
        {id: 5, title: 'Bench', price: 199, image: Bench},
    ]
    const [products, setProducts] = useState(initProductState)

    const [cart, setCart] = useState([])

    // Master function to add or remove items from cart, based on arguments
    const updateCart = (increase, productId) => {
        if (increase == true) {
            addToCart(productId)
        } else {
            delFromCart(productId)
        }
    }

    // Use product ID to add product to cart
    // If product is already in cart, increase quantity & item subtotal
    const addToCart = (productId) => {
        const productIndex = findProductsIndex(productId)

        const addedProduct = {
            id: productId,
            quantity: 1,
            image: products[productIndex].image,
            title: products[productIndex].title,
            subtotal: products[productIndex].price, 
        }
        let newCart

        if (cart.length == 0) {
            newCart = [addedProduct]
        } else if (isProductInCart(productId) == false) {
            newCart = [...cart, addedProduct]
        } else {
            newCart = increaseQuantitySubtotal(addedProduct)         
        }

        setCart(newCart)
    }

    // Check if product is in cart already
    const isProductInCart = (productId) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == productId) {
                return true
            } else {
                continue
            }
        }
        return false
    }

    // Increase quantity of pre-existing item in cart (and its subtotal)
    const increaseQuantitySubtotal = (product) => {
        // First, find index of pre-existing item in cart
        const cartIndex = findCartIndex(product.id)
        // Second, increase item quantity
        const oldQuantity = cart[cartIndex].quantity
        product.quantity = oldQuantity + 1
        // Third, increase item subtotal
        const oldSubTotal = cart[cartIndex].subtotal
        product.subtotal += oldSubTotal 
        // Fourth, create & return new cart array
        const sliceOne = cart.slice(0, cartIndex)
        const sliceTwo = cart.slice(cartIndex + 1)
        const newCart = [...sliceOne, product, ...sliceTwo] 
        return newCart
    }
    
    // Use product ID to subtract product from cart
    // If product quantity becomes zero, delete item from cart entirely
    const delFromCart = (productId) => {
        const productIndex = findProductsIndex(productId)
        const cartIndex = findCartIndex(productId)
        const newQuantity = cart[cartIndex].quantity - 1

        let newCart
        if (newQuantity > 0) {
            // Decrease item quantity & return updated cart
            newCart = decreaseQuantitySubtotal(productIndex, cartIndex)
        } else {
            // Delete item & return new cart
            const sliceOne = cart.slice(0, cartIndex)
            const sliceTwo = cart.slice(cartIndex + 1)
            newCart = [...sliceOne, ...sliceTwo] 
        }

        setCart(newCart)
    }

    // Decrease quantity of pre-existing item in cart (and its subtotal)
    const decreaseQuantitySubtotal = (productIndex, cartIndex) => {
        // First, assign pre-existing item in cart to variable
        const updatedProduct = cart[cartIndex]
        // Second, decrease item quantity
        updatedProduct.quantity -= 1
        // Third, decrease item subtotal
        updatedProduct.subtotal -= products[productIndex].price
        // Fourth, create & return new cart array
        const sliceOne = cart.slice(0, cartIndex)
        const sliceTwo = cart.slice(cartIndex + 1)
        const newCart = [...sliceOne, updatedProduct, ...sliceTwo] 
        return newCart
    }

    // Find products array index from product / cart item id
    const findProductsIndex = (id) => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                return i
            }
        }
    } 

    // Find cart array index from product / cart item id
    const findCartIndex = (id) => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == id) {
                return i
            }
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home cart={cart} updateCart={updateCart} />} />
                <Route exact path='/home' element={<Home cart={cart} updateCart={updateCart} />} />
                <Route exact path='/shop' element={<Shop products={products} updateCart={updateCart} cart={cart} /> } />
                <Route exact path='/about' element={<About cart={cart} updateCart={updateCart} />} />
                <Route exact path='/coming-soon' element={<ComingSoon cart={cart} updateCart={updateCart} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App