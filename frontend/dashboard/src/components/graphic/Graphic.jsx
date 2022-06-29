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

        const formatYearRevenue = (parseFloat(this.calcYearRevenue()).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        return (
            <LeftResume totalYearRevenue={formatYearRevenue} />
        )
    }

    renderRightResume() {

        // variável temporária: calcula a média mensal de faturamento
        let monthlyRevenueAverage = 0

        // variável temporária: calcula a média mensal taxa de crescimento
        let taxAvarege = 0 //

        const MonthlyAverage = this.getUpdateList(2020)

        if (MonthlyAverage) {

            // calcula a média de faturamento mensal e formata dezenas, centenas e milhares
            monthlyRevenueAverage = ((this.calcYearRevenue() / 12).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

            // finalmente define a taxa média de crescimento
            taxAvarege = (this.calcYearGrowthly() / 12).toFixed(2)
        }

        return (
            <RightResume title={this.props.title} revenueMonthlyAverage={monthlyRevenueAverage} growthMonthlyAverage={taxAvarege} />
        )
    }

    calcYearRevenue() {
        if (!this.state.list) return

        // array com faturamento mensal, que servirá de base para comparar os valores
        // e obter as taxas percentuais de crescimento, mês a mês.
        const MonthlyAverage = this.getUpdateList(2020)

        // variáveis temporária do faturamento total anual
        let totalRevenue = 0 //

        if (MonthlyAverage) {
            MonthlyAverage.forEach(avarege => {
                totalRevenue += avarege
            })

            return totalRevenue;
        }
    }

    calcYearGrowthly() {
        if (!this.state.list) return

        let monthlyGrowthlyAverage = 0
        let totalTaxAvarege = 0

        // array com faturamento mensal, que servirá de base para comparar os valores
        // e obter as taxas percentuais de crescimento, mês a mês.
        const MonthlyAverage = this.getUpdateList(2020)

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

        return totalTaxAvarege
    }

    getUpdateList(year) {
        if (!this.state.list) return
        // objectJSON[0] contém o array de anos 
        const objectWithYears = this.state.list[0]
        if (!objectWithYears?.[year.toString()]) return

        const arrayValues = Object.values(objectWithYears[year.toString()])

        return arrayValues
    }



    render() {
        return (
            <Main title={this.props.title}>
                {this.renderLeftResume()}
                {this.renderGraphic()}
                {this.renderRightResume()}
            </Main>
        )
    }
}

