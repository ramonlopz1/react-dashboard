import React from 'react';
import './Main.css';

const Main = props =>
    <main className='main__section'>
        <h1>{props.title}</h1>
        <aside className='content_children'>
            {props.children}
        </aside>
        
    </main>

export default Main;