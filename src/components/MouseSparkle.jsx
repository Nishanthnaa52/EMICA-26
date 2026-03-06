import { useEffect, useRef } from 'react';

const COLORS = ['#FFD700', '#FFED8A', '#FFF4A3', '#FFC200', '#ffffff'];

function createSparkle(x, y) {
    const el = document.createElement('div');
    const size = Math.random() * 10 + 5;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const angle = Math.random() * 360;
    const distance = Math.random() * 40 + 20;

    el.style.cssText = `
    position: fixed;
    left: ${x}px;
    top: ${y}px;
    width: ${size}px;
    height: ${size}px;
    pointer-events: none;
    z-index: 9999;
    transform-origin: center;
    animation: sparkFade 600ms ease-out forwards;
  `;

    // Use a star/diamond shape via clip-path
    const shape = Math.random() > 0.5 ? 'star' : 'dot';
    if (shape === 'star') {
        el.style.clipPath =
            'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        el.style.backgroundColor = color;
    } else {
        el.style.borderRadius = '50%';
        el.style.backgroundColor = color;
        el.style.boxShadow = `0 0 6px 2px ${color}`;
    }

    // Add drift
    const keyframes = [
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        {
            transform: `translate(${Math.cos((angle * Math.PI) / 180) * distance}px, ${Math.sin((angle * Math.PI) / 180) * distance
                }px) scale(0)`,
            opacity: 0,
        },
    ];
    el.animate(keyframes, { duration: 600 + Math.random() * 400, easing: 'ease-out', fill: 'forwards' });

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
    return el;
}

export default function MouseSparkle() {
    const lastPos = useRef({ x: 0, y: 0 });
    const throttle = useRef(0);

    useEffect(() => {
        const onMove = (e) => {
            const now = Date.now();
            const dx = e.clientX - lastPos.current.x;
            const dy = e.clientY - lastPos.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (now - throttle.current < 40 || dist < 8) return;
            throttle.current = now;
            lastPos.current = { x: e.clientX, y: e.clientY };

            const count = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < count; i++) {
                const ox = (Math.random() - 0.5) * 16;
                const oy = (Math.random() - 0.5) * 16;
                createSparkle(e.clientX + ox, e.clientY + oy);
            }
        };

        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return null;
}
