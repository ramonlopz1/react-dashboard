import React, { Component } from 'react';
import './Painel.css'

export default class Painel extends Component {

    state = {
        ...this.props.state
    }

    async componentDidMount() {
        fetch(`http://localhost:3000/revenue`)
            .then(res => res.json()).then(res => {
                this.setState({
                    list: res
                })
            })
    }



    render() {

        // mudar para setState e atribuir à uma função única
        // pois o render vai setar o state repetidademnte, atualizando
        // a página infinitamente
        // this.state = {
        //     ...this.props.state
        // }

        console.log(this.state)

        return (
            <section className='content_children painel'>
                <div className='painel__btns'>
                    <div className="painel__btns__container">
                        <button className="btn">Jan</button>
                        <button className="btn">Fev</button>
                        <button className="btn">Mar</button>
                        <button className="btn">Abr</button>
                        <button className="btn">Mai</button>
                        <button className="btn">Jun</button>
                        <button className="btn">Jul</button>
                        <button className="btn">Ago</button>
                        <button className="btn">Set</button>
                        <button className="btn">Out</button>
                        <button className="btn">Nov</button>
                        <button className="btn">Dez</button>
                    </div>
                </div>
                <div className='container'>
                    <div className="boxes">
                        <i className='fa fa-shopping-cart'></i>
                        <div className='infos'>
                            <h3>Faturamento</h3>
                            <span>R$ 932.939,89</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-warning'></i>
                        <div className='infos'>
                            <h3>Devolução</h3>
                            <span>R$ 32.939,89</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-address-book-o'></i>
                        <div className='infos'>
                            <h3>Positivação</h3>
                            <span>932</span>
                        </div>
                    </div>
                    <div className="boxes">
                        <i className='fa fa-cube'></i>
                        <div className='infos'>
                            <h3>Mix</h3>
                            <span>2939</span>
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