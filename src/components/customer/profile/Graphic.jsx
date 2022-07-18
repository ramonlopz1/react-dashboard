import React, { Component } from 'react';
import utils from '../../graphics/util/utils';

import GraphColumn from './GraphColumn';

import './Graphic.css'

const initialState = {
    filteredData: [],
    unfilteredData: [],
    year: 2021,
    url: "revenue",
    rca: "elias"
}

export default class Graphic extends Component {


    constructor(props) {
        super(props)


        this.state = {
            ...initialState,
            url: 'revenue',
            year: 2020
        }
    }

    async componentDidMount() {
        let data = await fetch('http://localhost:3000/revenue')
        data = await data.json()
        this.setState({
            unfilteredData: data,
            filteredData: data?.['revenue']
        })
    }


    renderGraphic() {

        return (
            <div className="wrapper__container">
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

    calcGrowthly() {
        const filtered = this.state.unfilteredData[this.state.url]

        const totGrowthlyArr = utils.calcYearGrowthly(filtered, this.state.year, true)
        // const avgGrowthly = (totGrowthly / 12).toFixed(2)

        return totGrowthlyArr
    }

    renderGraphicColumn() {
        const [filteredData, year] = [this.state.filteredData, this.state.year]

        const arrayValues = utils.getUpdateList(filteredData, year);

        let greaterColumn = utils.calcGreaterMonthly(filteredData, year);
        const calcGrowthly = this.calcGrowthly()

        let k = 0
        let id = 0
        let columnSize = 0

        if (arrayValues) {
            return arrayValues.map((monthValue, idx) => {

                // define quanto o menor representa em porcentagem, rem relação
                // ao maior
                // p = menor * 100 / maior
                columnSize = monthValue * 100 / greaterColumn

                return (
                    <GraphColumn
                        monthGrowthly={calcGrowthly[idx]}
                        id={id++}
                        key={k++}
                        columnsize={columnSize}
                        value={utils.formatNumbers(monthValue)}>
                    </GraphColumn>
                )
            })
        }
    }


    render() {
        return (
            <section className='content_children rca__graphic'>
                {this.renderGraphic()}
            </section>
        )
    }
}

