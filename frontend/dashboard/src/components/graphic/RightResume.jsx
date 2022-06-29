import React from 'react';
import './RightResume.css';
const RightResume = props =>
    <aside className='aside__content right'>
        <div className="container">
            <h3>Média mensal</h3>
            <div className="container__infos">
                <h5>Faturamento médio mensal</h5>
                <span className='info__data'>
                    R$ {props.revenueMonthlyAverage}
                </span>
                <p className='info__data__sugestion'>Média ideal é de <strong>R$ 1.593.932,89</strong></p>
            </div>
            <div className="container__infos">
            <h5>Crescimento médio mensal</h5>
                <span className='info__data'>
                    % {props.growthMonthlyAverage}
                </span>
                <p className='info__data__sugestion'>Média ideal é de 19.32%</p>
            </div>
        </div>

    </aside>

export default RightResume;