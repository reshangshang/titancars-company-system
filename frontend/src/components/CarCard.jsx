import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarDetailsModal from './CarDetailsModal';
import BookingModal from './BookingModal';
import '../styles/CarCard.css';

const CarCard = ({ car }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <div className="car-card glass">
                <div className="car-image-container">
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="car-overlay">
                        <button onClick={() => setShowDetails(true)} className="btn btn-primary" style={{ marginRight: '0.5rem' }}>View Details</button>
                        <button onClick={() => setShowBooking(true)} className="btn btn-outline">Reserve</button>
                    </div>
                </div>
                <div className="car-details">
                    <div className="car-header">
                        <h3>{car.name}</h3>
                        <span className="car-price">{car.price}</span>
                    </div>
                    <div className="car-specs">
                        <div className="spec-item">
                            <span className="spec-label">Speed</span>
                            <span className="spec-value">{car.specs.speed}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">0-60</span>
                            <span className="spec-value">{car.specs.acceleration}</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Power</span>
                            <span className="spec-value">{car.specs.power}</span>
                        </div>
                    </div>
                </div>
            </div>

            <CarDetailsModal isOpen={showDetails} onClose={() => setShowDetails(false)} car={car} />
            <BookingModal isOpen={showBooking} onClose={() => setShowBooking(false)} carName={car.name} />
        </>
    );
};

export default CarCard;
