import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
export default function updateForm() {
  const [data,setdata]=useState({});
  const id=useParams().id;
  console.log(id);
  const history=useNavigate();
  useEffect(()=>{
    const fetchHandler=async(req,res)=>{
      await axios.get(`http://localhost:1000/get/${id}`).then((res)=>res.data).then(data=>setdata(data.response));
    };
    console.log(data);
    fetchHandler();
   },[id]);
   console.log(data.response);
   
   console.log(data);
   const sendrequest = async()=>{
    await axios
     .patch(`http://localhost:1000/update/${id}`,{
      AuthorName: String(data.AuthorName),
      PublisherName: String(data.PublisherName),
      bookname: String(data.bookname),
      imgurl: String(data.imgurl),
      price: Number(data.price)
     })
    .then((res)=>console.log(res));
   }
   const submit=(e)=>{
    e.preventDefault();
    sendrequest().then(()=>history("/books"));
   }
   const change=(e)=>{
    const {name,value}=e.target;
    setdata({...data,[name]:value});
   }
  return (
    <div>
      { data &&
      <form className='formm'>
        <label className='labels'>Book Name: </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='text' placeholder='Enter book name' onChange={change} name="bookname" value={data.bookname}></input>
        </div>
        <br></br>
        <label className='labels'>Description: </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='text' placeholder='Enter Description of Book' onChange={change} name="description"  value={data.description}></input>
        </div>
        <br></br>
        <label className='labels'>Author Name: </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='text' placeholder='Enter Author Name' name="AuthorName" onChange={change} value={data.AuthorName}></input>
        </div>
        <br></br>
        <label className='labels'>Publisher Name: </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='text' placeholder='Enter Publisher Name' name="PublisherName" onChange={change} value={data.PublisherName}></input>
        </div>
        <br></br>
        <label className='labels'>Image : </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='text' placeholder='Enter url of Image' name="imgurl" onChange={change} value={data.imgurl}></input>
        </div>
        <br></br>
        <label className='labels'>Price: </label>
        <br></br>
        <div className='input1'>
        <input className="input2" type='number' placeholder='Enter Price of book ' name="price" onChange={change} value={data.price}></input>
        </div>
        <br></br>
        <div className='input3'>
            <button className='btnnn' onClick={submit}>Submit</button>
        </div>
      </form>
}
    </div>
  )
}
