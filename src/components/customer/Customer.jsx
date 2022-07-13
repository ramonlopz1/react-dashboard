import React, { Component } from 'react'
import './Customer.css'
import Main from '../templates/main/Main'

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

        this.filterName()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.customers !== prevState.customers) {

            this.setState({
                customers: this.state.customers
            })
        }
    }

    filterName() {
        const filter = document.querySelector('.input__byname')

        filter.addEventListener('input', (event) => {
            const input = event.target

            const allNames = document.querySelectorAll(".tdName")

            if(input.value.length > 0) {
                for(let i = 0; i < allNames.length; i++) {
                    let name = allNames[i]
                    let nameText = name.textContent
                    let letterInputed = input.value
                    let exp = new RegExp(letterInputed, "i")

                    if(!exp.test(nameText)) {
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
                    <td>{customer.code}</td>
                    <td className='tdName'>{customer.name}</td>
                    <td>{customer.city}</td>
                    <td>{customer.rca}</td>
                    <td><button>Consultar</button></td>
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
                        <select className='input__byrca' name="byrca" id="">
                            <option value="Todos">Todos rcas</option>
                            <option value="Elias">Elias</option>
                            <option value="Dina">Dina</option>
                        </select>
                        <input type="text" name="" id="" className='input__bycode' placeholder='Código' />
                        <input type="text" name="" id="" className='input__byname' placeholder='Nome' />

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