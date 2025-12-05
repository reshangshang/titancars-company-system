import React from 'react';
import Hero from '../components/Hero';
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';
import '../styles/Home.css';

const Home = () => {
    const featuredCars = cars.slice(0, 3);

    return (
        <div className="home-page">
            <Hero />

            <section className="section container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="text-gradient">Models</span></h2>
                    <p className="section-subtitle">Discover our latest masterpieces of engineering.</p>
                </div>

                <div className="car-grid">
                    {featuredCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="why-choose-us">
                        <div className="feature-text">
                            <h2 className="section-title">Why Choose <span className="text-gradient">Titan</span></h2>
                            <p>
                                We don't just build cars; we craft experiences. Every Titan vehicle is a testament to
                                our obsession with perfection, blending cutting-edge technology with artisanal craftsmanship.
                            </p>
                            <ul className="feature-list">
                                <li>Uncompromising Performance</li>
                                <li>Sustainable Innovation</li>
                                <li>Bespoke Customization</li>
                            </ul>
                        </div>
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" alt="Titan Interior" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
