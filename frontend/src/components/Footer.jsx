import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>TITAN CARS</h3>
                    <p>Redefining the future of automotive excellence.</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Service Centers</a></li>
                            <li><a href="#">Warranty</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} Titan Cars. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
