import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Graphic from './Graphic'
import './AsideRight.css'

export default class AsideRight extends Component {

    load = ""
        
    constructor(props) {
        super(props)

        const { load } = this.props
        this.load = load
    }

    render() {
        return (
                <aside className='aside__right'>
                    <nav className='nav__filters'>
                        <Link className='btn' to="/rca/revenue" onClick={this.load}>Faturamento</Link>
                        <Link className='btn' to="/rca/positivation" onClick={this.load}>Positivação</Link>
                        <Link className='btn' to="/rca/mix" onClick={this.load}>Mix</Link>
        
                        <Link className='btn' to="/">Devolução</Link>
                        <Link className='btn' to="/">Ativos</Link>
                        <Link className='btn' to="/">Cidades</Link>
                        <Link className='btn' to="/">Clientes</Link>
                        <Link className='btn' to="/">Campanhas</Link>
                    </nav>
        
                    <div className="data__containers">
                        <div className='container'>
                            <Graphic url={this.props.url} rca={this.props.rca} title={this.props.title} />
                        </div>
                        <div className='container'>
                        </div>
                    </div>
                </aside>
        )
    }
}