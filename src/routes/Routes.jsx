import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import Graphic from '../components/graphics/Graphic';
import { Rca } from '../components/rca/Rca';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/revenue" element={
            <Graphic url="revenue" title="Faturamento" />
        } />

        <Route path="/devolution" element={
            <Graphic url="devolution" title="Devolução" />
        } />

        <Route path="/positivation" element={
            <Graphic url="positivation" title="Positivação" />
        } />

        <Route path="/mix" element={
            <Graphic url="mix" title="Mix" />
        } />

        <Route path="/order" element={
            <Graphic url="order" title="Pedidos" />
        } />


        <Route path="/rca" element={
            <Rca title="Representante Comercial Autônomo" />
        } />


        <Route path="/rca/revenue" element={
            <Rca url="revenue" title="Faturamento" />
        } />

        <Route path="/rca/positivation" element={
            <Rca url="positivation" title="Positivação" />
        } />

        <Route path="/rca/mix" element={
            <Rca url="mix" title="Mix" />
        } />

        <Route path="/rca/devolution" element={
            <Rca url="devolution" title="Devolução" />
        } />

        <Route path="/rca/profit" element={
            <Rca url="profit" title="Lucro" />
        } />

        <Route path="*" element={<Home />} />
    </Routes>
)
