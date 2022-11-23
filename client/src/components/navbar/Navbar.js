import React, { useState } from 'react';
import Logo from '../../assets/Thanthra.png';
import './Navbar.css';
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [home, setHome] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setHome(true);
      setColor(true);
    } else {
      setColor(false);
      setHome(false);
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "Navbar Navbar-bg" : "Navbar"}>
      <img src={Logo} className="nav-logo" alt='logo' />
      <div className={`nav-items ${isOpen && "open"}`}>
        {home && <Link smooth spy to="home" style={{ cursor: 'pointer' }}>
          Home
        </Link>}
        <Link smooth spy to="events" style={{ cursor: 'pointer' }}>
          Events
        </Link>
        <Link smooth spy to="footer" style={{ cursor: 'pointer' }}>
          Contact Us
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar