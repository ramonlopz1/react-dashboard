import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes/Routes';
import RouteLogin from '../routes/RouteLogin';
import RouteCustomer from '../routes/RouteCustomer';
import RouteRCA from '../routes/RouteRCA';
import RouteAnalytics from '../routes/RouteAnalytics';

const App = props =>
    <BrowserRouter>
        <div className='app'>
            <Routes/>
            <RouteLogin/>
            <RouteCustomer/>
            <RouteRCA/>
            <RouteAnalytics/>
        </div>
    </BrowserRouter>

export default App;