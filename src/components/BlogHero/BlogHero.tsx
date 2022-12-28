import React from 'react';
import Image from 'next/image';
import BlogSearch from 'components/BlogSearch';
import WavyText from 'components/WavyText';

export default function BlogHero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mb-10">
      <div className="flex flex-col justify-center items-start lg:w-1/2 lg:mx-8">
        <WavyText
          className="text-4xl font-bold mb-2 select-none"
          text={`Learn development with great articles and tutorials.`}
        />
        <WavyText
          as="p"
          className="text-lg mb-7 select-none"
          text="Find the latest of my writing here."
        />
        <BlogSearch />
      </div>

      <Image
        className="mx-auto lg:-mt-12 lg:mx-0"
        src="/blog/hero.png"
        alt="Web article 3D Illustration by iqonic.design"
        width={500}
        height={500}
      />
    </div>
  );
}
