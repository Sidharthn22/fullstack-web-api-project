import React, { useEffect, useState } from 'react'
import "./users.css"
const User = () => {
    let [User,setUser]=useState([])
    useEffect(()=>{
        let a=fetch("http://localhost:4000/users")
        let b=a.then((x)=>{
            return x.json()
        })
        b.then((y)=>{
                setUser(y)
            })
        },[User])

        //Deleting User
    function removeUser(id,name){
        let y=window.confirm(`Do yo want to delete ${name}`);
        if(y){
            fetch(`http://localhost:4000/users/${id}`,{
                method:'DELETE'
            });
            alert("Details is not deleted ")
        }
            else{

                alert("Details removed")
            }
        }

  return (
    <>
    <center>
        <h1> User</h1>
    </center>
    <div className='parent'>
      
      {User.map((ele)=>{
        return(
            
        <div className="users">
            <br /><br /><br />
        <div className='card'>
            <h3>ID:{ele.id}</h3>
            <h3>FirstName:{ele.firstName}</h3>
            <h3>LastNmae:{ele.lastName}</h3>
            <h3>Email:{ele.email}</h3>
            <h3>Phone:{ele.phone}</h3>
            <h3>Address:{ele.address}</h3>
            <h3>Date of Birth:{ele.birthDate}</h3>
            <button onClick={()=>{
                removeUser(ele.id,ele.firstName)
            }}>DELETE</button>
            <hr />
        </div>
        </div>
            
        )
      })}
      </div>
      </>
    
  )
}

export default User