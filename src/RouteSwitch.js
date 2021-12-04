import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.js'
import Shop from './pages/Shop.js'
import About from './pages/About.js'
import ComingSoon from './pages/ComingSoon.js'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/shop' element={<Shop />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/coming-soon' element={<ComingSoon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch