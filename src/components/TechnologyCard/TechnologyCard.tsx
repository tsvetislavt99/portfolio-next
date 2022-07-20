/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { isMobile } from 'react-device-detect';
import { technologyMap } from 'utils/get-technology-icon';

interface TechnologyCardProps {
  title: string;
  description: string;
}

export default function TechnologyCard({
  title,
  description,
}: TechnologyCardProps): JSX.Element {
  const [showDescription, setShowDescription] = React.useState(false);
  const [showDescriptionMobile, setShowDescriptionMobile] =
    React.useState(false);
  const icon = React.useMemo(() => {
    const icon = technologyMap.get(title);
    return icon;
  }, [title]);

  return (
    <div className="relative select-none">
      <p
        className={
          showDescription || showDescriptionMobile
            ? 'absolute text-sm text-center font-semibold underline left-1/2 -translate-x-1/2 top-1/4 -z-10'
            : 'hidden'
        }
      >
        {description}
      </p>
      <div
        onMouseEnter={isMobile ? () => {} : () => setShowDescription(true)}
        onMouseLeave={isMobile ? () => {} : () => setShowDescription(false)}
        onTouchStart={
          isMobile ? () => setShowDescriptionMobile(true) : () => {}
        }
        onTouchEnd={isMobile ? () => setShowDescriptionMobile(false) : () => {}}
        onTouchCancel={
          isMobile ? () => setShowDescriptionMobile(false) : () => {}
        }
        className={
          showDescriptionMobile
            ? 'flex flex-col items-center justify-center py-6 rounded-lg shadow-lg opacity-20 shadow-black'
            : 'flex flex-col items-center justify-center py-6 rounded-lg shadow-lg md:hover:opacity-20 md:hover:shadow-black'
        }
      >
        {icon}
        <p className="mt-3 first-letter:uppercase">{title}</p>
      </div>
    </div>
  );
}
