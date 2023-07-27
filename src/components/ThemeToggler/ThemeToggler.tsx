import React, { useEffect, useState, useLayoutEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export default function ThemeToggler(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>();
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    if (
      localStorage.getItem('theme') === 'true' ||
      !('theme' in localStorage)
    ) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'true');
    } else {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'false');
    }
  }, [darkMode]);

  const onToggle = () => {
    setDarkMode((currMode) => !currMode);
  };

  return (
    <div className="cursor-pointer" onClick={() => onToggle()}>
      {darkMode ? (
        <MoonIcon className="w-6 h-6 text-[#fff] hover:scale-110 transition duration-500" />
      ) : (
        <SunIcon className="w-6 h-6 text-[#0F1624] hover:scale-110 transition duration-500" />
      )}
    </div>
  );
}
