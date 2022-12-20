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
  const mobileOpacity = showDescriptionMobile ? 'opacity-20' : 'opacity-0';
  const mobileShadow = showDescriptionMobile ? 'shadow-black' : 'shadow-none';
  const desktopOpacity = isMobile ? 'hover:opacity-20' : '';
  const desktopShadow = isMobile ? 'hover:shadow-black' : '';
  const icon = React.useMemo(() => {
    const icon = technologyMap.get(title);
    return icon;
  }, [title]);

  return (
    <div className="relative select-none">
      <p
        className={
          showDescription || showDescriptionMobile
            ? 'absolute flex items-center justify-center h-full text-sm text-center font-semibold underline left-1/2 -translate-x-1/2 -z-10'
            : 'hidden'
        }
      >
        {description}
      </p>
      <div
        onMouseEnter={isMobile ? () => {} : () => setShowDescription(true)}
        onMouseLeave={isMobile ? () => {} : () => setShowDescription(false)}
        onTouchStart={
          isMobile
            ? () => setShowDescriptionMobile((value) => !value)
            : () => {}
        }
        onTouchCancel={
          isMobile ? () => setShowDescriptionMobile(false) : () => {}
        }
        className={
          showDescriptionMobile
            ? 'flex flex-col items-center justify-center py-6 rounded-lg shadow-lg opacity-20 shadow-black'
            : isMobile
            ? 'flex flex-col items-center justify-center py-6 rounded-lg shadow-lg'
            : 'flex flex-col items-center justify-center py-6 rounded-lg shadow-lg hover:opacity-20 hover:shadow-black'
        }
      >
        {icon}
        <p className="mt-3 first-letter:uppercase">{title}</p>
      </div>
    </div>
  );
}
