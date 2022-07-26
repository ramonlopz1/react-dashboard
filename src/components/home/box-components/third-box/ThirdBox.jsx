import styles from './ThirdBox.module.css'
import ComparativeGraphics from './comparative-graphic/ComparativeGraphic'

export default function ThirdBox(props) {
    return(
        <div className={styles.wrap}>
            <h3>Comparativo de vendas</h3>
            <ComparativeGraphics/>
        </div>
    )
}