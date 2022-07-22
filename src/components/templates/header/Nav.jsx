import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className='nav'>

                <Link className='link' to="/">
                    Início
                </Link>
                <Link to="/rca/revenue" className='link'>
                    RCA
                </Link>
                <Link to="/customers" className='link'>
                    Clientes
                </Link>
                <Link to="/" className='link'>
                    Produtos
                </Link>
                <Link to="/revenue" className='link'>
                    Analytics
                </Link>
                <Link to="/login" className='link'>
                    Sair
                </Link>
        </nav>
    )
}