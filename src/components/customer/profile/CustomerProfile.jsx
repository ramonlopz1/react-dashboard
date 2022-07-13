import './CustomerProfile.css'
import React from 'react'
import Main from '../../templates/main/Main'
import { useParams } from 'react-router-dom'

export default function CustomerProfile(props) {

    let { code } = useParams()
    console.log(code)

    return (
        <Main title={props.code}>

        </Main>
    )
}