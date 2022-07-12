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
            unfilteredData: this.props.unfilteredData,
            url: this.props.url,
            year: this.props.year
        }
    }

    // se a props for alterada, o elemento será rerenderizado

    // this.props.url !== prevProps.url
    //         || this.props.rca !== prevProps.rca
    //         || this.props.filteredData !== prevProps.filteredData
    //         || this.props.unfilteredData !== prevProps.unfilteredData
    //         || this.props.monthID !== prevProps.monthID
    //         || this.props.year !== prevProps.year
    async componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {

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
                unfilteredData: this.props.unfilteredData,
                url: this.props.url,
                revenue: revenue,
                positivation: positivation,
                mix: mix,
                devolution: devolution,
                year: this.props.year
            })

            this.calcProfit()
        }
    }

    calcTotal(filter) {

        // cria array de [revenue, positivation, mix...]
        const filtered = this.props.unfilteredData[filter]

        // filtra por ano [revenue, positivation, mix]
        const allMonths = utils.getUpdateList(filtered, this.props.year)
        if (!allMonths) return

        // filtra por mês
        const filterByMonth = allMonths[this.props.monthID]


        // valor inicial (total do ano inteiro)
        const totalYear = utils.calcYearRevenue(filtered, this.props.year)

        if (filterByMonth) return filterByMonth

        return totalYear
    }

    calcProfit() {
        const totRevenue = this.calcTotal('revenue')
        const totProfit = this.calcTotal('profit')

        // p = menor * 100 / maior
        const profitPercent = (((totProfit * 100) / totRevenue) * 10).toFixed(2)

        let hundredPercent = 100
        let realPercent = (hundredPercent - profitPercent).toFixed(2)

        this.setState({
            realPercent: realPercent,
            profitPercent: profitPercent
        })

    }

    render() {
        return (
            <aside className='aside__right'>
                <nav className='nav__filters'>
                    <Link className='btn' to="/rca/revenue" onClick={this.load}>Faturamento</Link>
                    <Link className='btn' to="/rca/positivation" onClick={this.load}>Positivação</Link>
                    <Link className='btn' to="/rca/mix" onClick={this.load}>Mix</Link>

                    <Link className='btn' to="/rca/devolution">Devolução</Link>
                    <Link className='btn' to="/rca/profit">Lucro</Link>
                    <Link className='btn' to="/cities">Cidades</Link>
                    <Link className='btn' to="/">Clientes</Link>
                </nav>

                <div className="data__containers">
                    <div className='container'>
                        <Graphic
                            getMonthID={this.getMonthID}
                            filteredData={this.state.filteredData}
                            unfilteredData={this.state.unfilteredData}
                            url={this.state.url}
                            rca={this.props.rca}
                            year={this.props.year}
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
                                    {utils.formatNumbers(this.state.positivation)}
                                </span>
                            </div>
                        </div>
                        <div className="circle__graphic">
                            <h5>Média</h5>
                            <div className='graphic'>
                                <div 
                                    style={{
                                        backgroundImage: `conic-gradient(yellow ${this.state.realPercent}%, crimson ${this.state.profitPercent}%)`
                                    }}
                                    className="circle"
                                >

                                </div>
                                <div className='circle_percents'>
                                <div className='percent'>
                                        <span>Faturamento</span>
                                        <span>{this.state.realPercent}%</span>
                                        <div className='square' style={{backgroundColor: 'yellow'}}>

                                        </div>
                                    </div>
                                    <div className='percent'>
                                        <span>Lucro</span>
                                        <span>{this.state.profitPercent}%</span>
                                        <div className='square'>

                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                        <div className='aside__infos'>
                            <div className="minibox">
                                <h5>Mix</h5>
                                <span>
                                    {utils.formatNumbers(this.state.mix)}
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