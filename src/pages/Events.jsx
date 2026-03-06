import { motion } from 'framer-motion';
import MagicParticles from '../components/MagicParticles';

export default function Events() {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100dvh',
                backgroundColor: '#0b0b14',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '120px',
            }}
        >
            <MagicParticles />
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    padding: '0 24px',
                }}
            >
                <h1
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        letterSpacing: '0.08em',
                    }}
                >
                    Events
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        marginTop: '40px',
                        padding: '32px 48px',
                        borderRadius: '16px',
                        backgroundColor: 'rgba(20, 18, 35, 0.6)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 215, 0, 0.12)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <p
                        className="font-cinzel"
                        style={{
                            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                            color: '#FFD700',
                            letterSpacing: '0.15em',
                            margin: 0,
                            textShadow: '0 0 20px rgba(255, 215, 0, 0.3)',
                        }}
                    >
                        ✨ Coming Soon ✨
                    </p>
                    <p
                        className="font-inter"
                        style={{
                            fontSize: 'clamp(0.75rem, 1.4vw, 0.88rem)',
                            color: 'rgba(240, 230, 200, 0.5)',
                            marginTop: '12px',
                            letterSpacing: '0.06em',
                        }}
                    >
                        Something magical is being prepared...
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
