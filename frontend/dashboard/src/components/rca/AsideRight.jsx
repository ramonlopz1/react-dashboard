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
        this.state = {
            list: this.props.list,
            url: this.props.url
        }
        
    }

     // se a props for alterada, o elemento será rerenderizado
     async componentDidUpdate(prevProps, prevState) {
        if (this.props.url !== prevProps.url
            || this.props.rca !== prevProps.rca
            || this.props.list !== prevProps.list) {

            const res = await fetch(`http://localhost:3000/rca`)
            let data = await res.json()

            const rca = data?.[this.props.rca]

            data = rca?.[this.props.url]

            this.setState({
                list: data,
                url: this.props.url
            })
        }
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
                            <Graphic 
                                list={this.state.list}
                                url={this.state.url} 
                                rca={this.props.rca} 
                                title={this.props.title} 
                            />
                        </div>
                        <div className='container'>
                        </div>
                    </div>
                </aside>
        )
    }
}