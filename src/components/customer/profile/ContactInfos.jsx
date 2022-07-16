import './ContactInfos.css'

export default function ContactInfos(props) {
    return (
        <div className="info">
            <span className="spanlabel">{props.title}</span>
            <span className='spaninfo'>{props.value}</span>
        </div>
    )
}