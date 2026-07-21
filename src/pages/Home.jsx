import React from 'react';
import { Link } from 'react-router-dom';
import Grainient from '../components/Grainient';
const Home = () => {
  React.useEffect(() => {
    document.title = "backyard of @fathanaabd";
  }, []);

  return (
    <>
      {/* WebGL Animated Grainient Background (Home only) */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Grainient
          grainAmount={0.02}
          grainAnimated={false}
          timeSpeed={0.05}
          warpSpeed={0.5}
        />
      </div>

      <section className="ml-10 mt-10 items-left justify-center min-h-[60vh] relative z-10 text-black">
        <h1 className="text-3xl font-bold mb-4">Welcome to my backyard.</h1>
        <p className="text-base mb-4 max-w-xl text-left">
          Hi, I'm <strong>Fathan Akbar A.</strong>, a Software Engineer based in Bandung, Indonesia. This is my personal corner on the internet.
        </p>
        <p className="text-sm mb-6 max-w-xl text-left text-gray-700">
          I built this site to introduce myself, document my journey, and share what I'm working on. Here, you will find a collection of my past projects, technical articles, and various explorations in software engineering—spanning from full-stack web applications to embedded systems.
        </p>

        <div className="mb-8 text-left max-w-xl">
          <p className="text-sm text-gray-700 mb-4">
            Feel free to look around and explore. If you're interested in my professional background, you can check out my digital resume below.
          </p>
        </div>

        <Link
          to="/resume"
          className="inline-block border border-black px-6 py-2 font-bold hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-200"
        >
          Read My Resume
        </Link>
      </section>
    </>
  );
};

export default Home;
