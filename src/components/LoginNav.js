import React from "react";
import logo from '../assets/ENIGMA-LOGO.png'

export default function LoginNav(){
    return(
        <nav className="LoginNav">
        <img className='login-logo' src={logo} alt='enigma1' />
        <h1 className='logoNav-txt'>ENIGMA 1</h1>
        <a href='#' className='about'>ABOUT</a>
        <a href='#' className='contact'>CONTACT US</a>
        <div className='login'><a href='#' className='login-txt'>LOGIN</a></div>
    </nav>
    )
}