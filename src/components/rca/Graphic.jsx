import React, { Component } from 'react';
import utils from '../../components/graphics/util/utils';

import GraphColumn from './GraphColumn';

import './Graphic.css'

const initialState = {
    filteredData: [],
    year: 2021,
    url: "",
    rca: "elias"
}

export default class Graphic extends Component {
    
    getMonthID = ""
    
    constructor(props) {
        super(props)

        const { getMonthID } = props
        this.getMonthID = getMonthID

        this.state = {
            ...initialState,
            filteredData: this.props.filteredData,
            url: this.props.url
        }
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
        const [filteredData, year] = [this.props.filteredData, this.state.year]

        const arrayValues = utils.getUpdateList(filteredData, year);

        let greaterColumn = utils.calcGreaterMonthly(filteredData, year);

        
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
                        getMonthID={this.getMonthID}
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
                <h1>{this.props.title}</h1>
                {this.renderGraphic()}
            </section>
        )
    }
}

