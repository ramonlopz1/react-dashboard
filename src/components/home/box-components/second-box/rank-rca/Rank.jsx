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

    
    let cont = -1
    function getColors() {
        // filtra apenas os nomes do rankRevenue
        const rcaRank = Object.keys(state[0] || {})
        const winsByRcas = state[1]
    
        let colors = [];

        rcaRank.forEach(rcaRank => {
            
            winsByRcas.forEach((rca, idx) => {
                if (rcaRank === rca) {
                    colors.push("green")
                } else {
                    colors.push("red")
                }
            })
        })

        // ['green', 'green', 'red', 'red', 'red', 'green']
        
        return colors[++cont]
    }

    const renderRow = () => {
        // filtra apenas os nomes do rankRevenue
        const rcaRank = Object.keys(state[0] || {})

        return rcaRank.map((rca, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx}</td>
                    <td>{rca.toLocaleUpperCase()}</td>
                    <td className={styles.wins}>
                        <span style={{ color: getColors() }} className={styles.win} >F</span>
                        <span style={{ color: getColors() }} className={styles.win}>P</span>
                        <span style={{ color: getColors() }} className={styles.win}>M</span>
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