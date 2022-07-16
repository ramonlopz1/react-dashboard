import './CustomerProfile.css'
import React, { useEffect, useState } from 'react'
import Main from '../../templates/main/Main'

import ContactInfos from './ContactInfos'
import BarsLoading from './BarsLoading'
import MiniCards from './MiniCards'

import { useLocation, Link } from 'react-router-dom'

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
                        <div className="box left">
                            <div className="box__infos">
                                <div className="rank">
                                    <div className="circle">
                                        38
                                    </div>
                                    <span>Rank</span>
                                </div>
                                <div className="data__resume">
                                    <h2>Pontuação</h2>
                                    <div className="points">
                                        <BarsLoading label="Pedidos" icon="cubes" />

                                        <BarsLoading label="Mix" icon="cart-arrow-down" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />
                                        <BarsLoading label="Mix" icon="home" />


                                    </div>
                                </div>
                            </div>
                            <div className="box__infos">
                                <div className='divleft'>
                                    <div className="greater">
                                        <h3>Maior compra</h3>
                                        <span>R$ 9.893,23</span>
                                    </div>
                                    <div className="worst">
                                        <h3>Menor compra</h3>
                                        <span>R$ 893,23</span>
                                    </div>
                                </div>
                                <div className='divright'>
                                    <div className="greater">
                                        <h3>Maior mix</h3>
                                        <span>893</span>
                                    </div>
                                    <div className="worst">
                                        <h3>Menor mix</h3>
                                        <span>93</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box__infos">
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />
                                <MiniCards title="Teste" value={32323} />


                                
                            </div>
                        </div>
                        <div className="box right">
                            <div className="tabs">
                                <Link state={{ type: 'revenue' }} className='tab' to={`/customers/profile/revenue`}>Faturamento</Link>
                                <Link state={{ type: 'devo' }} className='tab' to="/customers/profile/devolution">Devoluções</Link>
                                <Link className='tab' to="/">Lucro</Link>
                                <Link className='tab' to="/">Pagamentos</Link>
                                <Link className='tab' to="/">Atrasos</Link>
                            </div>
                            {props.children}
                        </div>
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