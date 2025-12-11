"use client";

import { useEffect, useState } from "react";

function useGetWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimensions.width <= 800;
  const isLg = windowDimensions.width >= 1024;
  const isXl = windowDimensions.width >= 1280;
  const is2Xl = windowDimensions.width >= 1536;

  return { isMobile, isLg, isXl, is2Xl };
}

export default useGetWindowSize;
