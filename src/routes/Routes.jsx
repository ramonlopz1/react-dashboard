import { Routes, Route } from 'react-router-dom';

import Home from '../components/home/Home';
import Graphic from '../components/graphics/Graphic';
import Rca from '../components/rca/Rca';
import Customer from '../components/customer/Customer';
import CustomerProfile from '../components/customer/profile/CustomerProfile';
import TabContainer from '../components/customer/profile/TabContainer';
import Login from '../components/login/Login';

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

        <Route path="/customers" element={
            <Customer title="Clientes" />
        } />

        <Route path="/customers/profile/:code" element={
            <CustomerProfile />
        } />


        <Route path="/customers/profile/:code/revenue" element={
            <CustomerProfile>
                <TabContainer title="Faturamento" />
            </CustomerProfile>
        } />

        <Route path="/customers/profile/:code/devolution" element={
            <CustomerProfile>
                <TabContainer title="Devolução" />
            </CustomerProfile>
        } />


        <Route path="/login" element={
            <Login headerON={false} />
        } />

        <Route path="/auth" element={
            <Home headerON={true}/>
        } />

        <Route path="*" element={<Home />} />
    </Routes>
)
