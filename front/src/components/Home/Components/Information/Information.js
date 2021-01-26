import React from 'react';

// CSS //
import './Information.css';

function Information() {
    return (
        <div className="container information">
            <div className="container information-content">
                <i className="fas fa-link" />
                <p>Conosco, já foram encurtados 5.000.000 de urls!</p>
            </div>
            <div className="container information-content">
                <i className="fas fa-route" />
                <p>Redirecionamos um total de 15.000.000 vezes às urls originais</p>
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