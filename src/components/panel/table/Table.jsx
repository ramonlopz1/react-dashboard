import styles from './Table.module.css'

export default function Table(props) {
    return (
        <table className={styles.panel__table}>
            <thead>
                <tr>
                    <th>Operação</th>
                    <th>Última Atualização</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Faturamento</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Devolução</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Positivação</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Mix</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Pedido</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Cliente</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Cidade</td>
                    <td>12/05/2022</td>
                </tr>
                <tr>
                    <td>Produto</td>
                    <td>12/05/2022</td>
                </tr>
            </tbody>
        </table>
    )
}