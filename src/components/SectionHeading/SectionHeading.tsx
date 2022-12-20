import React from 'react';

interface SectionHeadingProps {
  children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="py-5 px-5 sm:p-10 text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
      {children}
    </h1>
  );
}
