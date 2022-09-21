import { useEffect, useState } from 'react';

export const useIsMobile = (sizeMobile = 640) => {
  const [isMobile, setiSMobile] = useState(
    document.documentElement.clientWidth < sizeMobile
  );

  const handlerSize = (event: UIEvent) => {
    if (document.documentElement.clientWidth < sizeMobile) {
      setiSMobile(true);
    } else {
      setiSMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handlerSize);
    return () => window.removeEventListener('resize', handlerSize);
  }, [isMobile]);

  return isMobile;
};
