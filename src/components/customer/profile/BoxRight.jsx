import './BoxRight.css'
import { Link } from 'react-router-dom'

export default function BoxRight(props) {


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