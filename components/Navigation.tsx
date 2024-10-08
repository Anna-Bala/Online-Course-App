"use client";

import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import { AvatarIcon, LogoIcon } from "@/icons";
import LinkButton, { linkButtonVariants } from "./LinkButton";
import LogoutButton from "@/components/LogoutButton";
import NavigationIcon from "@/icons/Navigation";
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
    <header className="flex flex-col items-center justify-between px-4 pt-5 mb-[50px] lg:px-5 lg:pt-0 lg:mb-[80px] 2xl:mb-[109px]">
      <nav className="w-full border-b border-white-95 pb-[14px]">
        <ul className="flex items-center gap-1 lg:px-[60px] 2xl:px-[132px]">
          <Link className="mr-[46px]" href="/">
            <LogoIcon size={is2Xl ? 54 : isLg ? 44 : 40} />
          </Link>
          <div
            className={classNames("flex gap-1", {
              "flex-col items-end absolute mt-[150px] ml-auto bg-absolute-white w-full h-max p-6 rounded-l-lg z-50 inset-0 transform transition-transform duration-300": isMobile,
              "items-center": !isMobile,
              "translate-x-full": !isMobileNavigationOpen && isMobile,
              "translate-x-0": isMobileNavigationOpen,
            })}
          >
            <>
              {contentNavigationItems.map(({ href, name }) => (
                <li className={classNames({ "w-full": isMobile })} onClick={toggleIsMobileNavigationOpen} key={href}>
                  <LinkButton
                    className={classNames("py-3 2xl:py-[14px] text-center text-nowrap	", { "bg-white-95": pathname === href })}
                    fullWidth={isMobile}
                    variant={linkButtonVariants.link}
                    href={href}
                  >
                    {name}
                  </LinkButton>
                </li>
              ))}
              {isMobile && isActiveSession && <LogoutButton />}
            </>
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
                {!isMobile && isActiveSession && <LogoutButton />}
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
