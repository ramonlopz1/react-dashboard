import './GreatWorst.css'

export default function GreatWorst(props) {
    return (
        <div className='subcontainer'>
            <div className="greater">
                <h3>Maior {props.title}</h3>
                <span>{props.value}</span>
            </div>
            <div className="worst">
                <h3>Menor {props.title}</h3>
                <span>{props.value}</span>
            </div>
        </div>
    )
}