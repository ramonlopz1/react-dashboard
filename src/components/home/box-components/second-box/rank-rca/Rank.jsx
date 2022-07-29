import styles from './Rank.module.css'
import rankUtils from './rankUtils.js'
import { useState, useEffect } from 'react'

export default function Rank(props) {

    const [state, setState] = useState([])
    const [winColor, setWinColor] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/rca')
            .then(data => data.json()).then(data => {
                const ranks = rankUtils.bestNumbers(data)
                setState(ranks)
            })
            colors()
    }, [])

    
    // o colors n está sendo chamado imediatamente
    // logo, as cores n estao sendo setas
    // e quando são, estão preenchendo todas Wins.
    const colors = () => {
        // filtra apenas os nomes do rankRevenue
        const rcaRank = Object.keys(state[0] || {})
        const winsByRcas = state[1]
        
        rcaRank.forEach(rcaRank => {
            winsByRcas.forEach((rca, idx) => {
                if (rcaRank === rca) {
                    
                    setWinColor({
                        color: "green"
                    })
                } else {
                    console.log(rca)
                    setWinColor({
                        color: "red"
                    })
                }
            })
        })
    }
    


    const renderRow = () => {
        // filtra apenas os nomes do rankRevenue
        const rcaRank = Object.keys(state[0] || {})

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