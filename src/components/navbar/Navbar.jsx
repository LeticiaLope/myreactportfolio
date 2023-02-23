import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/Lcsmall.png';
import './navbar.css';

//className="__navbar"
//className="__navbar-links" are in BEM format (block element modifier)
const Navbar = () => {
  return (
    <div className="__navbar">
      <div className="__navbar-links"> 
        <div className="__navbar-links_logo"> 
          <img src={logo} alt="logo" />
        </div>
        <div className="__navbar-links_container"> 
        <p><a href="#aboutme">About Me</a></p>
        <p><a href="#education">Education</a></p>
        <p><a href="#experience">Experience</a></p>
        <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      Navbar
    </div>
  )
}

export default Navbar
