import React from 'react';

const Hero: React.FC = () => (
  <div className="relative h-screen w-screen overflow-hidden m-0 p-0">
    <section
      className="absolute inset-0 bg-cover bg-center animate-bgPulse"
      style={{ backgroundImage: "url('/improved-universe-pixel-art.png')" }}
    />
    <div className="absolute inset-0 bg-black opacity-50" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-6xl font-extrabold text-white drop-shadow-lg animate-pixelFade">
        鴨子的研究室
      </h1>
      <p className="mt-2 text-lg text-white drop-shadow-lg animate-pixelFade delay-200">
        by GMTStudio
      </p>
      <p className="mt-4 text-2xl text-white drop-shadow-lg animate-pixelFade delay-400">
        Discover amazing content.
      </p>
      <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition transform hover:scale-105 animate-pixelBounce">
        Learn More
      </button>
    </div>
  </div>
);

export default Hero;