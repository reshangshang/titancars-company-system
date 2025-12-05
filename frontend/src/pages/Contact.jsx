import React from 'react';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <div className="section-header">
                    <h1 className="section-title">Get in <span className="text-gradient">Touch</span></h1>
                    <p className="section-subtitle">We are here to assist you with your journey.</p>
                </div>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
                    <div className="contact-info">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Headquarters</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>123 Innovation Drive, Tech Valley, CA 94043</p>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Phone</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</p>
                        </div>
                        <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Email</h4>
                            <p style={{ color: 'var(--color-text-muted)' }}>concierge@titancars.com</p>
                        </div>
                    </div>

                    <form className="contact-form glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                            <input type="text" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} placeholder="Your Name" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} placeholder="your@email.com" />
                        </div>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                            <textarea rows="4" style={{ width: '100%', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: 'white' }} placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
