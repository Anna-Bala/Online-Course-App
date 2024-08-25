import type { Props } from "./types";

export default function Link({ className, fill = "#262626", size }: Props) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.00004 16.3333L15.8334 5.49996M15.8334 5.49996V15.9M15.8334 5.49996H5.43337" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
