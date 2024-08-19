"use client";

import { useState, useEffect } from "react";

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

  const isLg = windowDimensions.width >= 1024;
  const is2Xl = windowDimensions.width >= 1536;

  return { isLg, is2Xl };
}

export default useGetWindowSize;
