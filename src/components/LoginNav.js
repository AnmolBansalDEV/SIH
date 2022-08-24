import React from "react";
import logo from '../assets/ENIGMA-LOGO.png'

export default function LoginNav(){
    return(
        <nav className="loginNav">
        
        <img className='loginNav-logo' src={logo} alt='enigma1' />
        
        <a className="navigation-link"><span className="navigation-bar">HOME/</span>/<span className="navigation-bar">LOGIN</span></a>
        <h1 className='loginNav-logo-txt'>ENIGMA 1</h1>
        <a href='#' className='loginNav-about'>ABOUT</a>
        <a href='#' className='loginNav-contact'>CONTACT US</a>
        <div className='loginNav-login'><a href='#' className='loginNav-login-txt'>LOGIN</a></div>
    </nav>
    )
}