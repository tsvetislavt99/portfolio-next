import React from 'react';
import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiJsonwebtokens,
  SiTypescript,
  SiMongodb,
  SiJest,
  SiFirebase,
  SiNextdotjs,
  SiHeroku,
  SiVercel,
  SiRedux,
  SiReact,
} from 'react-icons/si';
const technologyMap = new Map([
  ['javascript', <SiJavascript key="javascript" size={50} color="#fff" />],
  ['nodejs', <SiNodedotjs key="nodejs" size={50} color="#fff" />],
  ['express', <SiExpress key="express" size={50} color="#fff" />],
  [
    'jsonwebtokens',
    <SiJsonwebtokens key="jsonwebtokens" size={50} color="#fff" />,
  ],
  ['react', <SiReact key="react" size={50} color="#fff" />],
  ['typescript', <SiTypescript key="typescript" size={50} color="#fff" />],
  ['mongodb', <SiMongodb key="mongodb" size={50} color="#fff" />],
  ['jest', <SiJest key="jest" size={50} color="#fff" />],
  ['firebase', <SiFirebase key="firebase" size={50} color="#fff" />],
  ['next.js', <SiNextdotjs key="nextjs" size={50} color="#fff" />],
  ['heroku', <SiHeroku key="heroku" size={50} color="#fff" />],
  ['vercel', <SiVercel key="vercel" size={50} color="#fff" />],
  ['redux', <SiRedux key="redux" size={50} color="#fff" />],
]);

export default function TechnologyCard() {
  const [showDescription, setShowDescription] = React.useState(false);
  const icon = React.useMemo(() => {
    const icon = technologyMap.get('redux');
    return icon;
  }, []);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        className="flex flex-col items-center justify-center py-6 rounded-lg shadow-lg hover:opacity-20 hover:shadow-black"
      >
        {icon}
        <p className="mt-3">Redux</p>
      </div>
      <p
        className={
          showDescription
            ? 'absolute text-xs left-1/2 -translate-x-1/2 top-1/4 -z-10'
            : 'hidden'
        }
      >
        Somerandom22222 text Some random text Some random text
      </p>
    </div>
  );
}
