import React from 'react';
import './Painel.css'

const Painel = props =>
    <section className='content_children painel'>
        <div className='painel__btns'>
            <div className="painel__btns__container">
                <button className="btn">Jan</button>
                <button className="btn">Fev</button>
                <button className="btn">Mar</button>
                <button className="btn">Abr</button>
                <button className="btn">Mai</button>
                <button className="btn">Jun</button>
                <button className="btn">Jul</button>
                <button className="btn">Ago</button>
                <button className="btn">Set</button>
                <button className="btn">Out</button>
                <button className="btn">Nov</button>
                <button className="btn">Dez</button>
            </div>
        </div>
        <div className='container'>
            <div className="boxes">1</div>
            <div className="boxes">2</div>
            <div className="boxes">3</div>
            <div className="boxes">4</div>
            <div className="boxes">5</div>
            <div className="boxes">6</div>
            <div className="boxes">7</div>
            <div className="boxes">8</div>
        </div>
    </section>

export default Painel;