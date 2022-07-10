import React from 'react';
import Logo from './Logo';
import './Header.css';
import NavTop from './NavTop';
import NavBottom from './NavBottom'

const Header = props => 
    <header className='header'>
       <div className='header__top'>
            <Logo/>
            <NavTop/>
       </div>
       <div className='header__bottom'>
            <NavBottom/>
       </div>
    </header>

export default Header;