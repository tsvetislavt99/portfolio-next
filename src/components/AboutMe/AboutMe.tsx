import SectionHeading from 'components/SectionHeading';
import React from 'react';

export default function AboutMe() {
  return (
    <section id="timeline" className="max-w-[1240px] mx-auto mb-5">
      <SectionHeading> About Me</SectionHeading>

      <div className="flex justify-center">
        <div className="mx-6 sm:mx-12">
          <p className="pb-2">
            Greetings! I{"'"}m Tsvetislav, a seasoned Software Engineer
            specializing in JavaScript, TypeScript, React, Node.js, and Express.
            With my proficiency in these technologies, I take pride in building
            great quality applications that seamlessly integrate creativity and
            functionality.
          </p>
          <p className="pb-2">
            My journey in software development began with a curiosity for
            tinkering with computers, and it has since evolved into a fulfilling
            career.
          </p>
          <p className="pb-2">
            Beyond coding, I really enjoy helping new and upcoming developers
            and IT people. I remember the struggles I faced early in my career,
            and that{"'"}s why I{"'"}m always ready to lend a hand, whether it
            {"'"}s solving a complex technical problem or providing guidance on
            career choices.
          </p>
          <p>
            If you share the same enthusiasm for coding or have any questions, I
            {"'"}d be more than happy to connect with you. Feel free to drop me
            a line at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6AB341] to-[#bcdfa8] ">
              tsvetislavt99@gmail.com
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
