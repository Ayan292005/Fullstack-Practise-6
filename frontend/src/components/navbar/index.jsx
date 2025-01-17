import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { favoriteContext } from '../../context/FavoritesContext'
import { FaHeart } from "react-icons/fa";

function Navbar() {
  let { favorites } = useContext(favoriteContext)
  return (
    <>
      <div className='navbar'>
       <div className="nav-wrapper">
       <a href="" className='logo'>Furnish</a>
        <div className='links'>
          <NavLink to="/" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Home</NavLink>
          <NavLink to="/furniture" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Furniture</NavLink>
          <NavLink to="/add" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}>Add</NavLink>
          <NavLink to="/favorites" className="link" style={({ isActive }) => ({ color: isActive ? "gray" : "black" })}><FaHeart /><span>{favorites.length}</span></NavLink>
        </div>
       </div>
      </div>
    </>
  )
}

export default Navbar
