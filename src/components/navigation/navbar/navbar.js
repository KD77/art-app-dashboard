import React from 'react'
import './navbar.css'
const Navbar=()=>{
  return(
    <div className="nav">
      <ul>
        <li><a>Home</a></li>
        <li><a>login</a></li>
        <li><a>Register</a></li>
      </ul>
    </div>
  );
}
export default Navbar;