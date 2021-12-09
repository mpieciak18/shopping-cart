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
        {id: 0, title: 'Squat Rack', price: 499, image: SquatRack, quantity: 0},
        {id: 1, title: 'Power Rack', price: 799, image: PowerRack, quantity: 0},
        {id: 2, title: '45lb Olympic Barbell', price: 299, image: Barbell, quantity: 0},
        {id: 3, title: '45lb Iron Plates - Pair', price: 59, image: IronPlates, quantity: 0},
        {id: 4, title: '45lb Bumper Plates - Pair', price: 119, image: BumperPlates, quantity: 0},
        {id: 5, title: 'Bench', price: 199, image: Bench, quantity: 0},
    ]
    const [products, setProducts] = useState(initProductState)

    const [cart, setCart] = useState([])

    const [total, setTotal] = useState(0)

    // Use product ID to add product to cart
    // If product is already in cart, increase quantity
    const addToCart = (productId) => {
        const addedProduct = {id: productId, quantity: 1}
        let newCart

        if (cart.length == 0) {
            newCart = [addedProduct]
        } else if (isProductInCart(productId) == false) {
            newCart = [...cart, addedProduct]
        } else {
            newCart = increaseQuantity(addedProduct)         
        }

        setCart(newCart)
        console.log(cart)
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

    // Increase quantity of pre-existing item in cart
    const increaseQuantity = (product) => {
        // First, find index of pre-existing item in cart
        let productIndex
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == product.id) {
                productIndex = i
                break
            }
        }
        // Second, increase item quantity
        const oldQuantity = cart[productIndex].quantity
        product.quantity = oldQuantity + 1
        // Third, create & return new cart array
        const sliceOne = cart.slice(0, productIndex)
        const sliceTwo = cart.slice(productIndex + 1)
        const newCart = [...sliceOne, product, ...sliceTwo] 
        return newCart
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/shop' element={<Shop products={products} addToCart={addToCart} /> } />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/coming-soon' element={<ComingSoon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App