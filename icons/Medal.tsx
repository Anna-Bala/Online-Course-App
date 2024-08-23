import type { Props } from "./types";

export default function Medal({ fill = "#FF9500", size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.148 27.4375C18.273 27.4375 21.6011 24.1094 21.6011 19.9961C21.6011 15.8711 18.273 12.543 14.148 12.543C10.0347 12.543 6.70657 15.8711 6.70657 19.9961C6.70657 24.1094 10.0347 27.4375 14.148 27.4375ZM12.0269 23.8281C11.5816 24.1562 11.1128 23.8164 11.2886 23.3008L12.1323 20.7812L9.9761 19.2461C9.56595 18.9414 9.69485 18.3672 10.2573 18.3672L12.9058 18.3906L13.7144 15.8594C13.8784 15.3438 14.4409 15.3438 14.605 15.8594L15.4136 18.3906L18.062 18.3672C18.6245 18.3672 18.7417 18.9531 18.3433 19.2344L16.187 20.7812L17.0308 23.3008C17.2066 23.8164 16.7378 24.1562 16.2925 23.8281L14.1597 22.2695L12.0269 23.8281ZM7.01126 14.418C8.1597 12.9648 9.74173 11.8633 11.5581 11.3242L6.24954 1.78516L3.16751 6.48438C2.95657 6.78906 2.94485 7.12891 3.13235 7.43359L7.01126 14.418ZM11.523 7.32812H16.7847L20.3589 1H7.94876L11.523 7.32812ZM16.7495 11.3242C18.5777 11.8633 20.148 12.9648 21.2964 14.418L25.187 7.43359C25.3628 7.12891 25.3511 6.78906 25.1402 6.48438L22.0581 1.78516L16.7495 11.3242Z"
        fill={fill}
      />
    </svg>
  );
}
