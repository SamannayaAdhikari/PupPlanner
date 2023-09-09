import React from 'react';
import './Header.css';
function Header({ props }) {
  return (
    <header className="header">
      <div className="logo">{props}</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
