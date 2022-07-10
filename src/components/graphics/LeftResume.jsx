import React, { Component } from 'react';
import './LeftResume.css'

export default class LeftResume extends Component {



    render() {


        return (
            <aside className='aside__content left'>

                <div className="container">

                    <div className="container__infos">
                        <span className='info'>Total</span>
                        <div className='infos__data'>R$ {this.props.total}</div>
                    </div>
                    <div className="container__infos">
                        <span className='info'>Maior mês</span>
                        <div className='infos__data'>R$ {this.props.greater}</div>
                    </div>
                    <div className="container__infos">
                        <span className='info'>Menor mês</span>
                        <div className='infos__data'>R$ {this.props.worst}</div>
                    </div>
                    <div className="container__infos">
                        <span className='info'>Mix</span>
                        <div className='infos__data'>8329</div>
                    </div>
                </div>
            </aside>
        )
    }
}