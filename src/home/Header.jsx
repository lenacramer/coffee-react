import React from 'react'
import mokaPot from '../assets/mokapot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import coffeePour from '../assets/coffeepour.jpg'
import './Header.css'

const Header = () => {
  return (
    <div id='header'>
        <p id='top-bar'>Purchase two bags of beans for your next cup of coffee on us → </p>
        <img src={mokaPot} id='coffee-company-logo'/>
        <Navbar/>
        <img src={coffeePour} className='header-img'/>
        <Subheader/>
    </div>
  )
}

const Navbar = () => {
    return (
        <div id='navbar'>
            <p className='navbar-option'>Home</p>
            <p className='navbar-option'>Shop</p>
            <p className='navbar-option'>About Us</p>
            <p className='navbar-option'>Contact</p>
            <FontAwesomeIcon icon={faCartShopping} className='navbar-option shop-cart'/>
        </div>
    )
}

const Subheader = () => {
    return (
        <div id='subheader'>
        <h1 id='cc-header'>Coffee Company</h1>
        <h2 id='cc-subheader'>Want to have a good time and to drink some coffee?</h2>
        </div>
    )
}

export default Header