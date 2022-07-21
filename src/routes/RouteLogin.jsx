import { Routes, Route } from 'react-router-dom';

import Login from '../components/login/Login';
import Home from '../components/home/Home';

export default function RouteLogin() {
    return (
        <Routes>
            <Route path="/login" element={
                <Login headerON={false} />
            } />

            <Route path="/auth" element={
                <Home headerON={true} />
            } />
        </Routes>
    )
}

