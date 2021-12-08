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
        {title: 'Squat Rack', price: 499, image: SquatRack},
        {title: 'Power Rack', price: 799, image: PowerRack},
        {title: '45lb Olympic Barbell', price: 299, image: Barbell},
        {title: '45lb Iron Plates - Pair', price: 59, image: IronPlates},
        {title: '45lb Bumper Plates - Pair', price: 130, image: BumperPlates},
        {title: 'Bench', price: 199, image: Bench},
    ]
    const [products, setProducts] = useState(initProductState)

    const [cart, setCart] = useState([])

    const [total, setTotal] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/shop' element={<Shop products={products} cart={cart} setCart={setCart}/> } />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/coming-soon' element={<ComingSoon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App