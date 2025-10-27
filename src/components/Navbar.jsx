import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>🚀 React App</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/users" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar