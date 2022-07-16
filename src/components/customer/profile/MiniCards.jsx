import './MiniCards.css'

export default function MiniCards(props) {
    return (
        <div className="minicards">
            <i className='fa fa-home'></i>
            <h4>{props.title}</h4>
            <span>{props.value}</span>
        </div>
    )
}