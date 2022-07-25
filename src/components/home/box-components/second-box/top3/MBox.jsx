import styles from './MBox.module.css'

export default function MBox(props) {
    return (
        <div className={styles.mbox}>
            <h4>{props.title}</h4>
            <div className={styles.info}>
                <span className={styles.label}>{props.label}</span>
                <span className={styles.data}>{props.data}</span>
            </div>
        </div>
    )
}