import React from 'react'
import { NavLink } from 'react-router-dom';
 
const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink
          to="/"
        >Welcome</NavLink>
        <NavLink
          to="/about"
        >Questions</NavLink>
        <NavLink
          to="/login"
        >Login</NavLink>
      </div>
    );
  };

 
export default NavBar;