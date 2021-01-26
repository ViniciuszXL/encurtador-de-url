import React from 'react';

// CSS //
import './Home.css';

// Components //
import Header from '../Global/Header/Header';
import ShorterUrl from './Components/ShorterUrl/ShorterUrl';
import Information from './Components/Information/Information';
import ShorterRank from './Components/ShorterRank/ShorterRank';
import Footer from '../Global/Footer/Footer';

function Home() {
    return (
        <div>
            <Header />
            <ShorterUrl />
            <Information />
            <ShorterRank />
            <Footer />
        </div>
    );
}

export default Home;