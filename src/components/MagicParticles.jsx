import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function MagicParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="magic-particles"
            init={particlesInit}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
            options={{
                fpsLimit: 60,
                background: { color: { value: 'transparent' } },
                particles: {
                    number: { value: 80, density: { enable: true, area: 900 } },
                    color: { value: ['#FFD700', '#FFED8A', '#FFC200', '#FFF4A3'] },
                    shape: { type: 'circle' },
                    opacity: {
                        value: { min: 0.1, max: 0.7 },
                        animation: {
                            enable: true,
                            speed: 0.6,
                            minimumValue: 0.05,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 1, max: 3.5 },
                        animation: {
                            enable: true,
                            speed: 1.5,
                            minimumValue: 0.5,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: { default: 'out' },
                        attract: { enable: false },
                        drift: 0.3,
                    },
                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 0.05,
                            opacity: 1,
                            color: { value: '#FFED8A' },
                        },
                    },
                    shadow: {
                        blur: 8,
                        color: { value: '#FFD700' },
                        enable: true,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
