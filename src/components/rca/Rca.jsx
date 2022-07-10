import React, { Component } from 'react';
import './Rca.css';

import Main from '../templates/main/Main';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';

export class Rca extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filteredData: [],
            url: this.props.url,
            rca: "elias",
            rcaAllData: "",
            monthID: ""
        }

        // permite que ao chamado o método changeRCA no componentChild
        // ele garantirá que será executado exatamente no componentFather
        this.changeRCA = this.changeRCA.bind(this)
        this.getMonthID = this.getMonthID.bind(this)
        this.load = this.load.bind(this)
    }

    async componentDidMount() {
        let res = await fetch(`http://localhost:3000/rca`)
        res = await res.json()

        // retorna todos os dados do rca escolhido (this.state.rca)
        const rcaAllData = res?.[this.state.rca]
        
        // retorna os dados filtrados do rca escolhido (revenue, positivation...)
        let filteredData = rcaAllData?.[this.props.url]

        this.setState({
            filteredData: filteredData,
            url: this.props.url,
            rcaAllData: rcaAllData
        })
    }

    async componentDidUpdate(prevProps, prevState) {

        let res = await fetch(`http://localhost:3000/rca`)
        res = await res.json()

        // retorna todos os dados do rca escolhido (this.state.rca)
        const rcaAllData = res?.[this.state.rca]

        if(this.state.rca !== prevState.rca) {

            this.setState({
                rcaAllData: rcaAllData
            })
        }
    }

    load() {
        this.setState({
            url: this.props.url,
        })

    }

    getMonthID(monthID) {
        this.setState({
            monthID: monthID
        })

    }

    changeRCA() {
        const select = document.querySelector('.rca__name')
        const rca = select.options[select.selectedIndex].value
        const fullName = select.options[select.selectedIndex].innerHTML

        this.setState({
            rca: rca
        })

        document.querySelector('.section__rca .circle')
            .style.backgroundImage = `url('http://localhost:3001/rca__perfil/profile_pic__${rca}.jpg')`

            document.querySelector('.section__rca h4')
                .innerHTML = fullName
    }

    renderMainSection() {

        return (
            <section className="section__rca">
                <AsideLeft
                    changeRCA={this.changeRCA}
                    monthID={this.state.monthID}
                    rcaAllData={this.state.rcaAllData}
                    filteredData={this.state.filteredData}
                    url={this.props.url}
                    rca={this.state.rca}
                />
                <AsideRight
                    getMonthID={this.getMonthID}
                    filteredData={this.state.filteredData}
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