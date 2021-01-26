import React from 'react';

// CSS //
import './Home.css';

// Components //
import Header from '../Global/Header/Header';
import ShorterUrl from './Components/ShorterUrl/ShorterUrl';

function Home() {
    return (
        <div>
            <Header />
            <ShorterUrl />
        </div>
    );
}

export default Home;