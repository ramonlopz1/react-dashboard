import './CustomerProfile.css'
import React, { useEffect, useState } from 'react'

import Header from '../../templates/header/Header'
import Main from '../../templates/main/Main'

import CustomerAbout from './customer-infos/CustomerAbout'
import CustomerNumbers from './customer-numbers/CustomerNumbers'


import { useLocation } from 'react-router-dom'

export default function CustomerProfile(props) {

    const location = useLocation()
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        setCustomer(location.state?.customer)
    }, [location.state?.customer])

    const renderMainSection = () => {
        return (
            <section className='section__customerprofile'>
                <CustomerAbout customer={customer}/>

                <CustomerNumbers childs={props.children} customer={customer} />
            
            </section>
        )
    }

    return (
        <>
            <Header />
            <Main title={customer?.code}>
                {renderMainSection()}
            </Main>
        </>
    )
}