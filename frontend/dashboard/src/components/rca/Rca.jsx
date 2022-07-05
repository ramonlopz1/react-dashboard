import React, { Component } from 'react';
import './Rca.css';


import Main from '../templates/main/Main';
import LeftAside from './AsideLeft';
import AsideRight from './AsideRight';
export class Rca extends Component {

    a

    constructor(props) {
        super(props)

        this.state = {
            url: this.props.url,
            rca: "elias"
        }

       
    
        // permite que ao chamado o método changeRCA no componentChild
        // ele garantirá que será executado exatamente no componentFather
        this.changeRCA = this.changeRCA.bind(this)
        this.load = this.load.bind(this)
    }
    

    load() {
        this.setState({
            url: this.props.url
        })
        
    }

    changeRCA() {
        const select = document.querySelector('.rca__name')
        const rca = select.options[select.selectedIndex].value

        this.setState({
            rca: rca
        })
    }

    renderMainSection() {
        return (
            <section className="section__rca">
                <LeftAside changeRCA={this.changeRCA} />
                <AsideRight url={this.props.url} rca={this.state.rca} title={this.props.title}/>
            </section>
        )
    }

    render() {
        return (
            <Main title="Representante Comercial Autônomo" >
                {this.renderMainSection()}
            </Main>
        )
    }
}