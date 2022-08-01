import './TabContainer.css'
import Graphic from './Graphic'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TabContainer(props) {

    const location = useLocation()
    const [state, setState] = useState([])

    useEffect(() => {
        const customer = location.state?.customer
        const type = location.state?.type 

        setState({
            customer: customer,
            graphicData: customer?.datas[type]
        })
    }, [location.state?.customer, location.state?.type])

    if(state?.customer)

        return (
            <div className='tab__container'>
                <Graphic allData={state} year={2021}/>
            </div>
        )
}