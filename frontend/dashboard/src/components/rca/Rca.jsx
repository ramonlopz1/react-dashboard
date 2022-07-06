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
            list: [],
            url: this.props.url,
            rca: "elias"
        }

    
        // permite que ao chamado o método changeRCA no componentChild
        // ele garantirá que será executado exatamente no componentFather
        this.changeRCA = this.changeRCA.bind(this)
        this.load = this.load.bind(this)
    }
    
    async componentDidMount() {
        const res = await fetch(`http://localhost:3000/rca`)
        let data = await res.json()

        // dina, elias, joao...
        const rca = data?.[this.state.rca]
        
        // revenue, devolution, positivation...
        data = rca?.[this.props.url]
        
        this.setState({
            list: data,
            url: this.props.url
        })
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
                <LeftAside 
                    changeRCA={this.changeRCA} 
                    list={this.state.list}
                    url={this.props.url} 
                    rca={this.state.rca} 
                />
                <AsideRight
                    list={this.state.list}
                    url={this.props.url} 
                    rca={this.state.rca} 
                    title={this.props.title}
                />
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