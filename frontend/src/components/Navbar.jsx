import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';
import SidePanel from './SidePanel';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [isLightMode, setIsLightMode] = useState(false);
    const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsLightMode(true);
            document.body.classList.add('light-mode');
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newMode = !isLightMode;
        setIsLightMode(newMode);
        if (newMode) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    const isHome = location.pathname === '/';

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'solid' : ''}`}>
                <div className="container navbar-content">
                    <Link to="/" className="logo">
                        TITAN <span className="text-gradient">CARS</span>
                    </Link>

                    <div className="nav-actions">
                        {/* Desktop Nav */}
                        <ul className="nav-links desktop-only">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t('home')}</Link></li>
                            <li><Link to="/cars" className={location.pathname === '/cars' ? 'active' : ''}>{t('cars')}</Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>{t('about')}</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t('contact')}</Link></li>
                        </ul>

                        <button className="theme-toggle desktop-only" onClick={toggleTheme} title="Toggle Theme">
                            {isLightMode ? '🌙' : '☀️'}
                        </button>

                        <button onClick={() => setShowBooking(true)} className="btn btn-primary reserve-btn desktop-only">{t('reserve')}</button>

                        <button className="hamburger-btn" onClick={() => setIsSidePanelOpen(true)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Nav */}
            <div className="mobile-nav">
                <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <span className="mobile-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                    </span>
                    <span className="mobile-text">{t('home')}</span>
                </Link>

                <Link to="/cars" className={`mobile-nav-item ${location.pathname === '/cars' ? 'active' : ''}`}>
                    <span className="mobile-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="1" y="3" width="15" height="13"></rect>
                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                    </span>
                    <span className="mobile-text">{t('cars')}</span>
                </Link>

                <Link to="/about" className={`mobile-nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                    <span className="mobile-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    </span>
                    <span className="mobile-text">{t('about')}</span>
                </Link>

                <Link to="/contact" className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <span className="mobile-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </span>
                    <span className="mobile-text">{t('contact')}</span>
                </Link>

                <button className="mobile-nav-item theme-btn" onClick={toggleTheme}>
                    <span className="mobile-icon">
                        {isLightMode ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </span>
                    <span className="mobile-text">{t('theme')}</span>
                </button>
            </div>

            <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} carName="Titan Experience" />
        </>
    );
};

export default Navbar;
