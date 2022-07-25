import styles from './Box.module.css'

export default function Box(props) {
    return (
        <div className={styles.box}>
            <div className={styles.info}>
                <span className={styles.label}>{props.label}</span>
                <span className={styles.data}>R$ 123321</span>
            </div>
            <div className={styles.percent}>
                53%
            </div>
        </div>
    )
}