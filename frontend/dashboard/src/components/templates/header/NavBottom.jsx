import React from 'react';
import './NavBottom.css'
import { Link } from 'react-router-dom'

const NavBottom = props =>
    <nav className='nav__bottom'>
            <div className="painels">
                <Link to="/rca" className='link'>
                    <i className="fa fa-home"></i> RCA
                </Link>
                <Link to="/" className='link'>
                    <i className="fa fa-home"></i> Cliente
                </Link>
                <Link to="/" className='link'>
                    <i className="fa fa-home"></i> Produtos
                </Link>
            </div>

            <div className="filter__options">
                <a className='link' href="/revenue">Faturamento</a>
                <a className='link' href="/devolution">Devolução</a>
            </div>
    </nav>


export default NavBottom;