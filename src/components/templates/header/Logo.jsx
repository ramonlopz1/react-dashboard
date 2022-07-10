import React from 'react'
import './Logo.css'
import logo from '../../../assets/imgs/logo.png'

const Logo = props =>
    <div className='header__logo'>
        <img src={logo} alt="logo"></img>
    </div>

export default Logo;