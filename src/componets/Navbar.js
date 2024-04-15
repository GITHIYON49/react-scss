import React from 'react'
import { BsCalendar2Fill,BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin,TiSocialInstagram } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import  '../componets/style.scss'


function Navbar() {

  const [show,setShow]= useState(true)
  // function show() { 
  //   document.getElementsByClassName.toggle('navbar__container__links__show')
  // }


  return <>
  <div className='navbar'>
    <div className='navbar__social-icon'>
        <ul className='navbar__social-icon__icons'>
            <li><BsEnvelopeFill /> info@company.com</li>
            <li><FaLocationDot /> Sunny Isles Beach, FL 33160</li>
            
        </ul>
        <ul className='navbar__social-icon__sub'>
        <li><TiSocialFacebook /></li>
        <li><TiSocialTwitter /></li>
        <li><TiSocialLinkedin /></li>
        <li><TiSocialInstagram /></li>
        </ul>

    </div>
    <div className='navbar__container'>
        <h1 className='navbar__container__tittle'>Villa</h1>
        <div className='navbar__container__links '>

          <ul className={show?'navbar__container__links__sub':'navbar__container__links__show' }>
        <li>home</li>
        <li>properties</li>
        <li>porpety details</li>
        <li>contact us</li>
        </ul>

          <ul className='navbar__container__links__visit'>
            <li className='navbar__container__links__visit__schedule-icon'><BsCalendar2Fill /></li>
            <li> schedule a visit</li>
          </ul>

        </div>
    
        <button className='navbar__container__btn' onClick={() =>setShow(!show)}>
      <GiHamburgerMenu />
      </button>

      </div>
      


  </div>

  </>
}

export default Navbar