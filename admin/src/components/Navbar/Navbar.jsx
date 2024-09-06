import React from 'react'
import Logo from "../../assets/1.jpg"
import "./Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <img className='Logo' src={Logo} alt=""   style={{width:"100px"}} />
        <img src={Logo} alt="" style={{width:"50px"}} />
    </div>
  )
}

export default Navbar