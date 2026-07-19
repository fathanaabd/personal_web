import React from 'react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import Grainient from '../components/Grainient';
const Home = () => {
  React.useEffect(() => {
    document.title = "Fathan Akbar Abdurachman - Software Engineer Portfolio";
  }, []);

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
          <p className="text-base mb-4 max-w-xl text-left">
            Welcome to my personal backyard on the internet. I am a Software Engineer based in Bandung, Indonesia, with a strong background in embedded systems, firmware development, and web applications.
          </p>
          <p className="text-sm mb-6 max-w-xl text-left text-gray-300">
            Over the past 3+ years, I have successfully engineered and delivered software products across various industrial applications. My work spans from firmware automation on miniaturized CNC systems and refrigeration controllers to full-stack web solutions for real-time sensor visualization and project cost estimation.
          </p>

          <div className="mb-8 text-left max-w-xl">
            <h2 className="text-base font-bold mb-3 text-white">Core Competencies:</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
              <li><strong>Embedded Systems:</strong> Custom firmware development for microcontrollers (ESP32, STM32, Arduino).</li>
              <li><strong>Web Engineering:</strong> Modern web application development using React, Flask, and cloud services (Firebase, Google Cloud).</li>
              <li><strong>Automation & Control:</strong> Implementing interlocking controls, sensor telemetry, and automation algorithms.</li>
            </ul>
          </div>

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
