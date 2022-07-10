import React from 'react';
import { Link } from 'react-router-dom';
import './NavTop-Botao.css';


const NavTopBotao = props =>
    <Link to={props.to}>
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>    

export default NavTopBotao;