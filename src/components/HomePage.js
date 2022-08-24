import React from 'react'
import SvgGrid from './svgGrid'
import logo from '../assets/SIH-LOGO-BLACK.png'
import SvgSphere from './svgSphere'
import SvgStar from './svgStar'
import SvgTriangle from './SvgTriangle'
import SvgSlingy from './svgSlingy'

export default function HomePage(){
    return (
        <section className="Home">
        <SvgGrid />
        <SvgSphere />
        <SvgStar />
        <SvgTriangle />
        <SvgSlingy />
        <nav >
            <img className='main-logo' src={logo} alt='enigma1' />
            <h1 className='logo-txt'>ENIGMA 1</h1>
            <a href='#' className='about'>ABOUT</a>
            <a href='#' className='contact'>CONTACT US</a>
            <div className='login'><a href='#' className='login-txt'>LOGIN</a></div>
        </nav>
        <div className='home-txt'>
            <h1>The easiest way to store data on the decentralised web.</h1>
            <p>Store your data using our simple API. It’s fast, open, and it’s free.</p>
            <div className='demo-btn'><a>START STORING</a></div>
        </div>    
        </section>
    )
} 