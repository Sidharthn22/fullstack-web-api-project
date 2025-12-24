import React from 'react'
import Navbar from '../../Navbar'
import Home from '../../Home'
import About from '../../About'
import Books from '../../Books'
import { Route, Routes } from 'react-router-dom'
import Readbook from '../../Readbook'
import Cart from '../../Cart'

function Userportal() {
    return (
        <div>
            <Navbar/>
            
             <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/books' element={<Books/>}></Route>
                <Route path='/readbook/:id' element={<Readbook/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
    
                
            </Routes>
            
        </div>
    )
}

export default Userportal
