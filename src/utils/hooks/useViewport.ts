import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

import { deviceWidths } from 'src/assets/theme';

const getWidth = () => {
  return window.innerWidth;
};

export const useViewport = () => {
  // Returns an object containing the states of the viewport
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const handleResize = debounce(() => setWidth(getWidth()), 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    isMobile: width <= deviceWidths.tablet,
    isTablet: width > deviceWidths.laptop && width <= deviceWidths.laptop,
    isLaptop: width > deviceWidths.desktop && width <= deviceWidths.desktop,
    isDesktop: width > deviceWidths.desktop,
  };
};
