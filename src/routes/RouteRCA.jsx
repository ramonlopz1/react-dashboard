import { Routes, Route } from "react-router-dom";
import Rca from '../components/rca/Rca';

export default function RouteRCA() {
    return (

        <Routes>
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
        </Routes>

    )
}