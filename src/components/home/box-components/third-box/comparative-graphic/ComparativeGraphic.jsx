import styles from './ComparativeGraphic.module.css'
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'
Chart.register(...registerables);

export default function ComparativeGraphics(props) {

    const data = {
        labels: ['a', 'b', 'c'],
        datasets: [{
            label: 'first data',
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [12, 3, 4]
        },
        {
            label: 'second data',
            data: [5, 6, 8],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }]
    }

    return (

        <div className={styles.ComparativeGraphics}>
            <Line
                data={data}
                options={{
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                      }
                }}
            />
        </div>
    )
}