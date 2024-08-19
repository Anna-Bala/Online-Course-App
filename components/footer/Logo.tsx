"use client";

import LogoIcon from "@/icons/Logo";
import useGetWindowSize from "@/hooks/useGetWindowSize";

export default function Logo() {
  const { is2Xl } = useGetWindowSize();

  return <LogoIcon size={is2Xl ? 54 : 44} />;
}
