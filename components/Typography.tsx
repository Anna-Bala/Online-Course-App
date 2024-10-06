import classNames from "classnames";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color:
    | "white"
    | "black"
    | "grey10"
    | "grey15"
    | "grey20"
    | "grey30"
    | "grey35"
    | "grey40"
    | "grey60"
    | "grey70"
    | "red50"
    | "orange50"
    | "orange70"
    | "orange75"
    | "orange80"
    | "orange90"
    | "orange95"
    | "orange97"
    | "orange99";
  className?: string;
  href?: string;
  htmlFor?: string;
  htmlTag?: keyof JSX.IntrinsicElements;
  variant?: "h1" | "h2" | "h3" | "body" | "label" | "subtitle";
};

const colorClassNames = {
  white: "text-absolute-white",
  black: "text-absolute-black",
  grey10: "text-grey-10",
  grey15: "text-grey-15",
  grey20: "text-grey-20",
  grey30: "text-grey-30",
  grey35: "text-grey-35",
  grey40: "text-grey-40",
  grey60: "text-grey-60",
  grey70: "text-grey-70",
  red50: "text-red-50",
  orange50: "text-orange-50",
  orange70: "text-orange-70",
  orange75: "text-orange-75",
  orange80: "text-orange-80",
  orange90: "text-orange-90",
  orange95: "text-orange-95",
  orange97: "text-orange-97",
  orange99: "text-orange-99",
};

const typographyVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "body",
  label: "label",
  subtitle: "subtitle",
} as const;

const typographyColors = {
  white: "white",
  black: "black",
  grey10: "grey10",
  grey15: "grey15",
  grey20: "grey20",
  grey30: "grey30",
  grey35: "grey35",
  grey40: "grey40",
  grey60: "grey60",
  grey70: "grey70",
  red50: "red50",
  orange50: "orange50",
  orange70: "orange70",
  orange75: "orange75",
  orange80: "orange80",
  orange90: "orange90",
  orange95: "orange95",
  orange97: "orange97",
  orange99: "orange99",
} as const;

const variantHTMLTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  label: "label",
  subtitle: "p",
};

const variantClassNames = {
  h1: "text-base lg:text-4xl 2xl:text-5xl font-semibold",
  h2: "text-2xl lg:text-[28px] 2xl:text-[38px] font-medium",
  h3: "text-[28px] lg:text-[38px] 2xl:text-5xl font-semibold",
  body: "text-sm lg:text-base 2xl:text-lg font-normal",
  label: "text-sm lg:text-base 2xl:text-lg font-medium",
  subtitle: "text-xl lg:text-xl 2xl:text-2xl font-semibold",
};

export default function Typography({ children, color, className = "", href, htmlFor, htmlTag: CustomHTMLTag, variant = "body" }: Props) {
  const HTMLTag = CustomHTMLTag || (variantHTMLTag[variant] as keyof JSX.IntrinsicElements);

  return (
    <HTMLTag className={classNames(`${variantClassNames[variant]} ${colorClassNames[color]} ${className}`)} href={href} htmlFor={htmlFor}>
      {children}
    </HTMLTag>
  );
}

export { typographyColors, typographyVariants };
