import { useEffect, useState } from 'react';

const useColorSchema = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia('(prefers-color-scheme: dark').matches
  );

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        event.matches ? setIsDarkMode(true) : setIsDarkMode(false);
      });
    return () => window.removeEventListener('change', () => {});
  }, []);

  return isDarkMode;
};

export default useColorSchema;
