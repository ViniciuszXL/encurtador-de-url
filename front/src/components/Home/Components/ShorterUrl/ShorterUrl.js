import React from 'react';
import alert from 'sweetalert';

// CSS //
import './ShorterUrl.css';

// Utilitaries //
import { httpGet } from '../../../../utilitaries/Utilitaries';

// Image //
import background from '../../../../assets/background.jpeg';

function ShorterUrl() {

    const shortUrl = async (e) => {
        e.preventDefault();

        var url = document.getElementById('url').value;
        if (url === '') {
            return alert({ text: 'Por favor, informe uma url para ser encurtada.', title: 'ERRO!', icon: 'error', dangerMode: true });
        }

        const query = await httpGet(`create?url=${url}`);
        const data = query['data'];
        if (!data['success']) {
            return alert({ text: data['message'], title: 'ERRO!', icon: 'error' });
        }

        alert({ text: 'Sua URL foi encurtada com sucesso!', title: 'SUCESSO!', icon: 'success' });

        const response = data['response'];
        document.getElementById('url').value = response['redirectUrl'];
        document.getElementById('url').select();
        document.execCommand('copy');
    }

    return (
        <div className="container shorterurl" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${ background })`
        }}>
            <div className="container shorterurl-title">
               <h1>ENCURTE SUAS URL</h1>
            </div>
            
            <p>Que tal ter uma URL amigável e pequena para que redirecione aos seus links? Cole-a aqui e encurte!</p>

            <div className="container shorterurl-form">
                <input type='text' id='url' placeholder='Insira sua URL aqui..'></input>
            </div>

            <button onClick={ shortUrl } className="container shorterurl-btn">Encurtar</button>
        </div>
    );
}

export default ShorterUrl;