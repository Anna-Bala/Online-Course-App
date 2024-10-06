import type { Props } from "./types";

export default function Avatar({ className, fill = "#333333", size }: Props) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.50003 6C7.50003 3.51472 9.51474 1.5 12 1.5C14.4853 1.5 16.5 3.51472 16.5 6C16.5 8.48528 14.4853 10.5 12 10.5C9.51474 10.5 7.50003 8.48528 7.50003 6Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75127 20.1053C3.82861 15.6156 7.49201 12 12 12C16.5082 12 20.1716 15.6157 20.2488 20.1056C20.2539 20.4034 20.0824 20.676 19.8117 20.8002C17.4327 21.8918 14.7865 22.5 12.0003 22.5C9.21389 22.5 6.56746 21.8917 4.18835 20.7999C3.91768 20.6757 3.74614 20.4031 3.75127 20.1053Z"
        fill={fill}
      />
    </svg>
  );
}