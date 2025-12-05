
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import '../styles/SidePanel.css';

const SidePanel = ({ isOpen, onClose }) => {
    const location = useLocation();
    const { language, changeLanguage, t } = useLanguage();

    return (
        <>
            <div className={`side-panel-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <div className={`side-panel ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="panel-header">
                    <h2>TITAN <span className="text-gradient">CARS</span></h2>
                </div>

                <ul className="panel-links">
                    <li>
                        <Link to="/" onClick={onClose} className={location.pathname === '/' ? 'active' : ''}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link to="/cars" onClick={onClose} className={location.pathname === '/cars' ? 'active' : ''}>{t('cars')}</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={onClose} className={location.pathname === '/about' ? 'active' : ''}>{t('about')}</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={onClose} className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link>
                    </li>
                </ul>

                <div className="language-section">
                    <h3>{t('selectLanguage')}</h3>
                    <div className="language-options">
                        <button
                            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                        >
                            English
                        </button>
                        <button
                            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                            onClick={() => changeLanguage('es')}
                        >
                            Español
                        </button>
                        <button
                            className={`lang-btn ${language === 'it' ? 'active' : ''}`}
                            onClick={() => changeLanguage('it')}
                        >
                            Italian
                        </button>
                        <button
                            className={`lang-btn ${language === 'fil' ? 'active' : ''}`}
                            onClick={() => changeLanguage('fil')}
                        >
                            Filipino
                        </button>
                    </div>
                </div>

                <div className="panel-footer">
                    <p>{t('footer')}</p>
                </div>
            </div>
        </>
    );
};

export default SidePanel;
