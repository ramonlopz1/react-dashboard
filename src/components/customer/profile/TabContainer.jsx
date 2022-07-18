import './TabContainer.css'
import Graphic from './Graphic'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function TabContainer(props) {

    const location = useLocation()
    const [customer, setCustomer] = useState([])
    const [type, setType] = useState([])
    const [graphicData, setGraphicData] = useState([])

    useEffect(() => {
        setCustomer(location.state?.customer)
        setType(location.state?.type)
        setGraphicData(customer?.datas)
    }, [customer?.datas, location.state?.customer, location.state?.type])

    // o primeiro render as props estão indo undefined

    return (
        <div className='tab__container'>
            {props.title}
            {/* <Graphic customer={customer} graphicData={graphicData} year={2021} type={type} /> */}
        </div>
    )
}