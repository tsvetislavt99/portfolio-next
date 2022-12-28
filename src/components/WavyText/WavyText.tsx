/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ElementType } from 'react';
import { isMobile } from 'react-device-detect';
import { onMouseLeaveHandler, onMouseMoveHandler } from 'utils/text-wave';

const NAME = 'Tsvetislav Todorov';

interface WavyTextProps {
  text?: string;
  className?: string;
  as?: ElementType;
}

export default function WavyText({
  text = NAME,
  className,
  as: Tag = 'h1',
}: WavyTextProps) {
  const words = text.split(' ');
  return (
    <Tag
      onMouseMove={isMobile ? () => {} : onMouseMoveHandler}
      className={
        className
          ? className
          : 'pb-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70'
      }
    >
      {words.map((word, index) => (
        <React.Fragment key={word + index}>
          <span className=" whitespace-nowrap">
            {word.split('').map((letter, index) => (
              <span
                key={index + letter + word}
                className="inline-block"
                onMouseLeave={isMobile ? () => {} : onMouseLeaveHandler}
              >
                {letter}
              </span>
            ))}
          </span>{' '}
        </React.Fragment>
      ))}
    </Tag>
  );
}
