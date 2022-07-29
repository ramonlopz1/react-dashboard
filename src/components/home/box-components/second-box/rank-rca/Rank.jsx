import styles from './Rank.module.css'
import rankUtils from './rankUtils.js'
import { useState, useEffect } from 'react'

export default function Rank(props) {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/rca')
            .then(data => data.json()).then(data => rankUtils.bestNumbers(data))

    }, [])


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
                    <tr>
                        <td>1</td>
                        <td>Dina</td>
                        <td className={styles.wins}>
                            <span>F</span>
                            <span>M</span>
                            <span>P</span>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Daniel</td>
                        <td className={styles.wins}>
                            <span>F</span>
                            <span>M</span>
                            <span>P</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}