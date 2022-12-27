import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      style={{
        scrollBehavior: 'smooth',
        transition: 'all',
        transitionDuration: '0.3',
      }}
    >
      <Head />
      <body className=" text-dark-primary dark:text-light-primary bg-light-primary dark:bg-dark-primary transition duration-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
