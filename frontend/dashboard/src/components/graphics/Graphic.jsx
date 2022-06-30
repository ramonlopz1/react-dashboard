import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../templates/main/Main'

import LeftResume from './LeftResume';
import RightResume from './RightResume';
import GraphColumn from './GraphColumn';

import Painel from './Painel';

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

    renderButtons() {
        return (
            <div className="buttons___filter">
                    <Link  className='btns__graphic__data' to="/revenue" onClick={() => this.load('revenue')}>
                        Faturamento
                    </Link>
                    <Link className='btns__graphic__data' to="/devolution" onClick={() => this.load('devolution')}>
                        Devolução
                    </Link>
                    <Link className='btns__graphic__data' to="/positivation" onClick={() => this.load('positivation')}>
                        Positivação
                    </Link>
                    <Link className='btns__graphic__data' to="/mix" onClick={() => this.load('mix')}>
                        Mix
                    </Link>
                    <Link className='btns__graphic__data' to="/order" onClick={() => this.load('mix')}>
                        Pedidos
                    </Link>
                </div>
        )
    }

    renderGraphic() {
        return (
            <div className="wrapper__container">
                {this.renderButtons()}
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
        
        let  greaterColumn = this.calcGreaterMonthly();
        
        let id = 0
        let columnSize = 0
        if (arrayValues) {
            return arrayValues.map(mounthValue => {
                
                // define quanto o menor representa em porcentagem, rem relação
                // ao maior
                // p = menor * 100 / maior
                columnSize = mounthValue * 100 / greaterColumn
                
                return (
                    <GraphColumn key={id++} columnsize={columnSize} value={this.formatNumbers(mounthValue)}></GraphColumn>
                )
            })
        }
    }

    renderLeftResume() {
        const formatTotal = this.formatNumbers(this.calcYearRevenue());
        const formatGreater = this.formatNumbers(this.calcGreaterMonthly());
        const formatWorst = this.formatNumbers(this.calcWorstMonthly());

        return (
            <LeftResume total={formatTotal} greater={formatGreater} worst={formatWorst} />
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
            monthlyRevenueAverage = this.formatNumbers((this.calcYearRevenue() / 12))

            // finalmente define a taxa média de crescimento
            taxAvarege = (this.calcYearGrowthly() / 12).toFixed(2)
        }

        return (
            <RightResume title={this.props.title} revenueMonthlyAverage={monthlyRevenueAverage} growthMonthlyAverage={taxAvarege} />
        )
    }

    // calcula o crescimento total anual
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

    // calcula a taxa de crescimento total anual
    calcYearGrowthly() {
        if (!this.state.list) return

        let monthlyGrowthlyAverage = 0
        let totalTaxAvarege = 0
        
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
            totalTaxAvarege += avarege;
        })

        return totalTaxAvarege;
    }

    // calcula o melhor mês
    calcGreaterMonthly() {
        const MonthlyAverage = this.getUpdateList(2020)

        if(!MonthlyAverage) return

        const greater = MonthlyAverage.reduce((prev, current) => {
            return prev > current ? prev : current
        })
        
        return greater;
    }

    // calcula o pior mês
    calcWorstMonthly() {
        const MonthlyAverage = this.getUpdateList(2020)

        if(!MonthlyAverage) return

        const worst = MonthlyAverage.reduce((prev, current) => {
            return prev < current ? prev : current
        })
        
        return worst;
    }

    // formata números para renderização
    formatNumbers(number) {
        const formattedNumber = 
            parseFloat(number)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        return formattedNumber;
    }

    // retorna lista atualizada
    getUpdateList(year) {
        if (!this.state.list) return
        // objectJSON[0] contém o array de anos 
        const objectWithYears = this.state.list[0];
        if (!objectWithYears?.[year.toString()]) return

        const arrayValues = Object.values(objectWithYears[year.toString()]);

        return arrayValues;
    }

    render() {
        return (
            <Main title={this.props.title}>
                <section className='content_children graphic'>
                    {this.renderLeftResume()}
                    {this.renderGraphic()}
                    {this.renderRightResume()}
                </section>

                <Painel/>
                
            </Main>
        )
    }
}

