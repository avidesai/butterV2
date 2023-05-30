import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="floating-navbar">
      <div className="navbar-left">
        <Link to="/">
          <button>
            <img
              src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f9c7.png"
              alt="butter"
            />
            butter.
          </button>
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-buttons">
          <Link to="/">
            <button>&#127920;</button>
          </Link>
          <Link to="/social">
            <button>&#127758;</button>
          </Link>
          <Link to="/wallet">
            <button>&#128100;</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
