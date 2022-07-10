import React, { Component } from 'react'
import './AsideLeft.css'
import utils from '../graphics/util/utils'

const initialState = {
    revenue: 0,
    positivation: 0,
    mix: 0,
    devolution: 0,
    actives: 0,
    ticket: 0
}

export default class AsideLeft extends Component {

    changeRCA = ""

    constructor(props) {
        super(props)
        const { changeRCA } = props

        this.changeRCA = changeRCA

        this.state = {
            revenue: this.calcAvarege('revenue'),
            positivation: this.calcAvarege('positivation'),
            mix: this.calcAvarege('mix'),
            devolution: this.calcAvarege('devolution'),

            ...initialState
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.unfilteredData !== prevProps.unfilteredData) {

            const revenue = this.calcAvarege('revenue')
            const positivation = this.calcAvarege('positivation')
            const mix = this.calcAvarege('mix')
            const devolution = this.calcAvarege('devolution')

            this.setState({
                revenue: revenue,
                positivation: positivation,
                mix: mix,
                devolution: devolution
            })
        }
    }

    calcAvarege(filter) {

        // cria array de [revenue, positivation, mix...]
        const filtered = this.props.unfilteredData[filter]

        // filtra por ano [revenue, positivation, mix]
        const allMonths = utils.getUpdateList(filtered, 2021)
        if (!allMonths) return


        // valor inicial (total do ano inteiro)
        const totalYear = utils.calcYearRevenue(filtered, 2021)


        return totalYear / 12
    }

    render() {
        return (
            <aside className='aside__left'>
                <div className="container__top">
                    <div className="search__rca">
                        <select onChange={this.changeRCA} className='rca__name'>
                            <option className='rca' value="elias">Eliais Vieira Sobral</option>
                            <option className='rca' value="dina">Diná Maranhão</option>
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
                                {utils.formatNumbers(this.state.revenue)}
                            </div>
                        </div>
                        <div className="info">
                            <span className="label">
                                Positivação
                            </span>
                            <div className="data">
                                {utils.formatNumbers(this.state.positivation)}
                            </div>
                        </div>
                        <div className="info">
                            <span className="label">
                                Mix
                            </span>
                            <div className="data">
                            {utils.formatNumbers(this.state.mix)}
                            </div>
                        </div>
                        <div className="info">
                            <span className="label">
                                Devolução
                            </span>
                            <div className="data">
                            {utils.formatNumbers(this.state.devolution)}
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
        )
    }
}