import React from 'react';
import Modal from './Modal';

const BookingModal = ({ isOpen, onClose, carName }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking request submitted for ${carName}! We will contact you shortly.`);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="booking-modal">
                <h2 style={{ marginBottom: '0.5rem' }}>Reserve Your <span className="text-gradient">{carName || 'Titan'}</span></h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Complete the form below to start your journey.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
                        <input required type="text" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email Address</label>
                        <input required type="email" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone Number</label>
                        <input required type="tel" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Preferred Date</label>
                        <input type="date" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Confirm Reservation</button>
                </form>
            </div>
        </Modal>
    );
};

export default BookingModal;
