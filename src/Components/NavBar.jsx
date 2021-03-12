import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo/vaccine.png";

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
        <h2>Vaccinator</h2>
      </div>
      <div className='links'>
        <Link to='/' className='link-text'>
          Home
        </Link>
        <Link to='/map' className='link-text'>
          Map
        </Link>
        <Link to='/contact' className='link-text'>
          Contact
        </Link>
        <Link to='/about' className='link-text'>
          About
        </Link>
      </div>
    </div>
  );
}
