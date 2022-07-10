import React, { Component } from 'react';
import './Painel.css'

import utils from './util/utils'

const initialState = {
    list: [],
    year: 2021,
    mounth: 0,
    valueRevenue: 0,
    valueDevolution: 0,
    valuePositivation: 0,
    valueMix: 0,
}

export default class Painel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...initialState,
            year: this.props.year
        }

    }

    // se a props for alterada, o elemento será rerenderizado
    componentDidUpdate(prevProps) {
        if (this.props.year !== prevProps.year) {
            this.setState({
                year: parseInt(this.props.year)
            })

            this.reload()
        }
    }

    // renderiza o elemento quando for construído
    async componentDidMount() {
        fetch(`http://localhost:3000/revenue`)
            .then(data => data.json())
            .then(data => {
                // setInterval(() => {
                this.setState({
                    list: data,
                    year: this.props.year
                })
                // }, 1000)
            })

        this.reload()
    }

    async getRevenue() {
        const arr = await this.filterData('revenue')
        this.setState({
            valueRevenue: arr[this.state.mounth]
        })
    }

    async getDevolution() {
        const arr = await this.filterData('devolution')
        this.setState({
            valueDevolution: arr[this.state.mounth]
        })
    }

    async getPositivation() {
        const arr = await this.filterData('positivation')
        this.setState({
            valuePositivation: arr[this.state.mounth]
        })
    }

    async getMix() {
        const arr = await this.filterData('mix')
        this.setState({
            valueMix: arr[this.state.mounth]
        })
    }

    changeMouth(mounth) {
        this.setState({
            mounth: mounth,
            year: this.props.year
        })

        this.reload()

        document.querySelector('.painel__btns__container .btn:nth-of-type(1)').classList.remove('focus')
    }

    reload() {
        this.getRevenue()
        this.getDevolution()
        this.getPositivation()
        this.getMix()
    }

    async filterData(url) {
        let data = await fetch(`http://localhost:3000/${url}`)
        data = await data.json()

        const arr = utils.getUpdateList(data, this.props.year)
        return arr
    }

    render() {
        return (
            <section className='content_children painel'>
                <div className='painel__btns'>
                    <div className="painel__btns__container">
                        <button onClick={() => { this.changeMouth(0) }} className="btn focus">Jan</button>
                        <button onClick={() => { this.changeMouth(1) }} className="btn">Fev</button>
                        <button onClick={() => { this.changeMouth(2) }} className="btn">Mar</button>
                        <button onClick={() => { this.changeMouth(3) }} className="btn">Abr</button>
                        <button onClick={() => { this.changeMouth(4) }} className="btn">Mai</button>
                        <button onClick={() => { this.changeMouth(5) }} className="btn">Jun</button>
                        <button onClick={() => { this.changeMouth(6) }} className="btn">Jul</button>
                        <button onClick={() => { this.changeMouth(7) }} className="btn">Ago</button>
                        <button onClick={() => { this.changeMouth(8) }} className="btn">Set</button>
                        <button onClick={() => { this.changeMouth(9) }} className="btn">Out</button>
                        <button onClick={() => { this.changeMouth(10) }} className="btn">Nov</button>
                        <button onClick={() => { this.changeMouth(11) }} className="btn">Dez</button>
                    </div>
                </div>
                <div className='container'>
                    <div className="boxes">
                        <i className='fa fa-shopping-cart'></i>
                        <div className='infos'>
                            <h3>Faturamento</h3>
                            <span>R$ {utils.formatNumbers(this.state.valueRevenue)}</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-warning'></i>
                        <div className='infos'>
                            <h3>Devolução</h3>
                            <span>R$ {utils.formatNumbers(this.state.valueDevolution)}</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-address-book-o'></i>
                        <div className='infos'>
                            <h3>Positivação</h3>
                            <span>{this.state.valuePositivation}</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-cube'></i>
                        <div className='infos'>
                            <h3>Mix</h3>
                            <span>{this.state.valueMix}</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-book'></i>
                        <div className='infos'>
                            <h3>Pedidos</h3>
                            <span>1339</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-money'></i>
                        <div className='infos'>
                            <h3>Ticket Médio</h3>
                            <span>R$ 22.939,89</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-trash-o'></i>
                        <div className='infos'>
                            <h3>Avaria</h3>
                            <span>R$ 22.939,89</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-truck'></i>
                        <div className='infos'>
                            <h3>Entregas</h3>
                            <span>9399</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}