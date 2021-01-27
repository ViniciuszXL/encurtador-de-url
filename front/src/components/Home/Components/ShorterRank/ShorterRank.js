import React, { useState, useEffect } from 'react';

// CSS //
import './ShorterRank.css';

// Utilitaries //
import { httpGet } from '../../../../utilitaries/Utilitaries';

function ShorterRank() {

    const [ranks, setRank] = useState([]);

    const getRank = async () => {
        const query = await httpGet('rank');
        const data = query['data'];
        if (!data['success']) {
            return;
        }

        setRank(data['response']);
    };

    useEffect(() => getRank(), []);
    const buildRank = (rank) => {
        return (
            <div className="container shorterrank-content">
                <p>{ rank['redirectUrl'] }</p>
                <span>{ rank['redirects'] }</span>
            </div>
        );
    };

    return (
        <div className="container shorterrank">
            <div className="container shorterrank-title">
                <h1>URLS MAIS ACESSADAS</h1>
            </div>

            <div className="container shorterrank-contents">
                {
                    ranks.map((rank) => buildRank(rank))
                }
            </div>
        </div>
    );
}

export default ShorterRank;