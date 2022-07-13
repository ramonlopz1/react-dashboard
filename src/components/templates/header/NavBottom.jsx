import React from 'react';
import './NavBottom.css'
import { Link } from 'react-router-dom'

const NavBottom = props =>
    <nav className='nav__bottom'>
        <div className="painels">
            <Link to="/rca/revenue" className='link'>
                <i className="fa fa-folder"></i> RCA
            </Link>
            <Link to="/customers" className='link'>
                <i className="fa fa-user"></i> Clientes
            </Link>
            <Link to="/" className='link'>
                <i className="fa fa-boxes"></i> Produtos
            </Link>
            <Link to="/revenue" className='link'>
                <i className="fa fa-boxes"></i> Analytics
            </Link>
        </div>
    </nav>


export default NavBottom;