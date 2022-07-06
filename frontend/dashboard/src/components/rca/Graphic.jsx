import React, { Component } from 'react';
import utils from '../../components/graphics/util/utils';

import GraphColumn from './GraphColumn';

import './Graphic.css'

const initialState = {
    list: [],
    year: 2021,
    url: "",
    rca: "elias"
}

export default class Graphic extends Component {

    state = {
        ...initialState,
        list: this.props.list,
        url: this.props.url
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

    renderGraphicColumn() {
        const [list, year] = [this.props.list, this.state.year]

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
            <section className='content_children rca__graphic'>
                <h1>{this.props.title}</h1>
                {this.renderGraphic()}
            </section>
        )
    }
}

