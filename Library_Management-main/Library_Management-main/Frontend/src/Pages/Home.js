import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='homepage'>
    <div className='first'>
    <div className='inner1'>
      <div className='onee'>Book Store</div>
      <div className='two1'>For you</div>
      <p className='tag'>Check out the books from here!!!</p>
      <div className='btnn'>
      <Link to="/books" className='btn'>View Books</Link>
      </div>
    </div>
    <div className='inner2'>
    <img className="inner2img" src="https://i.pinimg.com/originals/5e/67/45/5e6745778c40a1245b5c3da107962738.jpg"></img>
    </div>
    </div>
    </div>
  )
}
