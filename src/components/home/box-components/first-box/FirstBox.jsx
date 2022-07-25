import styles from './FirstBox.module.css'
import ResumeYear from './resume-year/ResumeYear'

export default function FirstBox() {
    return (
        <div className={styles.wrap}>
            <aside className={styles.aside__left}>
                <h1>Bem vindo</h1>
                <ResumeYear/>
            </aside>
            <aside className={styles.aside__right}>

            </aside>
        </div>
    )
}