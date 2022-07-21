import { Routes, Route } from 'react-router-dom'

import Customer from '../components/customer/CustomerList';
import CustomerProfile from '../components/customer/profile/CustomerProfile';
import TabContainer from '../components/customer/profile/customer-numbers/boxright/tab-graphics/TabContainer';

export default function RouteCustomer() {
    return (
        <Routes>
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
        </Routes>
    )
}