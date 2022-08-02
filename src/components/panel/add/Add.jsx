import styles from './Add.module.css'
import { Link } from 'react-router-dom'

export default function Add(props) {
    return (
        <Link to="/" className={styles.link}>
            <i className={`fa fa-${props.icon} ${styles.icon}`}></i>
            <span>Add {props.label}</span>
        </Link>
    )
}