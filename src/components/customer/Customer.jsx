import React, { Component } from 'react'
import './Customer.css'
import Main from '../templates/main/Main'

export default class Customer extends Component {

    renderMainSection() {
        return (
            <section className='section__customer'>
                <div className="container">
                    <div className='boxes'>
                        <h4>Total de ativos</h4>
                        <span>938</span>
                        <span>^20%</span>
                    </div>
                    <div className='boxes'>
                        <h4>Total de inativos</h4>
                        <span>938</span>
                        <span>^20%</span>
                    </div>
                    <div className='boxes'>
                        <h4>Total de positivados</h4>
                        <span>638</span>
                        <span>^20%</span>
                    </div>
                    <div className='boxes'>
                        <h4>Total de não positivados</h4>
                        <span>138</span>
                        <span>^20%</span>
                    </div>
                </div>
                <div className="container">
                    <div className="search">
                        <input type="text" name="" id="" className='input__search__customers' />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Rca</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>maria</td>
                                <td>Buíque</td>
                                <td>Elias</td>
                                <td><button>Consultar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }

    render() {
        return (
            <Main title="Clientes">
                {this.renderMainSection()}
            </Main>
        )
    }
}