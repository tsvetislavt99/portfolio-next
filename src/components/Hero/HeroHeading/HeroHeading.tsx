import React from 'react';
import { onMouseLeaveHandler, onMouseMoveHandler } from 'utils/text-wave';

const NAME = 'Tsvetislav Todorov';

export default function HeroHeading() {
  return (
    <h1
      onMouseMove={onMouseMoveHandler}
      className="pb-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70"
    >
      {NAME.split('').map((letter, index) =>
        letter === ' ' ? (
          ' '
        ) : (
          <span
            key={index}
            className="inline-block"
            onMouseLeave={onMouseLeaveHandler}
          >
            {letter}
          </span>
        ),
      )}
    </h1>
  );
}
