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

    const [total, setTotal] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/shop' element={<Shop products={products}/> } />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/coming-soon' element={<ComingSoon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App