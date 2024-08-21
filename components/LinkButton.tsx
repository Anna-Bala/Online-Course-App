import classNames from "classnames";
import Link from "next/link";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href: string;
  variant?: "primary" | "secondary" | "link";
};

const linkButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  link: "link",
} as const;

const variantClassNames = {
  primary: "text-absolute-white bg-orange-50 hover:bg-orange-70",
  secondary: "text-grey-15 bg-absolute-white hover:bg-white-95",
  link: "text-grey-15 hover:bg-white-95",
};

export default function LinkButton({ children, className, fullWidth = false, href, variant = "primary" }: Props) {
  return (
    <Link
      className={classNames(
        `flex items-center justify-center px-5 py-[14px] 2xl:px-6 2xl:py-[18px] rounded-md 2xl:rounded-lg transition-colors duration-300 ease-in-out text-[14px] 2xl:text-[18px] ${variantClassNames[variant]} ${className}`,
        {
          "flex-grow": fullWidth,
        }
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export { linkButtonVariants };
