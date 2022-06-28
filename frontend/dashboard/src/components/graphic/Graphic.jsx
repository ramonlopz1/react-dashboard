import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Main from '../templates/main/Main'
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
        )
    }

    renderGraphicColumn() {
        if (!this.state.list) return

        // objectJSON[0] contém o array de list 
        const objectWithYears = this.state.list[0]
        if (!objectWithYears?.['2020']) return

        const arrayValuesOfRevenue = Object.values(objectWithYears['2020'])

        let id = 0

        if (arrayValuesOfRevenue) {
            return arrayValuesOfRevenue.map(mounthValue => {
                return (
                    <GraphColumn key={id++} value={mounthValue}></GraphColumn>
                )
            })
        }
    }

    render() {
        return (
            <Main title={this.props.title}>
                {this.renderGraphic()}
                <Link to="/revenue" onClick={() => this.load('revenue')}>
                    Faturamento
                </Link>
                <Link to="/devolution" onClick={() => this.load('devolution')}>
                    Devolução
                </Link>
            </Main>
        )
    }
}

