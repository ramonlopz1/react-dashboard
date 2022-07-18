import './TabContainer.css'
import Graphic from './Graphic'
import { useEffect, useState } from 'react'

export default function TabContainer(props) {


    
    return (
        <div className='tab__container'>
            {props.title}
            <Graphic />
        </div>
    )
}