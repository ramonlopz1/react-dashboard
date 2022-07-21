import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
    </Routes>
)
