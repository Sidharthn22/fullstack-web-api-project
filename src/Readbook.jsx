import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import "./readbook.css"
function Readbook() {
    let para=useParams()
    console.log(para.id)
    let [kitab, setkitab] = useState({});
        useEffect(()=>
        {
            let a=fetch(`http://localhost:4000/books/${para.id}`)
            let b=a.then((x)=>
            {
                return x.json()
            })
            b.then((y)=>{
                setkitab(y)
            })
        },[kitab])
        console.log(kitab)
        let loc=useLocation()
        let current=loc.pathname.startsWith("adminportal")
        let move=useNavigate()
        function f1(){
            if(current){
                move("/adminportal/books")
            }
            else{
                move("/userportal/books")
            }
        }
        function addtocart(id,title,image){
            let booktocart={
                cart:id,
                cartimage:image,
                carttitle:title
            }
            fetch("http://localhost:4000/cart",{method:"POST",body:JSON.stringify(booktocart)})
            alert("book added to the cart")
            move("/userportal/cart")
        }
    return (
        <div>
            <h1 className='readbookhead'>Read Book</h1>
            <h1 className="reedbookid">id:{kitab.id}</h1>
            <h1 className='readbookt'>Title:{kitab.title}</h1>
            <img src={kitab.thumbnailUrl} alt="" />
            <h4 style={{color:"white"}}>{kitab.longDescription}</h4>
            <button onClick={f1} className='tb'>back</button>
            <button className='tb' onClick={()=>{addtocart(kitab.id,kitab.title,kitab.thumbnailUrl) }
            } >add to cart</button>
        </div>
    )
}

export default Readbook
