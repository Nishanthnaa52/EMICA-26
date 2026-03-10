import { motion } from 'framer-motion';

export default function LocationCard({ delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            style={{
                maxWidth: '820px',
                width: '100%',
                padding: 'clamp(24px, 4vw, 40px)',
                borderRadius: '20px',
                backgroundColor: 'rgba(20, 18, 35, 0.65)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 215, 0, 0.12)',
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 215, 0, 0.06)',
            }}
        >
            <h2
                className="font-cinzel"
                style={{
                    fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    margin: '0 0 18px',
                    letterSpacing: '0.06em',
                }}
            >
                Location
            </h2>
            <div
                className="font-inter"
                style={{
                    fontSize: 'clamp(0.82rem, 1.6vw, 0.92rem)',
                    color: 'rgba(240, 230, 200, 0.72)',
                    lineHeight: 1.8,
                    letterSpacing: '0.02em',
                }}
            >
                <p style={{ marginBottom: '16px' }}>
                    Tamilnadu College of Engineering,
                    <br />
                    Palanisame Ravi Nagar, Karumathampatti,
                    <br />
                    Coimbatore, Tamil Nadu 641659.
                </p>
                <div
                    style={{
                        width: '100%',
                        height: '250px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 215, 0, 0.2)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        marginBottom: '16px',
                    }}
                >
                    <iframe
                        title="TCE Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8160544874545!2d77.19728607481031!3d11.127073489043777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba901db85a69b9b%3A0x3f6383055cd2c178!2sTamilnadu%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1773140096256!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                        href="https://maps.app.goo.gl/kKwYw1fAHvjeuWr36"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 24px',
                            borderRadius: '30px',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            color: '#FFD700',
                            textDecoration: 'none',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
                            e.target.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        📍 Open in Google Maps
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
