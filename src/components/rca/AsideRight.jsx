import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Graphic from './Graphic'
import './AsideRight.css'
import utils from '../graphics/util/utils'

export default class AsideRight extends Component {

    load = ""
    getMonthID = ""

    constructor(props) {
        super(props)

        const { load, getMonthID } = this.props
        this.load = load
        this.getMonthID = getMonthID

        this.state = {
            filteredData: this.props.filteredData,
            url: this.props.url
        }

    }

    // se a props for alterada, o elemento será rerenderizado
    async componentDidUpdate(prevProps, prevState) {
        if (this.props.url !== prevProps.url
            || this.props.rca !== prevProps.rca
            || this.props.filteredData !== prevProps.filteredData
            || this.props.unfilteredData !== prevProps.unfilteredData
            || this.props.monthID !== prevProps.monthID) {

            const revenue = this.calcTotal('revenue')
            const positivation = this.calcTotal('positivation')
            const mix = this.calcTotal('mix')
            const devolution = this.calcTotal('devolution')

            const res = await fetch(`http://localhost:3000/rca`)
            let data = await res.json()

            const rca = data?.[this.props.rca]

            data = rca?.[this.props.url]

            this.setState({
                filteredData: data,
                url: this.props.url,
                revenue: revenue,
                positivation: positivation,
                mix: mix,
                devolution: devolution
            })


        }
    }

    calcTotal(filter) {

        // cria array de [revenue, positivation, mix...]
        const filtered = this.props.unfilteredData[filter]

        // filtra por ano [revenue, positivation, mix]
        const allMonths = utils.getUpdateList(filtered, 2021)
        if (!allMonths) return

        // filtra por mês
        const filterByMonth = allMonths[this.props.monthID]


        // valor inicial (total do ano inteiro)
        const totalYear = utils.calcYearRevenue(filtered, 2021)

        if (filterByMonth) return filterByMonth

        return totalYear
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
                </nav>

                <div className="data__containers">
                    <div className='container'>
                        <Graphic
                            getMonthID={this.getMonthID}
                            filteredData={this.state.filteredData}
                            url={this.state.url}
                            rca={this.props.rca}
                            title={this.props.title}
                        />
                    </div>
                    <div className='container'>
                        <div className='aside__infos'>
                            <div className="minibox">
                                <h5>Faturamento</h5>
                                <span>
                                    R$ {utils.formatNumbers(this.state.revenue)}
                                </span>
                            </div>
                            <div className="minibox">
                                <h5>Positivação</h5>
                                <span>
                                    R$ {utils.formatNumbers(this.state.positivation)}
                                </span>
                            </div>
                        </div>
                        <div className="circle__graphic">
                            <h5>Média</h5>
                            <div className='graphic'>
                                <div className="circle">
                                    
                                </div>
                            </div>
                        </div>
                        <div className='aside__infos'>
                            <div className="minibox">
                            <h5>Mix</h5>
                                <span>
                                    R$ {utils.formatNumbers(this.state.mix)}
                                </span>
                            </div>
                            <div className="minibox">
                            <h5>Devolução</h5>
                                <span>
                                    R$ {utils.formatNumbers(this.state.devolution)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}