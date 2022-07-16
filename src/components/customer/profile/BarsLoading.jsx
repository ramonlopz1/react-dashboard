import './BarsLoading.css'

export default function BarsLoading(props) {
    return (
        <div className="box">
            <i className={`fa fa-${props.icon}`}></i>
            <div className="point">
                <span className="label">
                    {props.label}
                </span>
                <div className="bar__loading">
                    <div className="loading">

                    </div>

                </div>
            </div>
        </div>
    )
}