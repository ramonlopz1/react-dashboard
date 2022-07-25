import styles from './ResumeYear.module.css'
import Box from './Box'

export default function ResumeYear(props) {
    return (
        <div className={styles.resumes}>
            <Box label="Faturamento"/>
            <Box label="Pedidos"/>
            <Box label="Positivação"/>
            <Box label="Clientes"/>
        </div>
    )
}