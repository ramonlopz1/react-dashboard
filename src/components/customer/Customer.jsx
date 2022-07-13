import React, { Component } from 'react'
import './Customer.css'
import Main from '../templates/main/Main'
import { Link } from 'react-router-dom'

export default class Customer extends Component {

    state = {
        customers: ""
    }

    async componentDidMount(){
        let data = await fetch('http://localhost:3000/customers')
        let customers = await data.json()

        this.setState({
            customers: customers
        })

        this.filterCustomer()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.customers !== prevState.customers) {

            this.setState({
                customers: this.state.customers
            })
        }
    }

    filterCustomer() {
        const filter = document.querySelector('.input__search')

        filter.addEventListener('input', (event) => {
            const input = event.target

            const allNames = document.querySelectorAll(".tdName")
            const allCodes = document.querySelectorAll(".tdCode")
            const allRcas = document.querySelectorAll(".tdRca")

            if(input.value.length > 0) {
                for(let i = 0; i < allNames.length; i++) {
                    let name = allNames[i]
                    let code = allCodes[i]
                    let rca = allRcas[i]
                    
                    let nameText = name.textContent
                    let codeText = code.textContent
                    let rcaText = rca.textContent

                    let letterInputed = input.value
                    
                    let exp = new RegExp(letterInputed, "i")

                    if(!exp.test(nameText) && !exp.test(codeText) && !exp.test(rcaText)) {
                        name.parentNode.style.display = "none"
                    } else {
                        name.parentNode.style.display = "table-row"
                    }
                }
            } else {
                for(let i = 0; i < allNames.length; i++) {
                    let name = allNames[i]
                    name.parentNode.style.display = "table-row"
                }
            }
        })
    }

    renderTableRow() {
        if (!this.state.customers) return

        const customersList = this.state.customers.list

        if(customersList)

        return customersList.map(customer => {
            return (
                <tr key={customer.code}>
                    <td className='tdCode'>{customer.code}</td>
                    <td className='tdName'>{customer.name}</td>
                    <td >{customer.city}</td>
                    <td className='tdRca'>{customer.rca}</td>
                    <td>
                        <Link code={customer.code} className='btn__consult' to={`/customers/profile/${customer.code}`}>
                            Consultar
                        </Link>
                    </td>
                </tr>
            )
        })
    }

    renderMainSection() {

        return (
            <section className='section__customer'>
                <div className="container">
                    <div className='boxes'>
                        <i className='fa fa-home'></i>
                        <div className="customer__info">
                            <h4>Total de ativos</h4>
                            <span className='quantity'>938</span>
                            <span className='percent'>Crescimento: 20%</span>
                        </div>
                    </div>
                    <div className='boxes'>
                        <i className='fa fa-home'></i>
                        <div className="customer__info">
                            <h4>Total de inativos</h4>
                            <span className='quantity'>938</span>
                            <span className='percent'>Crescimento: 20%</span>
                        </div>
                    </div>
                    <div className='boxes'>
                        <i className='fa fa-home'></i>
                        <div className="customer__info">
                            <h4>Total de positivados</h4>
                            <span className='quantity'>938</span>
                            <span className='percent'>Crescimento: 20%</span>
                        </div>
                    </div>
                    <div className='boxes'>
                        <i className='fa fa-home'></i>
                        <div className="customer__info">
                            <h4>Total de não positivados</h4>
                            <span className='quantity'>938</span>
                            <span className='percent'>Crescimento: 20%</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="search">
                        <label htmlFor="input__search">Pesquisar Cliente</label>
                        <input type="text" name="input__search" id="" className='input__search' placeholder='Insira o código, nome ou RCA do cliente.' />

                    </div>
                    <div className='wrap__table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Cidade</th>
                                    <th>Rca</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableRow()}
                            </tbody>
                        </table>
                    </div>
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