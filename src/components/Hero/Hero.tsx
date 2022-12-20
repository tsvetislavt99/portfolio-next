import ParticlesContainer from 'components/Particles';
import SocialSection from 'components/SocialSection';
import Image from 'next/image';
import React from 'react';
import HeroHeading from './HeroHeading';

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex my-10 mx-auto max-w-[1240px] min-h-[300px]">
      <ParticlesContainer />
      <div className="px-5 sm:px-10 absolute flex flex-row justify-center w-full mt-8 items-center top-0 left-0 z-1 select-none">
        <div className="mr-10 mt-4">
          <Image
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 border-dark-primary dark:border-light-primary rounded-full shadow-lg"
            src="/img/me.jpeg"
            alt="Tsvetislav image"
            height={300}
            width={300}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div>
          <HeroHeading />
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
    </div>
  );
}
