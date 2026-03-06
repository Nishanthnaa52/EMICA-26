import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoReveal from './LogoReveal';
import CountdownTimer from './CountdownTimer';
import MagicalButton, { ComingSoonModal } from './MagicalButton';

/* ── Decorative twinkling stars ─────────────────── */
const STARS = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 3,
}));

function Stars() {
    return (
        <>
            {STARS.map((s) => (
                <div
                    key={s.id}
                    style={{
                        position: 'absolute',
                        top: s.top,
                        left: s.left,
                        width: s.size,
                        height: s.size,
                        borderRadius: '50%',
                        backgroundColor: '#FFD700',
                        boxShadow: `0 0 ${s.size * 3}px ${s.size}px #FFD70066`,
                        animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
                        pointerEvents: 'none',
                    }}
                />
            ))}
        </>
    );
}

export default function HeroSection() {
    const [revealDone, setRevealDone] = useState(false);
    // null | 'register' | 'explore'
    const [modal, setModal] = useState(null);

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 28 },
        animate: revealDone ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
    });

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background:
                    'radial-gradient(ellipse 90% 70% at 50% 30%, #2a1050 0%, #1a0f2e 40%, #0b0b14 100%)',
                padding: 'clamp(24px, 6vw, 80px) clamp(16px, 5vw, 60px)',
                gap: 'clamp(24px, 4.5vh, 52px)',
            }}
        >
            <Stars />
            <div className="mist-layer" />
            <div className="mist-layer-2" />

            {/* ── Logo ── */}
            <LogoReveal onRevealDone={() => setRevealDone(true)} />

            {/* ── Tagline ── */}
            <motion.p {...fadeUp(0.1)} style={{ textAlign: 'center' }}>
                <span
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.78rem, 1.8vw, 0.95rem)',
                        letterSpacing: '0.32em',
                        textTransform: 'uppercase',
                        color: '#FFED8A88',
                        fontWeight: 400,
                    }}
                >
                    National Level Technical Symposium
                </span>
            </motion.p>

            {/* ── Countdown ── */}
            <CountdownTimer visible={revealDone} />

            {/* ── Event date ── */}
            <motion.p
                {...fadeUp(0.45)}
                style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(0.72rem, 1.6vw, 0.88rem)',
                    color: '#FFD70066',
                    letterSpacing: '0.24em',
                    textAlign: 'center',
                    marginTop: -10,
                }}
            >
                March 28, 2026
            </motion.p>

            {/* ── Buttons ── */}
            <motion.div
                {...fadeUp(0.65)}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'clamp(12px, 3vw, 20px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <MagicalButton variant="primary" onClick={() => setModal('register')}>
                    ✨ Register Now
                </MagicalButton>
                <MagicalButton variant="secondary" onClick={() => setModal('explore')}>
                    Explore Events →
                </MagicalButton>
            </motion.div>

            {/* ── Bottom fade ── */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    background: 'linear-gradient(to top, #0b0b14 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}
            />

            {/* ── Scroll hint ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={revealDone ? { opacity: 0.45 } : {}}
                transition={{ duration: 1.2, delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: 28,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        width: 24,
                        height: 40,
                        border: '1.5px solid #FFD70055',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: '6px 0',
                    }}
                >
                    <div
                        style={{
                            width: 4,
                            height: 8,
                            borderRadius: 2,
                            backgroundColor: '#FFD70088',
                        }}
                    />
                </motion.div>
            </motion.div>

            {/* ── Coming Soon Modals ── */}
            <AnimatePresence>
                {modal === 'register' && (
                    <ComingSoonModal
                        key="register-modal"
                        title="Registration"
                        onClose={() => setModal(null)}
                    />
                )}
                {modal === 'explore' && (
                    <ComingSoonModal
                        key="explore-modal"
                        title="Event Explorer"
                        onClose={() => setModal(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
