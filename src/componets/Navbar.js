import React from 'react'
import { BsCalendar2Fill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  return <>
  <div className='navbar'>
    <div className='social__icon'>
        <ul className='navigation__icons'>
            <li><BsEnvelopeFill /></li>
            <li><FaLocationDot /></li>
            
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

        <p className='visit'>
        <BsCalendar2Fill />  schedule a visit
        </p>

        </div>
    


    </div>


  </div>

  </>
}

export default Navbar