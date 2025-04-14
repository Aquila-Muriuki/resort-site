import React from 'react'
import  Logo from '../assets/pizzaLogo (1).png'
import{Link} from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>

          <Link to="/Home">Home</Link>
          

          <Link to="/menu">menu</Link>
          <Link to="/About-us">About-us</Link>
          <Link to="/contact-us">contact-us</Link>

          
        </div>
    </div>
  )
}

export default Navbar