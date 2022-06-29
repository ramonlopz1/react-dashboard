import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import Graphic from '../components/graphic/Graphic';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route path="/revenue" element={<Graphic url="revenue" title="Faturamento" />} />
        <Route path="/devolution" element={<Graphic url="devolution" title="Devolução" />} />
        <Route path="*" element={<Home/>} />
    </Routes>
)
