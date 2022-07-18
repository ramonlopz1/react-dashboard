import './CustomerProfile.css'
import React, { useEffect, useState } from 'react'
import Main from '../../templates/main/Main'

import ContactInfos from './ContactInfos'

import BoxLeft from './BoxLeft'
import BoxRight from './BoxRight'

import { useLocation } from 'react-router-dom'

export default function CustomerProfile(props) {

    const location = useLocation()
    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        setCustomer(location.state?.customer)

    }, [])

    

    const renderMainSection = () => {
        return (
            <section className='section__customerprofile'>
                <div className="container">
                    <div className="top__infos">
                        <div className="profilepic">

                        </div>
                        <h1>{customer?.name} </h1>
                    </div>
                    <div className="bottom__infos">

                        <h3>Informações de contato</h3>
                        <ContactInfos title="Email" value="jose@123.com.br" />
                        <ContactInfos title="Telefone" value="87 9 9823-9392" />
                        <ContactInfos title="Cidade" value="Manari" />
                        <ContactInfos title="Endereço" value="Rua de Tal, Nº 1234, Centro" />
                        <ContactInfos title="Rca" value="Elias" />
                    </div>
                </div>
                <div className="container">
                    <div className="boxes">
                        <BoxLeft />
                        <BoxRight childs={props.children} customer={customer} />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <Main title={customer?.code}>
            {renderMainSection()}
        </Main>
    )
}