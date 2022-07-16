import React from 'react';
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
  const icon = React.useMemo(() => {
    const icon = technologyMap.get(title);
    return icon;
  }, [title]);

  return (
    <div className="relative">
      <p
        className={
          showDescription
            ? 'absolute text-sm text-center font-semibold underline left-1/2 -translate-x-1/2 top-1/4 -z-10'
            : 'hidden'
        }
      >
        {description}
      </p>
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className="flex flex-col items-center justify-center py-6 rounded-lg shadow-lg hover:opacity-20 hover:shadow-black"
      >
        {icon}
        <p className="mt-3 first-letter:uppercase">{title}</p>
      </div>
    </div>
  );
}
