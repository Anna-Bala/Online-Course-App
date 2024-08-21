"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import ArrowRightIcon from "@/icons/ArrowRight";
import LinkButton, { linkButtonVariants } from "./LinkButton";
import LogoIcon from "@/icons/Logo";
import NavigationIcon from "@/icons/Navigation";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

const contentNavigationItems = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/courses",
    name: "Courses",
  },
  {
    href: "/about-us",
    name: "About Us",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const credentialsNavigationItems = [
  {
    href: "/sign-up",
    name: "Sign Up",
    variant: linkButtonVariants.link,
  },
  {
    activeClassName: "",
    href: "/login",
    name: "Login",
    variant: linkButtonVariants.primary,
  },
];

export default function Navigation() {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  const toggleIsMobileNavigationOpen = () => setIsMobileNavigationOpen((prevState) => !prevState);

  const pathname = usePathname();
  const { isMobile, isLg, is2Xl } = useGetWindowSize();

  return (
    <header className="flex flex-col items-center justify-between px-4 pt-10 mb-[50px] lg:px-5 lg:pt-0 lg:mb-[80px]">
      <div className="flex items-center justify-center text-absolute-white bg-orange-50 w-full text-center py-[10px] px-4 lg:py-[14px] rounded-md 2xl:rounded-lg mb-4 2xl:mb-5">
        <Typography color={typographyColors.white} variant={typographyVariants.body}>
          Free Courses 🌟 Sale Ends Soon,&nbsp;
        </Typography>
        <Link className="flex items-center hover:underline" href="/pricing">
          <Typography className="mr-3" color={typographyColors.white} variant={typographyVariants.body}>
            Get It Now
          </Typography>
          <ArrowRightIcon size={is2Xl ? 24 : 20} />
        </Link>
      </div>
      <nav className="w-full border-b border-white-95 pb-[14px]">
        <ul className="flex items-center gap-1 lg:px-[60px] 2xl:px-[132px]">
          <Link className="mr-[46px]" href="/">
            <LogoIcon size={is2Xl ? 54 : isLg ? 44 : 20} />
          </Link>
          <div
            className={classNames("flex gap-1", {
              "flex-col items-end absolute mt-[160px] ml-auto bg-absolute-white w-full h-max p-6 rounded-l-lg z-50 inset-0 transform translate-x-full transition-transform duration-300": isMobile,
              "items-center": !isMobile,
              "-translate-x-0": isMobileNavigationOpen,
            })}
          >
            {contentNavigationItems.map(({ href, name }) => (
              <li className={classNames({ "w-full": isMobile })} key={href}>
                <LinkButton className={classNames("py-3 2xl:py-[14px] text-center", { "bg-white-95": pathname === href })} fullWidth={isMobile} variant={linkButtonVariants.link} href={href}>
                  {name}
                </LinkButton>
              </li>
            ))}
          </div>
          <div className="flex ml-auto">
            {credentialsNavigationItems.map(({ href, name, variant }) => (
              <li key={href}>
                <LinkButton className="py-3 2xl:py-[14px]" variant={variant} href={href}>
                  {name}
                </LinkButton>
              </li>
            ))}
            {isMobile && (
              <button className="ml-5" onClick={toggleIsMobileNavigationOpen}>
                <NavigationIcon size={34} />
              </button>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
