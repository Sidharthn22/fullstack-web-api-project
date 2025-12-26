import React, { useState } from 'react'
import Userlogin  from './Userlogin'
import  Adminlogin  from './Adminlogin'
import "./loginpage.css"
export function Loginpage() {
    let [val,setVal]=useState(true)
    function f1()
    {
        setVal(!val)
    }
    return (
        <div class='m'>
            
            <h1 class="head">{val?"Welcom to Admin login":"Welcom to User login"}</h1>
           
            {val?<Adminlogin/>:<Userlogin/>}
           
            <button onClick={f1} class="b1">{val?"user login":"Admin login"}</button>

        </div>
    )
}
