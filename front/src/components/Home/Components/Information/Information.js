import React, { useEffect, useState } from 'react';

// CSS //
import './Information.css';

// Utilitaries //
import { httpGet } from '../../../../utilitaries/Utilitaries';

function Information() {

    const [totalRedirects, setTotalRedirects] = useState(0);
    const [total, setTotal] = useState(0);

    const getInformations = async () => {
        const query = await httpGet('get');
        const data = query['data'];
        if (!data['success']) {
            return;
        }

        setTotal(data['total']);
        setTotalRedirects(data['totalRedirects']);
    };

    useEffect(() => getInformations(), []);

    return (
        <div className="container information">
            <div className="container information-content">
                <i className="fas fa-link" />
                <p>Conosco, já foram encurtados { total } urls!</p>
            </div>
            <div className="container information-content">
                <i className="fas fa-route" />
                <p>Redirecionamos um total de { totalRedirects } vezes!</p>
            </div>
            <div className="container information-content">
                <i className="fas fa-route" />
                <p>Serviço totalmente grátis e disponível 24 horas por 7 dias!</p>
            </div>
            <div className="container information-content">
                <i className="fab fa-github" />
                <p>Códigos disponíveis gratuitamente no Github: 
                    <a alt='Github Code' 
                        href='https://github.com/ViniciuszXL/encurtador-de-url' 
                        target='_blank'
                        rel='external'> Clique aqui</a>
                </p>
            </div>
        </div>
    );
}

export default Information;