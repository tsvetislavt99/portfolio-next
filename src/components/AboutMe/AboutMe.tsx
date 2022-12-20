import SectionHeading from 'components/SectionHeading';
import React from 'react';

export default function AboutMe() {
  return (
    <section id="timeline" className="max-w-[1240px] mx-auto mb-5">
      <SectionHeading> About Me</SectionHeading>

      <div className="flex justify-center">
        <div className="mx-6 sm:mx-12">
          <p className="pb-2">
            As a front-end developer, I specialize in using React and Typescript
            to create efficient and user-friendly applications. In addition to
            my technical skills, I am a team player with a dedication to
            producing high-quality work. I am always seeking ways to improve and
            stay current in the industry. In my free time, I enjoy gaming and
            participating in coding challenges to keep my skills sharp. I also
            love spending time with my family, cooking, and watching tv-series
            and movies. These activities help me relax and recharge, allowing me
            to approach my work with a clear mind and fresh perspective. I am
            committed to delivering the best results for my clients and am eager
            to take on new challenges. You can check what I am currently up to
            on my{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-secondary ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tsvetislavt99"
              >
                GitHub
              </a>
            </span>
            .
          </p>
          <p>
            If you have any questions or would like to work together, feel free
            to connect with me on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-accent to-light-secondary ">
              tsvetislavt99@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
