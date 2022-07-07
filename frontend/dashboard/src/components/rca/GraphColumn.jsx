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

        return (

            <div className="graph__column">
                <span className='valor'>
                    {this.props.value}
                </span>

                <div 
                    onClick={this.getMonthID}
                    columnsize={this.props.columnsize} 
                    className='column' 
                    style={{ height: this.props.columnsize + "%" }}>
                </div>
            </div>
        )
    }
}


