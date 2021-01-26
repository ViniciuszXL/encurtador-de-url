import React from 'react';

// CSS //
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container footer-credits">
                <p>&copy; 2021 - Todos os direitos reservados.</p>
                <p>Criado por <a href='https://viniciuszxl.com.br' alt='Creator' target='_blank'>Marcus Mendonça</a></p>
            </div>
        </footer>
    );
}

export default Footer;