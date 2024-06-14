import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="navbar-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
