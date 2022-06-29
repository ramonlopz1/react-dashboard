import React from 'react';
import './LeftResume.css'

const AsideResume = props => 
<aside className='aside__content left'>
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
                    <div className='infos__data'>8329</div>
                </div>
            </div>
</aside>

export default AsideResume;