import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import utils from '../../components/graphics/util/utils';

import Main from '../templates/main/Main'

import GraphColumn from './GraphColumn';

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
                <div className='graph__container'>
                    {this.renderButtons()}
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

    renderButtons() {
        return (
            <div className="buttons__filter">
                <Link className='btns__graphic__data' to="/rca/revenue" onClick={() => this.load('revenue')}>
                    Faturamento
                </Link>
                <Link className='btns__graphic__data' to="/rca/devolution" onClick={() => this.load('devolution')}>
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

    renderGraphicColumn() {
        const [list, year] = [this.state.list, this.state.year]

        const arrayValues = utils.getUpdateList(list, year);

        let greaterColumn = utils.calcGreaterMonthly(list, year);

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

 

    render() {
        return (
            <Main title={this.props.title}>
                <section className='content_children rca__graphic'>
                    {this.renderGraphic()}
                </section>
            </Main>
        )
    }
}

