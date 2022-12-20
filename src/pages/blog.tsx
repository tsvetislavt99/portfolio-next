import BlogCard from 'components/BlogCard';
import React from 'react';

export default function Blog() {
  return (
    <section className="bg-primary dark:bg-primary">
      <div className="py-8 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
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
      </div>
    </section>
  );
}
