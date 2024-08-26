import type { Props } from "./types";

export default function ArrowRight({ className, fill = "white", isBold = false, size }: Props) {
  return !isBold ? (
    <svg className={className} width={size} height={size} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10.5C3 10.0858 3.33579 9.75 3.75 9.75L14.3879 9.75L10.2302 5.79062C9.93159 5.50353 9.92228 5.02875 10.2094 4.73017C10.4965 4.43159 10.9713 4.42228 11.2698 4.70937L16.7698 9.95937C16.9169 10.1008 17 10.296 17 10.5C17 10.704 16.9169 10.8992 16.7698 11.0406L11.2698 16.2906C10.9713 16.5777 10.4965 16.5684 10.2094 16.2698C9.92228 15.9713 9.93159 15.4965 10.2302 15.2094L14.3879 11.25L3.75 11.25C3.33579 11.25 3 10.9142 3 10.5Z"
        fill={fill}
      />
    </svg>
  ) : (
    <svg className={className} width={size} height={size} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15C8 14.3787 8.50368 13.875 9.125 13.875H19.0819L15.8453 10.9359C15.3974 10.5053 15.3834 9.79312 15.8141 9.34525C16.2447 8.89739 16.9569 8.88342 17.4047 9.31406L22.6547 14.1891C22.8753 14.4012 23 14.694 23 15C23 15.306 22.8753 15.5988 22.6547 15.8109L17.4047 20.6859C16.9569 21.1166 16.2447 21.1026 15.8141 20.6547C15.3834 20.2069 15.3974 19.4947 15.8453 19.0641L19.0819 16.125H9.125C8.50368 16.125 8 15.6213 8 15Z"
        fill={fill}
      />
    </svg>
  );
}
