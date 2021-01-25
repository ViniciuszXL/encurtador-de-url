import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS //
import './App.css';

function App() {
    return(
        <BrowserRouter>
            <Route exact path='/' component={ Home } />
        </BrowserRouter>
    )
}

export default App;
