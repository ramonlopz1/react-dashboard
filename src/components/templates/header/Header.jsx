import React from 'react';
import Logo from './Logo';
import './Header.css';
import Nav from './Nav'

const Header = props => 
    <header className='header'>
       <div className='header__top'>
            <Logo/>
            <Nav/>
       </div>
    </header>

export default Header;