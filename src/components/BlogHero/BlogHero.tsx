import React from 'react';
import Image from 'next/image';
import BlogSearch from 'components/BlogSearch';

export default function BlogHero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center mb-10">
      <div className="flex flex-col justify-center items-start lg:w-1/2 lg:mx-8">
        <h1 className="text-4xl font-bold mb-2">
          Learn development with great articles and tutorials.
        </h1>
        <p className="text-lg mb-7">Find the latest of my writing here.</p>
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
