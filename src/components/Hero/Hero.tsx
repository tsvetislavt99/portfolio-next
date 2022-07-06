import ParticlesContainer from 'components/Particles';
import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex mt-10 mx-auto max-w-[1240px] min-h-[30vh]">
      <ParticlesContainer />
      <div className="px-5 sm:px-10 absolute top-0 left-0 z-1 select-none">
        <h1 className="py-5 text-3xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
          Tsvetislav Todorov
        </h1>
        <p className="pb-5 opacity-70">Just a cool Web Developer</p>
        <button className="px-3 py-1 rounded-full text-light-primary bg-gradient-to-r from-light-accent to-dark-accent hover:scale-105 transition duration-300">
          About me
        </button>
      </div>
    </div>
  );
}
