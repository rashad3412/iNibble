import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ isOpen, toggleMenu }) {
  // State to track if the screen is desktop size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Update `isDesktop` when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Only show hamburger in mobile view */}
      {!isDesktop && (
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* Show links unconditionally in desktop view, or conditionally in mobile */}
      {(isDesktop || isOpen) && (
        <ul className={`navbar-list ${isDesktop ? "desktop" : "open"}`}>
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
            <Link to="/recipesPage" onClick={toggleMenu}>
              Recipes
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
