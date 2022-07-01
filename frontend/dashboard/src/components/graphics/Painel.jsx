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
        //this.funcao = this.funcao.bind(this)
        this.state = {
            ...initialState,
            year: this.props.stateyear
        }

       
    }
   

    async componentDidMount() {

        fetch(`http://localhost:3000/revenue`)
            .then(data => data.json())
            .then(data => {
                this.setState({
                    list: data,
                    year: this.props.stateyear
                })
            })
          
    }
    
    componentDidUpdate() {
        if(this.state.year !== this.props.stateyear) {
            this.setState({
                year: this.props.stateyear
            })
        }
    }

    async getRevenue() {
        let data = await fetch(`http://localhost:3000/revenue`)
        data = await data.json()

        const arr = utils.getUpdateList(data, this.props.stateyear)

        this.setState({
            valueRevenue: arr[this.state.mounth]
        })
    }

    async getDevolution() {
        let data = await fetch(`http://localhost:3000/devolution`)
        data = await data.json()

        const arr = utils.getUpdateList(data, this.props.stateyear)

        this.setState({
            valueDevolution: arr[this.state.mounth]
        })
    }

    async getPositivation() {
        let data = await fetch(`http://localhost:3000/positivation`)
        data = await data.json()

        const arr = utils.getUpdateList(data, this.props.stateyear)

        this.setState({
            valuePositivation: arr[this.state.mounth]
        })
    }

    async getMix() {
        let data = await fetch(`http://localhost:3000/mix`)
        data = await data.json()

        const arr = utils.getUpdateList(data, this.props.stateyear)

        this.setState({
            valueMix: arr[this.state.mounth]
        })
    }

    setMounth(mounth) {
        this.setState({
            mounth: mounth
        })

        this.getRevenue()
        this.getDevolution()
        this.getPositivation()
        this.getMix()

    }

    // load(month) {


    //     const lista = utils.getUpdateList(this.state.list, this.props.stateyear)

    //     console.log(lista[month])
    // }

    render() {  
        

        return (
            <section className='content_children painel'>
                <div className='painel__btns'>
                    <div className="painel__btns__container">
                        <button onClick={() => { this.setMounth(0) }} className="btn">Jan</button>
                        <button onClick={() => { this.setMounth(1) }} className="btn">Fev</button>
                        <button onClick={() => { this.setMounth(2) }} className="btn">Mar</button>
                        <button onClick={() => { this.setMounth(3) }} className="btn">Abr</button>
                        <button onClick={() => { this.setMounth(4) }} className="btn">Mai</button>
                        <button onClick={() => { this.setMounth(5) }} className="btn">Jun</button>
                        <button onClick={() => { this.setMounth(6) }} className="btn">Jul</button>
                        <button onClick={() => { this.setMounth(7) }} className="btn">Ago</button>
                        <button onClick={() => { this.setMounth(8) }} className="btn">Set</button>
                        <button onClick={() => { this.setMounth(9) }} className="btn">Out</button>
                        <button onClick={() => { this.setMounth(10) }} className="btn">Nov</button>
                        <button onClick={() => { this.setMounth(11) }} className="btn">Dez</button>
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