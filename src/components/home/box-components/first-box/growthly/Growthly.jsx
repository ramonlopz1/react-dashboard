import styles from './Growthly.module.css'
import { Chart, registerables } from 'chart.js';
import { useEffect } from 'react';
Chart.register(...registerables)

export default function Growthly(props) {
    useEffect(() => {
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    })

    const data = {
        labels: [
            'Red',
            'Blue',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'doughnut',
        data: data,
    };


    return (
        <div className={styles.growthly}>
            <h1>Crescimento</h1>
            <div className={styles.circle}>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <span className={styles.percent}>

            </span>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </div>
    )
}