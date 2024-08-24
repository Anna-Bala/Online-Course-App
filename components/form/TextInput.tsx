import type { HTMLInputTypeAttribute } from "react";

import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  label: string;
  labelClassName: string;
  name: string;
  placeholder: string;
  rows?: number;
  type?: HTMLInputTypeAttribute;
};

export default function TextInput({ label, labelClassName, name, placeholder, rows, type = "text" }: Props) {
  const inputClassNames =
    "p-5 bg-white-99 border border-white-95 rounded-md placeholder-grey-40 text-sm text-grey-20 outline-none transition transition-border duration-300 ease-in-out focus:ring-0 focus:border-1 focus:border-orange-50 lg:text-base 2xl:py-6 2xl:text-lg";

  return (
    <div className="flex flex-col">
      <Typography color={typographyColors.grey15} className={`select-none	${labelClassName}`} htmlFor={name} variant={typographyVariants.label}>
        {label}
      </Typography>
      {rows ? (
        <textarea className={inputClassNames} id={name} name={name} rows={rows} placeholder={placeholder} />
      ) : (
        <input className={inputClassNames} id={name} name={name} type={type} placeholder={placeholder} />
      )}
    </div>
  );
}
