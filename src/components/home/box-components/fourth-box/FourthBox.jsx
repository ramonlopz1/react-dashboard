import styles from './FourthBox.module.css'
import RcaGraphic from './rca-graphic/RcaGraphic'

export default function FourthBox(props) {
    return(
        <div className={styles.wrap}>
            <h3>Comparativo de RCA's</h3>
            <RcaGraphic/>
        </div>
    )
}