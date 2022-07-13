import './CustomerProfile.css'
import React from 'react'
import Main from '../../templates/main/Main'
//import { useParams } from 'react-router-dom'

export default class CustomerProfile extends React.Component {

    // componentDidMount() {
    //    // this.getParams()
    // }

    // getParams() {
    //     const { code } = useParams
       
    // }

    render() {
        return (
            <Main title={this.props.code}>
                
            </Main>
        )
    }
}