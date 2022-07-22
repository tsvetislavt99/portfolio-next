import ParticlesContainer from 'components/Particles';
import SocialSection from 'components/SocialSection';
import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex my-10 mx-auto max-w-[1240px] min-h-[300px]">
      <ParticlesContainer />
      <div className="px-5 sm:px-10 absolute top-0 left-0 z-1 select-none">
        <h1 className="py-5 text-3xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
          Tsvetislav Todorov
        </h1>
        <p className="pb-7 opacity-70">Just a cool Web Developer</p>
        <div className="flex flex-row">
          <a
            href="#timeline"
            className="px-3 py-1 flex justify-center items-center rounded-full text-light-primary dark:bg-gradient-to-r dark:from-light-accent dark:to-light-secondary bg-black hover:scale-105 transition duration-300"
          >
            About me
          </a>
          <div className="h-10 w-1 border-r-2 border-dark-primary dark:border-light-primary pl-5" />
          <SocialSection />
        </div>
      </div>
    </div>
  );
}
