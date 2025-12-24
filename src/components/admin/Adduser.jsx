import React, { useRef } from 'react'
import "../../nav.css"
import"./adduser.css"
import { useNavigate } from 'react-router-dom'
function Adduser() {
    let i1 = useRef()
    let nav = useNavigate()
      function f2(){
        let adduser = {
            id:(i1.current[0].value),
            firstName:(i1.current[1].value),
            lastName:(i1.current[2].value),
            phone:(i1.current[3].value),
            email:(i1.current[4].value)
        }
        fetch("http://localhost:4000/users",{method:"POST",body:JSON.stringify(adduser)})
        alert("newuser added")
        nav('/adminportal/users')
        
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Add User</h1>
            <form action="" ref={i1}>
                <input type="text" placeholder='enter enter id' />
                <input type="text" placeholder='enter first name' />
                <input type="text" placeholder='enter last name' />
                <input type="text" placeholder='enter phone no'/>
                <button onClick={()=>{
                    f2()
                }}> add user</button>
            </form>
        </div>
    )
}

export default Adduser
