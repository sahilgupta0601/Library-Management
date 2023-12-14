import React, { useState } from 'react'
import "./Addbooks.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Addbooks() {
  const [data,setdata]= useState({bookname:"",description:"",AuthorName:"",PublisherName:"",imgurl:"",price:""});
  const change =(e)=>{
    const {name,value}=e.target;
    setdata({...data,[name]:value})

  }
  const history=useNavigate();
  const submit=async(e)=>{
    e.preventDefault();
    await axios
     .post("http://localhost:1000/add",data)
    .then((res)=>console.log(res)).then(()=>history("/books"));
  }
  console.log(data);
  return (
    <div>
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
    </div>
  )
}
