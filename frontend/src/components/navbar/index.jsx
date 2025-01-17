import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar'>
       <div className="nav-wrapper">
       <a href="" className='logo'>Furnish</a>
        <div className='links'>
          <NavLink to="/" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Home</NavLink>
          <NavLink to="/furniture" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Furniture</NavLink>
          <NavLink to="/Add" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Add</NavLink>
        </div>
       </div>
      </div>
    </>
  )
}

export default Navbar
