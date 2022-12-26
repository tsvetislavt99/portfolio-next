import BlogCard from 'components/BlogCard';
import Featured from 'components/BlogCard/Featured';
import BlogHero from 'components/BlogHero';
import ParticlesContainer from 'components/Particles';
import SecitonBreak from 'components/SectionBreak/SecitonBreak';
import React from 'react';

export default function Blog() {
  return (
    <>
      <section className="bg-primary dark:bg-primary py-8 px-8 mx-auto max-w-[1240px]">
        <ParticlesContainer className=" -z-10 absolute left-0 right-0 top-32  w-full h-[200vh] lg:h-[150vh]" />
        <BlogHero />
        <div className="py-8">
          <Featured
            type="Article"
            title="How to use Next.js with TypeScript"
            img="/blog/bigImg.jpeg"
            summary="Next.js is a React framework that allows you to build server-side rendered applications.Next.js is a React framework that allows you to build server-side rendered applications.Next.js is a React framework that allows you to build server-side Next.js is a React framework that allows you to build server-side rendered applications. Next.js is a React framework that allows you to build server-side rendered applications. Next.js is a React framework that allows you to build server-side rendered applications. rendered applications.Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2022-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            type="Article"
            img="/blog/man-developing-website-on-desk.svg"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2022-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript"
          />
          <BlogCard
            type="Article"
            img="/blog/bigImg.jpeg"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2021-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript-2"
          />
          <BlogCard
            type="Article"
            img="/blog/api-configuration.png"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2021-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript-3"
          />
          <BlogCard
            type="Article"
            img="/blog/api-configuration.png"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2021-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript-3"
          />
          <BlogCard
            type="Article"
            img="/blog/api-configuration.png"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2021-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript-3"
          />
          <BlogCard
            type="Article"
            img="/blog/api-configuration.png"
            title="How to use Next.js with TypeScript"
            summary="Next.js is a React framework that allows you to build server-side rendered applications. It is a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications. It is also a great tool for building static websites and web applications."
            updatedDate={new Date('2021-08-01')}
            href="/blog/how-to-use-nextjs-with-typescript-3"
          />
        </div>
      </section>
      <SecitonBreak />
    </>
  );
}
