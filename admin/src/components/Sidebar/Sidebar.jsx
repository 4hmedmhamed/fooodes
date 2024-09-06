import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
            <p>+</p>
            <p>Addd items</p>
            </NavLink>
        <NavLink  to="/list" className="sidebar-option">
            <p>order</p>
            <p>list Items</p>
            </NavLink>
        <NavLink  to="/order" className="sidebar-option">
            <p>orders</p>
            <p>orders</p>
            </NavLink>
        </div>
         </div>
   
  )
}

export default Sidebar