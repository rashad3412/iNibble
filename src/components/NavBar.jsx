import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isOpen, toggleMenu }) {
  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Conditionally render the menu based on isOpen */}
      {isOpen && (
        <ul className="navbar-list open">
          <li className="navbar-item">
            <Link to="/homePage" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/aboutPage" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/analyticsPage" onClick={toggleMenu}>
              Analytics
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contactPage" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
