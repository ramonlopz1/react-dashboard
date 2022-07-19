import React from 'react';
import Main from '../templates/main/Main'


export default function Home (props) {

    if(props.headerON) {
        document.querySelector('.header.header')
        .style.display = 'flex'
    }

    return (
    <Main title="Início">
        
    </Main>

    )
}

    


