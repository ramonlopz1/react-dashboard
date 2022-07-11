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
            unfilteredData: "",
            year: 2021,
            monthID: ""
        }

        // permite que ao chamado o método changeRCA no componentChild
        // ele garantirá que será executado exatamente no componentFather
        this.changeRCA = this.changeRCA.bind(this)
        this.changeYear = this.changeYear.bind(this)
        this.getMonthID = this.getMonthID.bind(this)
        this.load = this.load.bind(this)
    }

    // https://ramonlopz1.github.io/react-dashboard/db.json
    async componentDidMount() {
        let res = await fetch(`http://localhost:3000/rca`)
        res = await res.json()

        // retorna todos os dados do rca escolhido (this.state.rca)
        const unfilteredData = res?.[this.state.rca]
        
        // retorna os dados filtrados do rca escolhido (revenue, positivation...)
        let filteredData = unfilteredData?.[this.props.url]

        this.setState({
            filteredData: filteredData,
            url: this.props.url,
            unfilteredData: unfilteredData
        })
    }

    async componentDidUpdate(prevProps, prevState) {

        let res = await fetch(`http://localhost:3000/rca`)
        res = await res.json()

        // retorna todos os dados do rca escolhido (this.state.rca)
        const unfilteredData = res?.[this.state.rca]

        if(this.state.rca !== prevState.rca
            || this.state.year !== prevState.year) {

            this.setState({
                unfilteredData: unfilteredData
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

    changeYear() {
        const select = document.querySelector('.select__year')
        const year = select.options[select.selectedIndex].value
        
        this.setState({
            year: year
        })
    }

    renderMainSection() {

        return (
            <section className="section__rca">
                <AsideLeft
                    changeRCA={this.changeRCA}
                    changeYear={this.changeYear}
                    monthID={this.state.monthID}
                    unfilteredData={this.state.unfilteredData}
                    filteredData={this.state.filteredData}
                    year={this.state.year}
                />
                <AsideRight
                    getMonthID={this.getMonthID}
                    url={this.props.url}
                    rca={this.state.rca}
                    title={this.props.title}
                    monthID={this.state.monthID}
                    unfilteredData={this.state.unfilteredData}
                    filteredData={this.state.filteredData}
                    year={this.state.year}
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