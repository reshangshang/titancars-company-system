import React from 'react';
import Modal from './Modal';

const CarDetailsModal = ({ isOpen, onClose, car }) => {
    if (!car) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="car-details-modal">
                <div className="modal-image-container" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <img src={car.image} alt={car.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{car.name}</h2>
                <p style={{ color: 'var(--color-primary)', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{car.price}</p>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>{car.description}</p>

                <div className="modal-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                    <div className="text-center">
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>SPEED</div>
                        <div style={{ fontWeight: '600' }}>{car.specs.speed}</div>
                    </div>
                    <div className="text-center">
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>0-60</div>
                        <div style={{ fontWeight: '600' }}>{car.specs.acceleration}</div>
                    </div>
                    <div className="text-center">
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>POWER</div>
                        <div style={{ fontWeight: '600' }}>{car.specs.power}</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CarDetailsModal;
