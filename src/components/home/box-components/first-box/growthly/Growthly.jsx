import styles from './Growthly.module.css'
import { useEffect } from 'react';

export default function Growthly(props) {

    return (
        <div className={styles.growthly}>
            <h1>Crescimento</h1>
            <div className={styles.circle}>
                <span className={styles.percent}>
                    25%
                </span>
            </div>
        </div>
    )
}