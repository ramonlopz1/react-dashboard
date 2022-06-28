import React from 'react';
import './Main.css';

const Main = props =>
    <main className='main__section'>
        <aside className='aside__content'>
            <h1>Relatório</h1>
            <div className="container">
                <div className="container__infos">
                    <span className='info'>Faturamento</span>
                    <div className='infos__data'>R$ 9.238.232,89</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Devolução</span>
                    <div className='infos__data'>R$ 8.232,89</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Positivação</span>
                    <div className='infos__data'>232</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Mix</span>
                    <div className='infos__data'>R$ 8329</div>
                </div>
                

            </div>

            
        </aside>
        <aside className='graphic__section'>
            <h1>{props.title}</h1>
            {props.children}
        </aside>
        
    </main>

export default Main;