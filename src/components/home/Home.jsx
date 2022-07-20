import React from 'react';
import Main from '../templates/main/Main'
import Header from '../templates/header/Header';


export default function Home(props) {

    if (props.headerON) {
        document.querySelector('.header.header')
            .style.display = 'flex'
    }

    return (
        <>
            <Header />
            <Main title="Início">

            </Main>
        </>
    )
}




