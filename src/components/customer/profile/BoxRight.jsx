import './BoxRight.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function BoxRight(props) {

    useEffect(() => {
        console.log(props.customer)
    })

    return (
        <div className="box right">
            <div className="tabs">
                <Link state={{ type: 'revenue' }} className='tab' to={`/customers/profile/revenue`}>Faturamento</Link>
                <Link state={{ type: 'devo' }} className='tab' to="/customers/profile/devolution">Devoluções</Link>
                <Link className='tab' to="/">Lucro</Link>
                <Link className='tab' to="/">Pagamentos</Link>
                <Link className='tab' to="/">Atrasos</Link>
            </div>
            {props.childs}
            
        </div>
    )
}