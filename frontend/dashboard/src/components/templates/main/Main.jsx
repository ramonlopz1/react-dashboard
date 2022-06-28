import React from 'react';
import './Main.css';

const Main = props =>
    <React.Fragment>
        <main className='main__section'>
            <h1>{props.title}</h1>
            {props.children}
        </main>
    </React.Fragment>

export default Main;