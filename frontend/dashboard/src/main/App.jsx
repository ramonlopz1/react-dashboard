import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import React from 'react';
import Header from '../components/templates/header/Header';


import Footer from '../components/templates/footer/Footer';

// permite as rotas
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes/Routes';

const App = props => 
<BrowserRouter>
    <div className='app'>
        <Header/>
        <Routes/>
        <Footer/>
    </div>
</BrowserRouter>

export default App;