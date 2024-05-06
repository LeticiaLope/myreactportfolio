import React from 'react';
import './header.css';
import myphoto from '../../assets/myphoto.png'

const Header = () => {
  return (
    <div className="__header section__pading" id="home">
      <div className="__header-content">
        <h1 className="gradient__text"> Hey! Welcome to my Online Portfolio. </h1>
        <p> I'm Daniela and here you'll be able to find some information about my experience in design and IT, please don't hessitate to contact me for any inquiry.  </p>

          <div className="__header-content__input">
            <input type="email" placeholder="Please leave your contact e-mail"/>
            <button type="button">Send</button>
          </div>
        </div>
        
          <div className="__header-image">
            <img src={myphoto} alt="myphoto" />
          </div>
        </div>
  )
}

export default Header
