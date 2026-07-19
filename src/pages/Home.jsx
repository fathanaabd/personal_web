import React from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import Grainient from '../components/Grainient';
const Home = () => {
  return (
    <>
      {/* WebGL Animated Grainient Background (Home only) */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Grainient
          grainAmount={0.02}
          grainAnimated={false}
          timeSpeed={0.3}
          warpSpeed={0.5}
        />
      </div>

      <section className="flex flex-col items-start justify-center min-h-[60vh] relative z-10 text-white">
        <SpotlightCard className="w-full" spotlightColor="rgba(255, 255, 255, 0.2)">
          <h1 className="text-3xl font-bold mb-4">Hello, I'm Fathan Akbar A.</h1>
          <p className="text-base mb-8 max-w-xl text-justify">
            Welcome to my personal backyard on the internet. I am a Software Engineer based in Bandung, Indonesia, with a strong background in embedded systems, firmware development, and web applications.
          </p>

          <Link
            to="/resume"
            className="inline-block border border-white px-6 py-2 font-bold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors duration-200"
          >
            View Resume
          </Link>
        </SpotlightCard>
      </section>
    </>
  );
};

export default Home;
