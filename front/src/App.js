import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS //
import './App.css';
import './components/Global/Global.css';

// Components //
import Home from './components/Home/Home';

function App() {
    return(
        <BrowserRouter>
            <Route exact path='/' component={ Home } />
        </BrowserRouter>
    )
}

export default App;
