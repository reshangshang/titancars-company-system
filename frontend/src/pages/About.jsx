import React from 'react';

const About = () => {
    return (
        <div className="page-container">
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <div className="section-header">
                    <h1 className="section-title">About <span className="text-gradient">Titan Cars</span></h1>
                    <p className="section-subtitle">Forging the future of automotive excellence since 2025.</p>
                </div>

                <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                        At Titan Cars, we believe that a vehicle is more than just a mode of transportation.
                        It is an extension of the driver's will, a statement of power, and a work of art.
                    </p>
                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                        Founded with a singular vision to redefine luxury and performance, we combine state-of-the-art
                        engineering with timeless design principles. Our team of world-class engineers and designers
                        work tirelessly to push the boundaries of what is possible.
                    </p>

                    <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '4rem', textAlign: 'center' }}>
                        <div className="stat-item">
                            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>50+</h3>
                            <p>Awards Won</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>10k+</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-item">
                            <h3 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>5</h3>
                            <p>Global Centers</p>
                        </div>
                    </div>

                    <div className="team-section" style={{ marginTop: '6rem' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet the <span className="text-gradient">Team</span></h2>
                        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            {[
                                { name: "Alex Titan", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" },
                                { name: "Sarah Jenkins", role: "Head of Design", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" },
                                { name: "Michael Chen", role: "Chief Engineer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
                                { name: "Emily Davis", role: "Marketing Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop" }
                            ].map((member, index) => (
                                <div key={index} className="team-member glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                                    <img src={member.img} alt={member.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '2px solid var(--color-primary)' }} />
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="location-section" style={{ marginTop: '6rem', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Visit <span className="text-gradient">Us</span></h2>
                        <div className="map-container glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236556408!2d-122.08625158469247!3d37.42206597982522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1645564756248!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Titan Cars Location"
                            ></iframe>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--color-text-muted)' }}>
                            1600 Amphitheatre Parkway, Mountain View, CA 94043
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
