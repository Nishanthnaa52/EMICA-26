import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

/* ── Backdrop + Modal ───────────────────────────── */
function ComingSoonModal({ title, onClose }) {
    return createPortal(
        <AnimatePresence>
            {/* Blurred backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 1000,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    background: 'rgba(6, 4, 20, 0.72)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
            >
                {/* Card — stop propagation so clicking card doesn't close */}
                <motion.div
                    key="card"
                    initial={{ scale: 0.75, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.75, opacity: 0, y: 30 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: 'linear-gradient(145deg, #1a0f2ee0 0%, #0b0b14e0 100%)',
                        border: '1px solid #FFD70055',
                        borderRadius: 24,
                        padding: 'clamp(32px, 6vw, 60px) clamp(32px, 8vw, 80px)',
                        textAlign: 'center',
                        boxShadow: '0 0 60px #FFD70033, 0 0 120px #9b59b622, 0 24px 80px rgba(0,0,0,0.6)',
                        maxWidth: 'min(480px, 90vw)',
                        position: 'relative',
                    }}
                >
                    {/* Glow ring behind card */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: -2,
                            borderRadius: 26,
                            background: 'linear-gradient(135deg, #FFD70033, transparent, #9b59b633)',
                            zIndex: -1,
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Icon */}
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)', marginBottom: 16 }}
                    >
                        ✨
                    </motion.div>

                    {/* Title */}
                    <h2
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                            fontWeight: 700,
                            color: '#FFD700',
                            textShadow: '0 0 24px #FFD700bb, 0 0 60px #FFD70044',
                            marginBottom: 12,
                            lineHeight: 1.2,
                        }}
                    >
                        Coming Soon
                    </h2>

                    {/* Subtitle */}
                    <p
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                            color: '#FFED8A99',
                            letterSpacing: '0.08em',
                            marginBottom: 28,
                            lineHeight: 1.6,
                        }}
                    >
                        <span style={{ color: '#FFED8Acc', fontWeight: 500 }}>{title}</span> will be
                        <br />available very soon. Stay tuned!
                    </p>

                    {/* Divider */}
                    <div
                        style={{
                            height: 1,
                            background: 'linear-gradient(90deg, transparent, #FFD70055, transparent)',
                            marginBottom: 24,
                        }}
                    />

                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 24px #FFD70077' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            padding: '10px 36px',
                            borderRadius: 50,
                            border: '1.5px solid #FFD70066',
                            background: 'transparent',
                            color: '#FFD700',
                            cursor: 'pointer',
                            boxShadow: '0 0 12px #FFD70022',
                            transition: 'all 0.2s',
                        }}
                    >
                        Got it
                    </motion.button>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
}

export { ComingSoonModal };

/* ── Magical Button ─────────────────────────────── */
export default function MagicalButton({ children, variant = 'primary', onClick }) {
    const isPrimary = variant === 'primary';

    const baseStyle = {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: 'clamp(0.88rem, 2vw, 1rem)',
        letterSpacing: '0.08em',
        padding: 'clamp(12px, 2vw, 16px) clamp(28px, 5vw, 48px)',
        borderRadius: 50,
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        position: 'relative',
        overflow: 'hidden',
        outline: 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        ...(isPrimary
            ? {
                background: 'linear-gradient(90deg, #a16207, #FFD700, #FFED8A, #FFD700, #a16207)',
                backgroundSize: '300% auto',
                animation: 'shimmer 3s linear infinite',
                color: '#0b0b14',
                boxShadow: '0 0 20px #FFD70066, 0 4px 24px #FFD70033',
            }
            : {
                background: 'transparent',
                color: '#FFD700',
                border: '1.5px solid #FFD70066',
                boxShadow: '0 0 12px #FFD70033, inset 0 0 12px #FFD70011',
            }),
    };

    return (
        <motion.button
            onClick={onClick}
            whileHover={{
                scale: 1.07,
                y: -5,
                boxShadow: isPrimary
                    ? '0 0 44px #FFD700bb, 0 10px 36px #FFD70055'
                    : '0 0 28px #FFD70077, inset 0 0 18px #FFD70022',
            }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            style={baseStyle}
        >
            {/* Shimmer overlay */}
            <motion.span
                aria-hidden
                style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(105deg, transparent 35%, #ffffff25 50%, transparent 65%)',
                    backgroundSize: '200% 100%',
                    pointerEvents: 'none',
                }}
                animate={{ backgroundPosition: ['-200% 0', '200% 0'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
        </motion.button>
    );
}
