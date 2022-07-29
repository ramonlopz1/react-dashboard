import styles from './Rank.module.css'
import utils from '../../../../graphics/util/utils.js'
import { useState, useEffect } from 'react'

export default function Rank(props) {

    const [state, setState] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/rca')
            .then(data => data.json()).then(data => bestRevenues(data))

    }, [])

    const bestRevenues = (data) => {
        
        const totalList = {}
        const dataEntries = Object.entries(data)

        dataEntries.forEach(rca => {
            const name = rca[0]
            const rcaData = rca[1]?.revenue
            
            const totalRevenue = utils.calcYearRevenue(rcaData, 2021)
            totalList[name] = totalRevenue
        })
        
        const rankRevenue = Object.fromEntries(
            Object.entries(totalList).sort(([,a],[,b]) => b-a)
        );
        console.log(rankRevenue)
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