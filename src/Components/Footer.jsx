import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Twilio from "./Logo/twilio.png";
import Wcs from "./Logo/wcs.png";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <IconContext.Provider value={{ size: "1.5rem", color: "white" }}>
          <Link to='#' className='social-icons'>
            <FaInstagram />
          </Link>
          <Link to='#' className='social-icons'>
            <FaGithub />
          </Link>
          <Link to='#' className='social-icons'>
            <FaFacebook />
          </Link>
          <Link to='#' className='social-icons'>
            <FaLinkedin />
          </Link>
          <Link to='#' className='social-icons'>
            <FaYoutube />
          </Link>
        </IconContext.Provider>
      </div>
      <div className='websites'>
        <p className='sponsers'>Sponsored by:</p>
        <Link
          to={{ pathname: "https://www.wildcodeschool.com/pt-PT" }}
          target='_blank'
          className='websites'>
          <img src={Wcs} alt='wcs' />
        </Link>
        <Link
          to={{ pathname: "https://www.twilio.com" }}
          target='_blank'
          className='websites'>
          <img src={Twilio} alt='Twilio' />
        </Link>
      </div>
      <div className='credits'>
        <p>&copy; 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}
