import { motion } from 'framer-motion';

/* ── Category badge colors ─────────────────────────── */
const CATEGORY_COLORS = {
    Technical: { bg: 'rgba(0, 200, 255, 0.12)', text: '#00d4ff', border: 'rgba(0, 200, 255, 0.25)', icon: '⚡' },
    'Non-Technical': { bg: 'rgba(255, 100, 200, 0.12)', text: '#ff7eb3', border: 'rgba(255, 100, 200, 0.25)', icon: '🎭' },
};

export default function EventCard({ event, index, onClick }) {
    const cat = CATEGORY_COLORS[event.category] || CATEGORY_COLORS.Technical;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onClick(event)}
            style={{
                position: 'relative',
                borderRadius: '20px',
                backgroundColor: 'rgba(20, 18, 35, 0.6)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 215, 0, 0.1)',
                boxShadow: '0 6px 28px rgba(0, 0, 0, 0.35)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'border 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease',
            }}
            whileHover={{
                border: '1px solid rgba(255, 215, 0, 0.25)',
                boxShadow: '0 12px 48px rgba(0, 0, 0, 0.45), 0 0 30px rgba(255, 215, 0, 0.06)',
                scale: 1.02,
            }}
        >
            {/* Top shimmer stripe */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${cat.text}66, transparent)`,
                }}
            />

            <div style={{ padding: 'clamp(18px, 3vw, 24px)' }}>
                {/* Category badge + team size */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span
                        style={{
                            fontSize: '0.68rem',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            backgroundColor: cat.bg,
                            color: cat.text,
                            border: `1px solid ${cat.border}`,
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {cat.icon} {event.category}
                    </span>
                    <span
                        style={{
                            fontSize: '0.68rem',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(255, 215, 0, 0.08)',
                            color: 'rgba(255, 215, 0, 0.7)',
                            border: '1px solid rgba(255, 215, 0, 0.15)',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 400,
                        }}
                    >
                        👥 {event.teamSize}
                    </span>
                </div>

                {/* Event name */}
                <h3
                    className="font-cinzel"
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFED8A 50%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: '0 0 8px',
                        letterSpacing: '0.04em',
                    }}
                >
                    {event.name}
                </h3>

                {/* Description truncated */}
                <p
                    className="font-inter"
                    style={{
                        fontSize: 'clamp(0.76rem, 1.4vw, 0.85rem)',
                        color: 'rgba(240, 230, 200, 0.6)',
                        lineHeight: 1.6,
                        margin: '0 0 14px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {event.description}
                </p>

                {/* Quick info row */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        fontSize: 'clamp(0.7rem, 1.3vw, 0.78rem)',
                        color: 'rgba(240, 230, 200, 0.5)',
                        fontFamily: "'Inter', sans-serif",
                        marginBottom: '12px',
                    }}
                >
                    <span>📍 {event.venue}</span>
                    <span>🕐 {event.time.start} – {event.time.end}</span>
                </div>

                {/* View details hint */}
                <div
                    style={{
                        marginTop: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.7rem',
                        color: 'rgba(255, 215, 0, 0.4)',
                        fontFamily: "'Inter', sans-serif",
                    }}
                >
                    <span>👆 Tap to view details</span>
                </div>
            </div>
        </motion.div>
    );
}
