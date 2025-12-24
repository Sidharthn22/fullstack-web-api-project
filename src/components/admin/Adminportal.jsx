import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import About from '../../About'
import Books from '../../Books'
import Users from './Users'
import Adduser from './Adduser'
import Addbook from './Addbook'
import Navbar from '../../Navbar'
import Readbook from '../../Readbook'
import Cart from '../../Cart'

function Adminportal() {
    return (
        <div>
              <Navbar/>
          
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/books' element={<Books/>}></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='/adduser' element={<Adduser/>}></Route>
                <Route path='/addbook' element={<Addbook/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/readbook/:id' element={<Readbook/>}></Route>
            </Routes>
        </div>
    )
}
export default Adminportal;


