import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import logoImg from '../assets/emica_name_logo.png';

/* ── Sparkle burst particles ───────────────────── */
function SparkleBurst({ active }) {
    if (!active) return null;

    const sparks = Array.from({ length: 20 }, (_, i) => {
        const angle = (360 / 20) * i;
        const dist = 80 + Math.random() * 60;
        const size = 5 + Math.random() * 9;
        return { i, angle, dist, size, delay: (i % 5) * 0.04 };
    });

    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 10,
            }}
        >
            {sparks.map(({ i, angle, dist, size, delay }) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                        x: Math.cos((angle * Math.PI) / 180) * dist,
                        y: Math.sin((angle * Math.PI) / 180) * dist,
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.85, delay, ease: [0.2, 0, 0.4, 1] }}
                    style={{
                        position: 'absolute',
                        width: size,
                        height: size,
                        backgroundColor: i % 2 === 0 ? '#FFD700' : '#FFED8A',
                        borderRadius: i % 3 === 0 ? '50%' : 0,
                        clipPath:
                            i % 3 !== 0
                                ? 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'
                                : undefined,
                        boxShadow: '0 0 8px 3px #FFD70099',
                    }}
                />
            ))}
        </div>
    );
}

/* ── Main component ─────────────────────────────── */
export default function LogoReveal({ onRevealDone }) {
    const [phase, setPhase] = useState('hidden'); // hidden → revealing → floating
    const [burst, setBurst] = useState(false);
    const called = useRef(false);

    /* Called once Framer Motion's reveal completes */
    const handleRevealDone = () => {
        if (called.current) return;
        called.current = true;
        setBurst(true);
        setTimeout(() => {
            setBurst(false);
            setPhase('floating');   // switch to gentle float
            onRevealDone?.();
        }, 900);
    };

    /* We drive everything with Framer Motion — no CSS transforms */
    const revealVariants = {
        hidden: { scale: 0, opacity: 0, y: 0, filter: 'blur(14px)' },
        revealing: {
            scale: 1, opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: 1.9, ease: [0.16, 1, 0.3, 1] },
        },
        /* After reveal, float gently up and down */
        floating: {
            scale: 1, opacity: 1, filter: 'blur(0px)',
            y: [0, -12, 0],
            transition: {
                y: { duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
            },
        },
    };

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Ambient glow — mirrors the reveal */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={phase === 'hidden' ? {} : { scale: 1, opacity: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: 'absolute',
                    width: '150%',
                    height: '150%',
                    borderRadius: '50%',
                    background:
                        'radial-gradient(ellipse, #FFD70028 0%, #9b59b610 50%, transparent 75%)',
                    filter: 'blur(28px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Logo — fully Framer-Motion controlled, no CSS animation classes */}
            <motion.div
                variants={revealVariants}
                initial="hidden"
                animate={phase === 'hidden' ? 'revealing' : phase}
                onAnimationComplete={(def) => {
                    /* Only trigger after the 'revealing' phase finishes */
                    if (def === 'revealing') handleRevealDone();
                }}
                style={{
                    position: 'relative',
                    zIndex: 2,
                    transformOrigin: 'center center',
                    filter: 'drop-shadow(0 0 28px #FFD70099) drop-shadow(0 0 8px #FFD700dd)',
                }}
            >
                <img
                    src={logoImg}
                    alt="EMICA'26"
                    style={{
                        maxWidth: 'min(500px, 90vw)',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </motion.div>

            {/* Sparkle burst */}
            <AnimatePresence>{burst && <SparkleBurst active={burst} />}</AnimatePresence>
        </div>
    );
}
