import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            className={`hero ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    Experience the <br />
                    <span className="text-gradient">Extraordinary</span>
                </h1>
                <p className="hero-subtitle">
                    Titan Cars represents the pinnacle of automotive engineering.
                    Unmatched performance, timeless design, and ultimate luxury.
                </p>
                <div className="hero-actions">
                    <Link to="/cars" className="btn btn-outline">Browse</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
