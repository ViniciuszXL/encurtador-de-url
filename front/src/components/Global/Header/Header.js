import React from 'react';

// CSS //
import './Header.css';

// Image //
import logo from '../../../assets/logo.png';

function Header() {

    const pageUp = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container header">
            <button onClick={ pageUp } className="container header-menu">
                <i className="fas fa-bars"></i>
            </button>
            <div className="container header-img">
                <img src={logo} /> 
            </div>
            <button onClick={ pageUp } className="container header-top">
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}

export default Header;