import React from 'react'
import logo from '../../Thumbs/ylLogo.png'
import './Header.css'


export default function Header() {
  return (
    <div id='header'>
        
        <div>
            <img src={logo} 
            alt='logo' 
            id='logo'
            className='mx-auto'/>
        </div>
        <div>
            <ul id='navbar'>
                <li  className='mr-20'>Home</li>
                <li  className='mr-20'>Expérience</li>
                <li  className='mr-20'>Cours</li>
                <li  className='mr-20'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}
