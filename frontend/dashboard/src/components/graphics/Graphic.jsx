import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../templates/main/Main'

import LeftResume from './LeftResume';
import RightResume from './RightResume';
import GraphColumn from './GraphColumn';

import Painel from './Painel';

import utils from './util/utils.js';

import './Graphic.css'

const initialState = {
    list: [],
    year: 2021
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
                <Link className='btns__graphic__data' to="/revenue" onClick={() => this.load('revenue')}>
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
                <Link className='btns__graphic__data' to="/order" onClick={() => this.load('order')}>
                    Pedidos
                </Link>
                <select onChange={() => { this.changeYear() }} className='filter__by__year'>
                    <option className='year' value="2021">2021</option>
                    <option className='year' value="2020">2020</option>
                </select>
            </div>
        )
    }

    // método para alterar o ano de filtro através do select
    changeYear() {
        const select = document.querySelector('.filter__by__year')
        const year = select.options[select.selectedIndex].value

        this.setState({
            year: year
        })
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

        const arrayValues = utils.getUpdateList(this.state.list, this.state.year);

        let greaterColumn = this.calcGreaterMonthly();

        let id = 0
        let columnSize = 0
        if (arrayValues) {
            return arrayValues.map(mounthValue => {

                // define quanto o menor representa em porcentagem, rem relação
                // ao maior
                // p = menor * 100 / maior
                columnSize = mounthValue * 100 / greaterColumn

                return (
                    <GraphColumn key={id++} columnsize={columnSize} value={utils.formatNumbers(mounthValue)}></GraphColumn>
                )
            })
        }
    }

    renderLeftResume() {
        const formatTotal = utils.formatNumbers(utils.calcYearRevenue(this.state.list, this.state.year));
        const formatGreater = utils.formatNumbers(this.calcGreaterMonthly());
        const formatWorst = utils.formatNumbers(utils.calcWorstMonthly(this.state.list, this.state.year));

        return (
            <LeftResume total={formatTotal} greater={formatGreater} worst={formatWorst} />
        )
    }

    renderRightResume() {

        // variável temporária: calcula a média mensal de faturamento
        let monthlyRevenueAverage = 0

        // variável temporária: calcula a média mensal taxa de crescimento
        let taxAvarege = 0 //

        const MonthlyAverage = utils.getUpdateList(this.state.list, this.state.year)

        if (MonthlyAverage) {

            // calcula a média de faturamento mensal e formata dezenas, centenas e milhares
            monthlyRevenueAverage = utils.formatNumbers((utils.calcYearRevenue(this.state.list, this.state.year) / 12))

            // finalmente define a taxa média de crescimento
            taxAvarege = (utils.calcYearGrowthly(this.state.list, this.state.year) / 12).toFixed(2)
        }

        return (
            <RightResume title={this.props.title} revenueMonthlyAverage={monthlyRevenueAverage} growthMonthlyAverage={taxAvarege} />
        )
    }


    // calcula o melhor mês
    calcGreaterMonthly() {
        const MonthlyAverage = utils.getUpdateList(this.state.list, this.state.year)

        if (!MonthlyAverage) return

        const greater = MonthlyAverage.reduce((prev, curr) => {
            return prev > curr ? prev : curr
        })

        return greater;
    }



    renderPainel() {


        return (
            <Painel state={this.state} />
        )
    }

    render() {

        return (
            <Main title={this.props.title}>
                <section className='content_children graphic'>
                    {this.renderLeftResume()}
                    {this.renderGraphic()}
                    {this.renderRightResume()}
                </section>

                {this.renderPainel()}

            </Main>
        )
    }
}

