import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className='navbar'>
    <nav>
    <div className='first'>
      <img className="image" src="https://thumbs.dreamstime.com/b/hand-book-logo-illustration-art-background-43965136.jpg"></img>
    <a className='four' href="#">The Booktown</a>
    <div>
      <ul className='two'>
        <Link className='three' to ="/">
          Home
        </Link>
        
        <Link className='three' to="/books">
          Books
        </Link>
        <Link className='three' to="/addbooks">
          Add Books
        </Link>
       </ul>
       </div>
  </div>
</nav>
<div className='end'>

</div>
    </div>
  )
}
