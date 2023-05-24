import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import {RxHamburgerMenu} from 'react-icons/rx';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
        <div className='NavbarContainer'>
            <div className='LogoContainer'>
                <h1>Cranberry<span style={{color: '#b9a0ff'}}>.</span></h1>
            </div>

            <div className='LinksContainer'>
                <p>Home</p>
                <p>Plattform</p>
                <p>Price</p>
                <p>Community</p>
            </div>

            <div className='AccountButtons'>
                <p>Login</p>
                <button className='JoinUsButton'>Join Us</button>
            </div>

            <button className='Hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded);console.log(isNavExpanded)}}><RxHamburgerMenu/></button>
            <div className={isNavExpanded ? "expanded" : "hidden"}>
                <p>expanded nav</p>
            </div>
        </div>
    </>
  )
}

export default Navbar