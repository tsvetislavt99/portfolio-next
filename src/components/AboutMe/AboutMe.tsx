import Image from 'next/image';
import React from 'react';

export default function AboutMe() {
  return (
    <section className="max-w-[1240px] mx-auto mb-5">
      <h1 className="py-5 px-5 sm:px-10 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        About Me
      </h1>
      <div className="flex justify-center">
        <div className="max-w-[1024px] bg-light-primary dark:bg-dark-primary ">
          <div className="flex flex-col items-center pb-10">
            <Image
              className="mb-3 w-24 h-24 border-0 rounded-full shadow-lg"
              src="/img/me.jpeg"
              alt="Tsvetislav image"
              objectFit="contain"
              height={200}
              width={200}
            />
          </div>
          <p>
            When not writing or reviewing code, I enjoy spending time with my
            family, cooking and going out with freinds. For up-to-date
            information or projects that I currently work on, check my{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-secondary ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tsvetislavt99"
              >
                GitHub
              </a>
            </span>
            . You can reach me on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-secondary ">
              tsvetislavt99@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
