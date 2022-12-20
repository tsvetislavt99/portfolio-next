import SectionHeading from 'components/SectionHeading';
import Image from 'next/image';
import React from 'react';

export default function AboutMe() {
  return (
    <section id="timeline" className="max-w-[1240px] mx-auto mb-5">
      <SectionHeading> About Me</SectionHeading>

      <div className="flex justify-center">
        <div className="max-w-[1024px] bg-light-primary dark:bg-dark-primary transition duration-200">
          <div className="flex flex-col items-center pb-10">
            <Image
              className="mb-3 w-36 h-36 md:w-48 md:h-48 border-0 rounded-full shadow-lg"
              src="/img/me.jpeg"
              alt="Tsvetislav image"
              height={300}
              width={300}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className=" max-w-[90%] mx-auto">
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
