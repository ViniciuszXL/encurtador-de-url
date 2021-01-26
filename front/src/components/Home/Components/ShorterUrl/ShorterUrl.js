import React from 'react';

// CSS //
import './ShorterUrl.css';

// Image //
import background from '../../../../assets/background.jpeg';

function ShorterUrl() {
    return (
        <div className="container shorterurl" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${ background })`
        }}>
            <div className="container shorterurl-title">
               <h1>ENCURTE SUAS URL</h1>
            </div>
            
            <p>Que tal ter uma URL amigável e pequena para que redirecione aos seus links? Cole-a aqui e encurte!</p>

            <div className="container shorterurl-form">
                <input type='text' placeholder='Insira sua URL aqui..'></input>
            </div>

            <button className="container shorterurl-btn">Encurtar</button>
        </div>
    );
}

export default ShorterUrl;