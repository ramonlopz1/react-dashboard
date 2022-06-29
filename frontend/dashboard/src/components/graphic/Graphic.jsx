import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../templates/main/Main'

import LeftResume from './LeftResume';
import RightResume from './RightResume';
import GraphColumn from './GraphColumn';
import './Graphic.css'

const initialState = {
    list: []
}

export default class Graphic extends Component {

    state = {
        ...initialState,
    }

    async componentDidMount() {
        fetch(`http://localhost:3000/${this.props.url}`)
            .then(res => res.json()).then(res => {
                this.setState({
                    list: res
                })
            })
    }

    async load(url) {
        let data = await fetch(`http://localhost:3000/${url}`)
        data = await data.json()

        this.setState({
            list: data
        })

    }

    renderGraphic() {
        return (

            <div className="wrapper__container">
                <div className="buttons___filter">
                    <Link to="/revenue" onClick={() => this.load('revenue')}>
                        Faturamento
                    </Link>
                    <Link to="/devolution" onClick={() => this.load('devolution')}>
                        Devolução
                    </Link>
                </div>
                <div className='graph__container'>

                    <div className='columns'>
                        {this.renderGraphicColumn()}
                    </div>

                    <div className="meses">
                        <span className="mes">Jan</span>
                        <span className="mes">Fev</span>
                        <span className="mes">Mar</span>
                        <span className="mes">Abr</span>
                        <span className="mes">Mai</span>
                        <span className="mes">Jun</span>
                        <span className="mes">Jul</span>
                        <span className="mes">Ago</span>
                        <span className="mes">Set</span>
                        <span className="mes">Out</span>
                        <span className="mes">Nov</span>
                        <span className="mes">Dez</span>
                    </div>
                </div>
            </div>
        )
    }


    getUpdateList(year) {
        if (!this.state.list) return
        // objectJSON[0] contém o array de anos 
        const objectWithYears = this.state.list[0]
        if (!objectWithYears?.[year.toString()]) return

        const arrayValues = Object.values(objectWithYears[year.toString()])

        return arrayValues
    }

    renderGraphicColumn() {

        const arrayValues = this.getUpdateList(2020);

        let id = 0

        if (arrayValues) {
            return arrayValues.map(mounthValue => {
                return (
                    <GraphColumn key={id++} value={mounthValue}></GraphColumn>
                )
            })
        }
    }

    renderLeftResume() {
        return (
            <LeftResume totalRevenue={'0232'}/>
        )
    }

    renderRightResume() {
        if (!this.state.list) return

        // array com faturamento mensal, que servirá de base para comparar os valores
        // e obter as taxas percentuais de crescimento, mês a mês.
        const MonthlyAverage = this.getUpdateList(2020)

        // variáveis temporária do faturamento total anual e da venda (média) mensal
        let totalRevenue = 0 //
        let monthlyRevenueAverage = 0

        // variáveis temporária do crescimento total anual e da venda (média) mensal
        let taxAvarege = 0 //
        let monthlyGrowthlyAverage = 0
        let totalTaxAvarege = 0

        if (MonthlyAverage) {
            MonthlyAverage.forEach(avarege => {
                totalRevenue += avarege
            })

            // calcula a média de faturamento mensal
            monthlyRevenueAverage = totalRevenue / 12

            // calcula a média de crescimento mensal

            // cria array com taxa média de crescimento mensal
            let monthlyGrowthlyArray = []
            MonthlyAverage.reduce((previous, current, index) => {
                // calcula a taxa de crescimento entre o mês anterior e o atual
                monthlyGrowthlyAverage = ((current / previous) * 100) - 100
                
                // cria Array com todas as taxas de crescimento mensais
                monthlyGrowthlyArray.push(monthlyGrowthlyAverage)

                // retorna o valor atual do Array, para o reduce
                const lastValueOperated = MonthlyAverage[index]

                return lastValueOperated
            })

            // soma todos os valores do Array de taxas de crescimento mensais
            monthlyGrowthlyArray.forEach(avarege => {
                totalTaxAvarege += avarege
            })

            // finalmente define a taxa média de crescimento
            taxAvarege = (totalTaxAvarege / 12).toFixed(2)
        }

        return (
            <RightResume revenueMonthlyAverage={monthlyRevenueAverage} growthMonthlyAverage={taxAvarege} />
        )
    }

    render() {
        return (
            <Main title={this.props.title}>
                <LeftResume />
                {this.renderGraphic()}
                {this.renderRightResume()}
            </Main>
        )
    }
}

