import MagicParticles from '../components/MagicParticles';
import HeroSection from '../components/HeroSection';
import MouseSparkle from '../components/MouseSparkle';

export default function Home() {
    return (
        <div
            style={{
                position: 'relative',
                minHeight: '100dvh',
                backgroundColor: '#0b0b14',
                overflowX: 'hidden',
                paddingTop: '120px',
            }}
        >
            {/* Magical particle background */}
            <MagicParticles />

            {/* Mouse sparkle trail */}
            <MouseSparkle />

            {/* Hero section */}
            <HeroSection />
        </div>
    );
}
