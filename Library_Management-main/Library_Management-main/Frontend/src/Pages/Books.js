import React, { useEffect, useState } from 'react'
import "./books.css";
import axios from "axios"; 
import Booksection from '../Components/Booksection';
export default function Books() {
  const [data,setData]=useState();
    useEffect(()=>{
        const fetch=async()=>{
            await axios.get("http://localhost:1000/get")
            .then((res)=>{setData(res.data.response)
              console.log(setData)
            })
            .catch((err)=>{console.log(err.message)})
        }
        fetch();
    },[])
    
  return (
    <div>
    <div>
      <h3 className='book1'>Books Section</h3>
    </div>
    {data?<Booksection />
    :<div className='fetch'>Loading</div>}
    </div>
  )
}
