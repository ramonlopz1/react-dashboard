import React from 'react';
import './NavTop.css';

import BotaoMenu from './BotaoMenu';

const NavTop = props => 
    <nav className='header__nav__top'>
        <ul className='nav__links'>
            <li className='link'>
               <BotaoMenu to="/home" label="Início"/>
            </li>
            <li className='link'>
                <BotaoMenu to="" label="Painel de gerenciamento"/>
            </li>
            <li className='link'>
                <BotaoMenu to="" label="Site"/>
            </li>
            <li className='link'>
            <BotaoMenu to="" label="Sair"/>
            </li>
        </ul>
    </nav>

    export default NavTop;