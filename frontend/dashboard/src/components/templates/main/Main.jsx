import React from 'react';
import './Main.css';

const Main = props =>
    <main className='main__section'>
        <h1>{props.title}</h1>
        {props.children}
    </main>

export default Main;