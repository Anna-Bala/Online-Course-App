"use client";

import CheckIcon from "@/icons/Check";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

type Props = {
  label: string;
  name: string;
};

export default function Checkbox({ label, name }: Props) {
  const { is2Xl } = useGetWindowSize();

  return (
    <div className="flex flex-row gap-2 items-center 2xl:gap-[10px]">
      <input
        className="appearance-none relative peer w-6 h-6 bg-white-97 border border-white-95 rounded outline-none transition transition-border duration-300 ease-in-out checked:border-1 checked:border-white-99 checked:bg-orange-50 2xl:w-[30px] 2xl:h-[30px]"
        id={name}
        name={name}
        type="checkbox"
      />
      <Typography color={typographyColors.grey40} className="select-none" htmlFor={name} htmlTag="label" variant={typographyVariants.body}>
        {label}
      </Typography>
      <CheckIcon className="absolute invisible peer-checked:visible" size={is2Xl ? 30 : 24} />
    </div>
  );
}
