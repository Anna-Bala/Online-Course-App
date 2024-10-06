"use client";

import { BaseSyntheticEvent, useState } from "react";

import EyeClosedIcon from "@/icons/EyeClosed";
import EyeIcon from "@/icons/Eye";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

type Props = {
  error?: string;
  label: string;
  labelClassName: string;
  name: string;
  placeholder: string;
  rows?: number;
};

export default function PasswordInput({ error, label, labelClassName, name, placeholder }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleIsPasswordVisible = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setIsPasswordVisible((prevState) => !prevState);
  };

  const { isLg } = useGetWindowSize();

  const iconSize = isLg ? 24 : 20;

  return (
    <div className="flex flex-col">
      <Typography color={typographyColors.grey15} className={`select-none	${labelClassName}`} htmlFor={name} variant={typographyVariants.label}>
        {label}
      </Typography>
      <div className="relative">
        <input
          className={`w-full p-5 bg-white-99 border border-white-95 rounded-md placeholder-grey-40 text-sm text-grey-20 outline-none transition transition-border duration-300 ease-in-out focus:ring-0 focus:border-1 focus:border-orange-50 lg:text-base 2xl:py-6 2xl:text-lg ${
            error ? "border-red-50 focus:border-red-50" : ""
          }`}
          id={name}
          name={name}
          placeholder={placeholder}
          type={!isPasswordVisible ? "password" : "text"}
        />
        <button className="absolute inset-y-0 right-0 pr-6 flex items-center" onClick={toggleIsPasswordVisible}>
          {isPasswordVisible ? <EyeIcon size={iconSize} /> : <EyeClosedIcon size={iconSize} />}
        </button>
      </div>
      {error && (
        <Typography className="mt-2" color={typographyColors.red50} variant={typographyVariants.body}>
          {error}
        </Typography>
      )}
    </div>
  );
}
