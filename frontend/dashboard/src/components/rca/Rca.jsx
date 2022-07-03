import React, { Component } from 'react';
import './Rca.css';
import { Link } from 'react-router-dom'

import Main from '../templates/main/Main';

export class Rca extends Component {

    renderMainSection() {
        return (
            <section className="section__rca">
                <aside className='aside__left'>
                    <div className="container__top">
                        <div className="search__rca">
                            <input className='input__search' type="text" name="name" id="" placeholder='Digite o código ou o nome' />
                            <button>Pesquisar</button>
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
                        <Link to="/">Cidades</Link>
                        <Link to="/">Clientes</Link>
                        <Link to="/">Campanhas</Link>
                    </nav>

                    <div className="data__containers">
                        <div className='container'>
a
                        </div>
                        <div className='container'>
a
                        </div>
                    </div>
                </aside>
            </section>
        )
    }

    render() {
        return (
            <Main title={this.props.title} >
                {this.renderMainSection()}
            </Main>
        )
    }
}