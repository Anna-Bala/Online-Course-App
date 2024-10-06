"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import { ArrowRightIcon, AvatarIcon, LogoIcon } from "@/icons";
import LinkButton, { linkButtonVariants } from "./LinkButton";
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

type Props = {
  isActiveSession: boolean;
};

export default function Navigation({ isActiveSession }: Props) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  const toggleIsMobileNavigationOpen = () => setIsMobileNavigationOpen((prevState) => !prevState);

  const pathname = usePathname();
  const { isMobile, isLg, is2Xl } = useGetWindowSize();

  return (
    <header className="flex flex-col items-center justify-between px-4 pt-10 mb-[50px] lg:px-5 lg:pt-0 lg:mb-[80px] 2xl:mb-[109px]">
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
            <LogoIcon size={is2Xl ? 54 : isLg ? 44 : 40} />
          </Link>
          <div
            className={classNames("flex gap-1", {
              "flex-col items-end absolute mt-[160px] ml-auto bg-absolute-white w-full h-max p-6 rounded-l-lg z-50 inset-0 transform translate-x-full transition-transform duration-300": isMobile,
              "items-center": !isMobile,
              "translate-x-0": isMobileNavigationOpen,
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
            {!isActiveSession ? (
              credentialsNavigationItems.map(({ href, name, variant }) => (
                <li key={href}>
                  <LinkButton className="py-3 2xl:py-[14px]" variant={variant} href={href}>
                    {name}
                  </LinkButton>
                </li>
              ))
            ) : (
              <div className="flex items-center gap-4">
                <button
                  className="text-grey-15 hover:bg-white-95 text-[14px] font-medium rounded-md py-[14px] px-5 transition-colors duration-300 ease-in-out lg:mx-auto 2xl:text-[18px]"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
                <Link className="p-3 bg-white-97 border border-white-90 rounded-full transition-colors duration-300 ease-in-out hover:bg-white-95" href="/profile">
                  <AvatarIcon size={36} />
                </Link>
              </div>
            )}
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
