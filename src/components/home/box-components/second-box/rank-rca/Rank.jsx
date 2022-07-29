import styles from './Rank.module.css'
import rankUtils from './rankUtils.js'
import { useState, useEffect } from 'react'

export default function Rank(props) {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/rca')
            .then(data => data.json()).then(data => {
                const ranks = rankUtils.bestNumbers(data)
                setState(ranks)
            })
    }, [])






    const renderRow = () => {
        // filtra apenas os nomes do rankRevenue
        const rcaRank = Object.keys(state[0] || {})
        const winsByRcas = state[1]
        let winColor;

        rcaRank.forEach(rcaRank => {
            winsByRcas.forEach((rca, idx) => {
                if (rcaRank === rca) {
                    console.log(rcaRank, rca)
                    winColor = {
                        color: "green"
                    }
                } else {
                    winColor = {
                        color: "red"
                    }
                }
            })
        })



        return rcaRank.map((rca, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx}</td>
                    <td>{rca}</td>
                    <td className={styles.wins}>
                        <span style={{ ...winColor }} className={styles.win} >F</span>
                        <span style={{ ...winColor }} className={styles.win}>P</span>
                        <span style={{ ...winColor }} className={styles.win}>M</span>
                    </td>
                </tr>
            )
        })


    }

    return (
        <div className={styles.wrap__table}>
            <table className={styles.rank__rca}>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>RCA</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRow()}

                </tbody>
            </table>
        </div>
    )
}