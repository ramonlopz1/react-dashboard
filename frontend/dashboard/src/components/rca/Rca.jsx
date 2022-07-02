import React, { Component } from 'react';
import './Rca.css'

import Main from '../templates/main/Main';

export class Rca extends Component {

    renderMainSection() {
        return (
            <section className="section__rca">
                <aside className='aside__left'>
                    <div className="container__top">
                        <div className='circle'>

                        </div>
                        <h4>Maria Josefa Pereira</h4>
                    </div>
                    <div className="container__bottom">

                    </div>
                </aside>
                <aside className='aside__right'>
                    <div className='container'>

                    </div>
                    <div className='container'>

                    </div>
                </aside>
            </section>
        )
    }

    render() {
        return (
            <Main title={this.props.title} >
                {this.renderMainSection()}
            </Main>
        )
    }
}