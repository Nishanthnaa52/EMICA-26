import MagicParticles from '../components/MagicParticles';
import HeroSection from '../components/HeroSection';
import MouseSparkle from '../components/MouseSparkle';
import LocationCard from '../components/LocationCard';

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

            {/* Location Section */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '40px clamp(16px, 5vw, 48px) 80px',
                }}
            >
                <LocationCard />
            </div>
        </div>
    );
}
