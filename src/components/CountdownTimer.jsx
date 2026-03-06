import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EVENT_DATE = new Date('2026-03-28T00:00:00');

function getTimeLeft() {
    const diff = EVENT_DATE - Date.now();
    if (diff <= 0) return null;
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function padZ(n) {
    return String(n).padStart(2, '0');
}

/* Each digit cell — smooth roll with scale + blur */
function TimeBlock({ value, label }) {
    const prev = useRef(value);
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        if (prev.current !== value) {
            prev.current = value;
            setAnimKey((k) => k + 1);
        }
    }, [value]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Card */}
            <div
                style={{
                    background: 'linear-gradient(160deg, #1e1040cc 0%, #0d0820cc 100%)',
                    border: '1px solid #FFD70044',
                    borderRadius: 16,
                    minWidth: 'clamp(64px, 14vw, 96px)',
                    padding: '12px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 0 18px #FFD70033, 0 0 6px #FFD70055 inset',
                }}
            >
                {/* Subtle top highlight */}
                <div
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                        background: 'linear-gradient(180deg, #FFD70015, transparent)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Digit with smooth enter/exit */}
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={animKey}
                        initial={{ y: -28, opacity: 0, scale: 0.8, filter: 'blur(6px)' }}
                        animate={{ y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ y: 28, opacity: 0, scale: 0.8, filter: 'blur(6px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: 'clamp(2rem, 5.5vw, 3.4rem)',
                            fontWeight: 700,
                            color: '#FFD700',
                            textShadow: '0 0 18px #FFD700aa, 0 0 50px #FFD70044',
                            lineHeight: 1,
                            display: 'block',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {padZ(value)}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Label */}
            <span
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.6rem, 1.4vw, 0.78rem)',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: '#FFED8A88',
                    marginTop: 10,
                    fontWeight: 500,
                }}
            >
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <span
            style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.6rem, 5vw, 3rem)',
                color: '#FFD700',
                textShadow: '0 0 14px #FFD700bb',
                marginBottom: 28,
                lineHeight: 1,
                userSelect: 'none',
                opacity: 0.8,
            }}
        >
            :
        </span>
    );
}

export default function CountdownTimer({ visible }) {
    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
            {time === null ? (
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
                        color: '#FFD700',
                        textShadow: '0 0 30px #FFD700cc',
                        textAlign: 'center',
                    }}
                >
                    ✨ The Event Has Begun! ✨
                </motion.p>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'clamp(6px, 2vw, 18px)',
                    }}
                >
                    <TimeBlock value={time.days} label="Days" />
                    <Separator />
                    <TimeBlock value={time.hours} label="Hours" />
                    <Separator />
                    <TimeBlock value={time.minutes} label="Minutes" />
                    <Separator />
                    <TimeBlock value={time.seconds} label="Seconds" />
                </div>
            )}
        </motion.div>
    );
}
