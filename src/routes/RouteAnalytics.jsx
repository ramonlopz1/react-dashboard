import { Routes, Route } from 'react-router-dom'

import Graphic from '../components/graphics/Graphic';

export default function RouteAnalytics() {
    return (
        <Routes>
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

        </Routes>
    )
}