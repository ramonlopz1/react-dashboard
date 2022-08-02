import { Routes, Route } from 'react-router-dom'
import Panel from '../components/panel/Panel'

export default function RoutePanel(props) {
    return (
        <>
            <Routes>
                <Route path='/panel' element={<Panel/>} />
            </Routes>
        </>
    )
}