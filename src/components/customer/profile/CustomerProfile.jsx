import './CustomerProfile.css'
import React from 'react'
import Main from '../../templates/main/Main'
import { useLocation, Link } from 'react-router-dom'

export default function CustomerProfile(props) {

    const location = useLocation()
    const { customer } = location.state

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
                        <div className="info">
                            <span className="spanlabel">Email</span>
                            <span className='spaninfo'>jose@123.com.br</span>
                        </div>
                        <div className="info">
                            <span className="spanlabel">Telefone</span>
                            <span className='spaninfo'>87 9 9823-9392</span>
                        </div>
                        <div className="info">
                            <span className="spanlabel">Cidade</span>
                            <span className='spaninfo'>Manari</span>
                        </div>
                        <div className="info">
                            <span className="spanlabel">Endereço</span>
                            <span className='spaninfo'>Rua de Tal, Nº 1234, Centro</span>
                        </div>
                        <div className="info">
                            <span className="spanlabel">Rca</span>
                            <span className='spaninfo'>Elias</span>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="boxes">
                        <div className="box left">
                            <div className="boxinfos">

                            </div>
                            <div className="boxinfos">
                                <div className='divleft'>

                                </div>
                                <div className='divright'>

                                </div>
                            </div>
                            <div className="boxinfos">

                            </div>
                        </div>
                        <div className="box right">
                            <div className="tabs">
                                <Link className='tab' to="/">Faturamento</Link>
                                <Link className='tab' to="/">Devoluções</Link>
                                <Link className='tab' to="/">Lucro</Link>
                                <Link className='tab' to="/">Pagamentos</Link>
                                <Link className='tab' to="/">Atrasos</Link>
                            </div>
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