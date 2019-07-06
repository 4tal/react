import React from 'react';
import logo from './logo.svg';
import './Idan.css';


function Idan() {
    return (
        <div className="Idan">
            <header className="Idan-header">
                <img src={logo} className="Idan-logo" alt="logo" />
                <p>
                    Edit <code>src/Idan.js</code> and save to reload.
                </p>
                <a
                    className="Idan-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


export default Idan;
