import type { Props } from "./types";

export default function Logo({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.333313" width="54" height="54" rx="8" fill="#FF9500" />
      <path d="M11.5003 43.6666L22.3336 32.8333H33.167V22L44.0003 32.8333L33.167 43.6666H11.5003Z" fill="white" />
      <path d="M11.5003 22L22.3336 32.8333V22H33.167L44.0003 11.1666H22.3336L11.5003 22Z" fill="white" />
    </svg>
  );
}
