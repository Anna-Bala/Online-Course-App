import type { Props } from "./types";

export default function Plus({ fill = "#262626", size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H10M15 10H10M10 10V5M10 10V15" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
