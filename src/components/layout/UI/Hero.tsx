import React from 'react';

const Hero: React.FC = () => (
  <section
    className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  >
    <h1 className="text-5xl font-bold text-white">Welcome</h1>
    <p className="mt-4 text-xl text-white">Discover amazing content.</p>
    <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600">
      Learn More
    </button>
  </section>
);

export default Hero;
