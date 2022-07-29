import styles from './RcaGraphic.module.css'
import utils from '../../../../graphics/util/utils.js'
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { useEffect, useState } from 'react';

Chart.register(...registerables);

export default function RcaGraphic(props) {

    const [currentYear, setCurrentYear] = useState([])
    const [previousYear, setPreviousYear] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch('http://localhost:3000/positivation')
            const datajson = await data.json()

            const currYear = utils.getUpdateList(datajson, 2021)
            const prevYear = utils.getUpdateList(datajson, 2020)

            setCurrentYear(currYear)
            setPreviousYear(prevYear)
        }

        getData()
    }, [])

    const months = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai',
        'Jun', 'Jul', 'Ago', 'Set', 'Out',
        'Nov', 'Dez'
    ]

    const data = {
        labels: [...months],
        datasets: [{
            label: 'Ano atual',
            data: [...currentYear],
            backgroundColor: 'rgba(255, 99, 132, 0.8)'

        }, {
            label: 'Ano passado',
            data: [...previousYear],
            backgroundColor: 'rgba(53, 162, 235, 0.8)',
        }]
    }

    return (

        <div className={styles.rca_graphic}>
            <Bar
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