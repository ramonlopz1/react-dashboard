import styles from './SecondBox.module.css'
import MBox from './top3/MBox'

export default function SecondBox() {
    return (
        <div className={styles.wrap}>
            <div className={styles.miniboxes}>
               <MBox 
                    title="Maior faturamento"
                    label="Dina"
                    data="R$323.323"/>
               <MBox 
                    title="Maior mix"
                    label="Elias"
                    data="623"/>
               <MBox 
                    title="Maior positivação"
                    label="Daniel"
                    data="93"/>
            </div>
            <div className={styles.bigbox}>
                abc
            </div>
        </div>
    )
}