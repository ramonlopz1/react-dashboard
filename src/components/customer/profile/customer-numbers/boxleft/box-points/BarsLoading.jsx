import './BarsLoading.css'

export default function BarsLoading(props) {

    //p = menor * 100 / maior
    const reached = props.points / 1000
    const goal = ((reached + reached / 12))
    const percent = reached * 100  / goal
    
    return (
        <div className="box">
            <div className="icons">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
            <div className="point">
                <span className="label">
                    {props.label}
                </span>
                <div className="bar__loading">
                    <div className="loading" style={{width: `${percent}%`}}>

                    </div>

                </div>
            </div>
        </div>
    )
}