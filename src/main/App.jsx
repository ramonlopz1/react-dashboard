import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import React from 'react';



// permite as rotas
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes/Routes';

const App = props =>
    <BrowserRouter>
        <div className='app'>

            <Routes />

        </div>
    </BrowserRouter>

export default App;