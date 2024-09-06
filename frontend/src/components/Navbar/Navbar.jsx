import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from "./../../assets/1.jpg"
import { StoreContext } from '../context/StoreContext'
const Navbar = ({ setShowLogin }) => {
  const [menu, setMneu] = useState("home")

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = ()=>{
     localStorage.removeItem("token")
     setToken(""); 
     navigate("/")
  }
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} style={{ width: "200px" }}></img>
      </Link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMneu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#exploreMenu" onClick={() => setMneu("menu")} className={menu === "menu" ? "active" : ""}>menu</a >
        <a href='#app-dawonload' onClick={() => setMneu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMneu("connect-us")} className={menu === "connect-us" ? "active" : ""}>connect us</a>
      </ul>
      <div className="navbar-right">
        <Link to={"/Cart"} >
          <p>cart</p></Link>
        <div className="navbar-search-icon">
          <img src={logo} alt='badketicon' style={{ width: "50px" }}>
          </img>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}>{getTotalCartAmount()}</div>
        </div>
        {!token ?
        <button onClick={() => setShowLogin(true)}> sing in </button>
          :
          <div className='navbar-profile'>
            {/* <img src={protifial}  /> */}
            <p >img-profie</p>
            <ul className='nav-profile-dropdawon'>
              <li onClick={()=>navigate("/myorders")}>oreder</li>
              <hr />
              <li onClick={logout}>logout</li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar