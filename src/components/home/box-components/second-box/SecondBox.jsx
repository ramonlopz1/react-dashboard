import styles from './SecondBox.module.css'

export default function SecondBox() {
    return (
        <div className={styles.wrap}>
            <div className={styles.miniboxes}>
                <div className={styles.mbox}>
                    1
                </div>
                <div className={styles.mbox}>
                    2
                </div>
                <div className={styles.mbox}>
                    3
                </div>
            </div>
            <div className={styles.bigbox}>
                abc
            </div>
        </div>
    )
}