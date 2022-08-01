import React, { Component } from 'react';
import './GraphColumn.css'

export default class GraphColumn extends Component {

    getMonthID = ""

    constructor(props) {
        super(props)

        const { getMonthID } = props

        this.getMonthID = getMonthID

        this.state = {
            value: this.props.value,
            columnsize: this.props.columnsize,
        }
    }

    render() {

        const monthGrowthly = (+this.props.monthGrowthly).toFixed(2)
        let clr = ""

        if (monthGrowthly > 0) {
            clr = 'green'
        }

        return (

            <div className="graph__column">
                <span className='value'>
                    {this.props.value}
                </span>

                <div
                    onClick={() => {
                        this.getMonthID(this.props.id)
                    }}
                    className='column'
                    style={{ height: this.props.columnsize + "%" }}
                >


                </div>
                <span className='grow' style={{ color: clr }}>{monthGrowthly}%</span>
            </div>
        )
    }
}


