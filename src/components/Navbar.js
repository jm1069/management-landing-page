import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
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
    </div>
  )
}

export default Navbar