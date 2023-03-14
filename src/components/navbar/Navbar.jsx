import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Lcsmall.png';
import './navbar.css';

//className="__navbar"
//className="__navbar-links" are in BEM format (block element modifier)
const Menu = () => (
  <>
  <p><a href="#aboutme">About Me</a></p>
  <p><a href="#education">Education</a></p>
  <p><a href="#experience">Experience</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="__navbar">
      <div className="__navbar-links"> 
        <div className="__navbar-links_logo"> 
          <img src={logo} alt="logo" />
        </div>
        <div className="__navbar-links_container"> 
      <Menu />
        </div>
      </div>
      <div className="__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="__navbar-menu_container scale-up-center">
            <div className="__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      
      </div>
    </div>
  )
}

export default Navbar
