import React from 'react'
import { BsCalendar2Fill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  function show() { 
    document.getElementsByClassName.toggle('show')
  }


  return <>
  <div className='navbar'>
    <div className='social__icon'>
        <ul className='navigation__icons'>
            <li><BsEnvelopeFill /> info@company.com</li>
            <li><FaLocationDot /> Sunny Isles Beach, FL 33160</li>
            
        </ul>
        <ul className='social__icons__sub'>
        <li><TiSocialFacebook /></li>
        <li><TiSocialTwitter /></li>
        <li><TiSocialLinkedin /></li>
        <li><TiSocialInstagram /></li>
        </ul>

    </div>
    <div className='nav__container'>
        <h1 className='tittle'>Villa</h1>
        <div className='nav__links '>

        <ul className='nav__links__sub'>
        <li>home</li>
        <li>properties</li>
        <li>porpety details</li>
        <li>contact us</li>
        </ul>

          <ul className='visit'>
            <li className='schedule_icon'><BsCalendar2Fill /></li>
            <li> schedule a visit</li>
          </ul>

        </div>
    
        <button className='hamburger_icon' onClick={() => {show()}}>
      <GiHamburgerMenu />
      </button>

      </div>
      


  </div>

  </>
}

export default Navbar