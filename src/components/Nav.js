import React from "react";
import logo from '../assets/SIH-LOGO-BLACK.png'
import {Link, useNavigate} from 'react-router-dom'

export default function Nav(){
    let navigate = useNavigate();
    return(
        <nav>
            <img src={logo} alt='enigma1' className='main-logo' />
            <h1 className='logo-txt'>ENIGMA 1</h1>
            <Link to="/about" className="about">ABOUT</Link>
            <Link to="/contact" className='contact'>TEAM</Link>
            <button onClick={()=> navigate("/login")} className='login'><p className='login-txt'>LOGIN</p></button>
        </nav>
    )
}