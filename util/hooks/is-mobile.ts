import { useEffect, useState } from 'react';

export const useIsMobile = (sizeMobile = 640) => {
  const [isMobile, setiSMobile] = useState<boolean>();

  const handlerSize = () => {
    if (document.documentElement.clientWidth < sizeMobile) {
      setiSMobile(true);
    } else {
      setiSMobile(false);
    }
  };

  useEffect(() => handlerSize(), []);

  useEffect(() => {
    window.addEventListener('resize', handlerSize);
    return () => window.removeEventListener('resize', handlerSize);
  }, [isMobile]);

  return isMobile;
};
