import './CustomerNumbers.css'

import BoxLeft from './boxleft/BoxLeft'
import BoxRight from './boxright/BoxRight'

export default function CustomerNumbers(props) {

    return (
        <div className="container">
            <div className="boxes">
                <BoxLeft />
                <BoxRight childs={props.childs} customer={props.customer} />
            </div>
        </div>
    )
}