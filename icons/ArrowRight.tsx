import type { Props } from "./types";

export default function ArrowRight({ fill = "white", size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10.5C3 10.0858 3.33579 9.75 3.75 9.75L14.3879 9.75L10.2302 5.79062C9.93159 5.50353 9.92228 5.02875 10.2094 4.73017C10.4965 4.43159 10.9713 4.42228 11.2698 4.70937L16.7698 9.95937C16.9169 10.1008 17 10.296 17 10.5C17 10.704 16.9169 10.8992 16.7698 11.0406L11.2698 16.2906C10.9713 16.5777 10.4965 16.5684 10.2094 16.2698C9.92228 15.9713 9.93159 15.4965 10.2302 15.2094L14.3879 11.25L3.75 11.25C3.33579 11.25 3 10.9142 3 10.5Z"
        fill={fill}
      />
    </svg>
  );
}