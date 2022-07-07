import React from 'react';
import GithubIcon from '../../public/social-icons/github.svg';
import LinkedInIcon from '../../public/social-icons/linkedin.svg';

export default function SocialSection() {
  return (
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
  );
}
