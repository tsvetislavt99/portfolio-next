import ParticlesContainer from 'components/Particles';
import React from 'react';
import GithubIcon from '../../public/social-icons/github.svg';
import LinkedInIcon from '../../public/social-icons/linkedin.svg';

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex mt-10 mx-auto max-w-[1240px] min-h-[30vh]">
      <ParticlesContainer />
      <div className="px-5 sm:px-10 absolute top-0 left-0 z-1 select-none">
        <h1 className="py-5 text-3xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
          Tsvetislav Todorov
        </h1>
        <p className="pb-7 opacity-70">Just a cool Web Developer</p>
        <div className="flex flex-row">
          <button className="px-3 py-1 rounded-full text-light-primary bg-gradient-to-r dark:from-light-accent dark:to-dark-accent from-dark-accent to-dark-primary hover:scale-105 transition duration-300">
            About me
          </button>
          <div className="h-10 w-1 border-r-2 border-dark-primary dark:border-light-primary pl-5" />
          {/** TODO: Extract into social component */}
          <div className="pl-5 flex flex-row justify-between items-center">
            <a
              href="https://github.com/tsvetislavt99"
              target="_blank"
              rel="noreferrer"
              className="pr-3"
            >
              <GithubIcon
                className=" dark:fill-light-primary fill-dark-primary hover:scale-110 transition duration-300"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tsvetislav-todorov-7ba0b11a4/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon
                className=" dark:fill-light-primary fill-dark-primary hover:scale-110 transition duration-300"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
