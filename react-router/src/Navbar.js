import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="navbar">
        <div className="navbar__title navbar__item">
          <Link to={'/'}>Home</Link>  
        </div>
        <div className="navbar__item"><Link to={'/about'}>About</Link></div>
        <div className="navbar__item"><Link to={'/contact'}>Contact</Link></div>
        <div className="navbar__item"><Link to={'/help'}>Help</Link></div>
      </header>
    </div>
  );
}

export default Navbar;
