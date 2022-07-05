import React, { Component } from 'react';
import './Rca.css';
import { Link } from 'react-router-dom'

import Main from '../templates/main/Main';
import Graphic from './Graphic';

export class Rca extends Component {

    state = {
        url: this.props.url,
        rca: "elias"
    }

    load(url) {
        this.setState({
            url: this.props.url
        })
    }

    changeRCA() {
        const select = document.querySelector('.rca__name')
        const rca = select.options[select.selectedIndex].value

        this.setState({
            rca: rca
        })
    }


    renderMainSection() {

        return (
            <section className="section__rca">
                <aside className='aside__left'>
                    <div className="container__top">
                        <div className="search__rca">
                            <select onChange={() => { this.changeRCA() }} className='rca__name'>
                                <option className='rca' value="elias">elias</option>
                                <option className='rca' value="dina">dina</option>
                            </select>
                        </div>

                        <div className='circle'>

                        </div>
                        <h4>Maria Josefa Pereira</h4>
                        <span>Pe - Al</span>
                    </div>
                    <div className="container__bottom">
                        <div className='infos__avarege'>
                            <h3>Médias</h3>
                            <hr style={{ width: '90%' }} />
                            <div className="avareges__container">
                                <div className='avareges__data'>
                                    <span className='data'>93283</span>
                                    <span className="title">
                                        Devolução
                                    </span>
                                </div>
                                <div className='avareges__data'>
                                    <span className='data'>742</span>
                                    <span className="title">
                                        Mix
                                    </span>
                                </div>
                                <div className='avareges__data'>
                                    <span className='data'>383</span>
                                    <span className="title">
                                        Positivação
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='infos__general'>
                            <div className="info">
                                <span className="label">
                                    Faturamento
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>
                            <div className="info">
                                <span className="label">
                                    Positivação
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>
                            <div className="info">
                                <span className="label">
                                    Mix
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>
                            <div className="info">
                                <span className="label">
                                    Devolução
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>
                            <div className="info">
                                <span className="label">
                                    Ativos
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>
                            <div className="info">
                                <span className="label">
                                    Ticket médio
                                </span>
                                <div className="data">
                                    939232
                                </div>
                            </div>

                        </div>
                    </div>
                </aside>
                <aside className='aside__right'>
                    <nav className='nav__filters'>
                        <Link className='btn' to="/rca/revenue" onClick={() => this.load()}>Faturamento</Link>
                        <Link className='btn' to="/rca/positivation" onClick={() => this.load()}>Positivação</Link>
                        <Link className='btn' to="/">Mix</Link>
                        <Link className='btn' to="/">Devolução</Link>
                        <Link className='btn' to="/">Ativos</Link>
                        <Link className='btn' to="/">Cidades</Link>
                        <Link className='btn' to="/">Clientes</Link>
                        <Link className='btn' to="/">Campanhas</Link>
                    </nav>

                    <div className="data__containers">
                        <div className='container'>

                        </div>
                        <div className='container'>
                            <Graphic url={this.props.url} rca={this.state.rca} />
                        </div>
                    </div>
                </aside>
            </section>
        )
    }

    render() {
        return (
            <Main title="Representante Comercial Autônomo" >
                {this.renderMainSection()}
            </Main>
        )
    }
}