import React from 'react';
import './Header.css'; // Create a separate CSS file for the Header component

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Punya Kakkar</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
