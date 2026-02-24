"use client";

import { useEffect, useState } from "react";

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  if (!hasMounted) return false;
  
  return isMobile;
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setBreakpoint({
        isXs: width < 480,
        isSm: width >= 480 && width < 640,
        isMd: width >= 640 && width < 768,
        isLg: width >= 768 && width < 1024,
        isXl: width >= 1024 && width < 1280,
        is2xl: width >= 1280,
      });
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);

    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  if (!hasMounted) {
    return {
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: true,
      isXl: false,
      is2xl: false,
    };
  }

  return breakpoint;
}
