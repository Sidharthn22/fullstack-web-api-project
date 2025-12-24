import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "./nav.css"

function Navbar() {
    let[book,setBook]=useState([]);
        useEffect(()=>
        {
            let api=fetch(`http://localhost:4000/cart`)
             let x=api.then((first)=>
                {
                    return first.json()
                })
                x.then((second)=>{
                    setBook(second)
                })
        },[book])
    let path = useLocation()
    let x = path.pathname.startsWith("/adminportal")
    return (
        <div>{x?(<div className='nav'>
        <NavLink to="/adminportal/" className='li'>Home</NavLink>
        <NavLink to="/adminportal/about" className='li'>About</NavLink>
        <NavLink to="/adminportal/books" className='li'>Books</NavLink>
        <NavLink to="/adminportal/adduser" className='li'>Add Users</NavLink>
        <NavLink to="/adminportal/addbook" className='li'>Add Book</NavLink>
        <NavLink to="/adminportal/users" className='li'>User</NavLink>
        
        <NavLink to="/"className='li'>Logout</NavLink>
        </div>):(<div className='nav'>
        <NavLink to="/userportal/" className='li'>Home</NavLink>
        <NavLink to="/userportal/about" className='li'>About</NavLink>
        <NavLink to="/userportal/books" className='li'>Books</NavLink>
        <NavLink to="/userportal/cart"  className="li"> Cart <sup>{book.length}</sup></NavLink>
        <NavLink to="/"className='li'>Logout</NavLink> 
        </div>
        )}
            
        </div>
    )
}

export default Navbar
