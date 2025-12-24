import React, { use, useEffect, useState } from 'react'
import "./nav.css"
import "./book.css"
import { useLocation, useNavigate } from 'react-router-dom';
function Books() {
    let [book, setBook] = useState([]);
    useEffect(()=>
    {
        let a=fetch("http://localhost:4000/books")
        let b=a.then((x)=>
        {
            return x.json()
        })
        b.then((y)=>{
            setBook(y)
        })
    },[book])
    console.log(book)
    //navigate to read booklet
    let x=useLocation()
    let y=x.pathname.startsWith("/adminportal")
    let nav=useNavigate()
    function f1(id)
    {
        if (y){
            nav(`/adminportal/readbook/${id}`)
        }
        else{
            nav(`/userportal/readbook/${id}`)
        }
        
    }
    return (
        <div>
            <h1 className='bookst'>books</h1>
            <div className="books-container">
  {book.map((ele) => {
    return (
      <div className="books" key={ele.id}>
        <h1 id="bookid">id: {ele.id}</h1>
        <h1 id="booktitle">Title: {ele.title}</h1>
        <img src={ele.thumbnailUrl} alt="" />
        <button onClick={() => f1(ele.id)}>Read book</button>
      </div>
    );
  })}
</div>

                
        </div>
    )
}

export default Books
