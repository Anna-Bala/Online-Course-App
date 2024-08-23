"use client";

import useGetWindowSize from "@/hooks/useGetWindowSize";

export default function LogoGrey() {
  const { isXl } = useGetWindowSize();

  const size = isXl ? 445 : 235;

  return (
    <svg width={size} height={size} viewBox="0 0 201 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5326 183.333L75.6993 129.167H129.866V75L184.033 129.167L129.866 183.333H21.5326Z" fill="#F7F7F8" />
      <path d="M21.5326 75L75.6993 129.167V75H129.866L184.033 20.8334H75.6993L21.5326 75Z" fill="#F7F7F8" />
    </svg>
  );
}
