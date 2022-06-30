import React from 'react';
import './LeftResume.css'

const AsideResume = props => 
<aside className='aside__content left'>
            <div className="container">
                <div className="container__infos">
                    <span className='info'>Total</span>
                    <div className='infos__data'>R$ {props.total}</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Maior mês</span>
                    <div className='infos__data'>R$ {props.greater}</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Menor mês</span>
                    <div className='infos__data'>R$ {props.worst}</div>
                </div>
                <div className="container__infos">
                    <span className='info'>Mix</span>
                    <div className='infos__data'>8329</div>
                </div>
            </div>
</aside>

export default AsideResume;