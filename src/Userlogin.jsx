import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./ua.css"
function Userlogin() {
    let em = useRef()
    let pw = useRef()
    let goto = useNavigate()
    function f1(){
        if (em.current.value === "" || pw.current.value === ""){
            alert("its shoukd be mandatory")
        }
        else if (em.current.value === "user@gmail.com" && pw.current.value === "user123"){
            goto("/userportal")
        }
        else{
            alert("invalid id and pwd")
        }
    }
    return (
        <div class="m" >
            <form action="" className="sub1">
                <input type="text" placeholder='enter admin email' ref={em} className="i"/>
                <input type="text"  placeholder='entet admin pwd' ref={pw} className="i"/>
                <br />
                <button className='b2' onClick={f1}>LOGIN</button>
            </form>
        </div>
    )
}

export default Userlogin
