import { useState, useEffect } from 'react';

export const useLoading = (minLoadingTime: number = 2000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    // Also check if all resources are loaded
    const handleLoad = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => setIsLoading(false), minLoadingTime);
      }
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), minLoadingTime);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [minLoadingTime]);

  return isLoading;
};