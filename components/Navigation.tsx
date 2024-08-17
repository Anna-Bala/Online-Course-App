"use client";

import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

import ArrowRight from "@/public/arrow-right.svg";
import LinkButton, { linkButtonVariants } from "./LinkButton";
import Logo from "@/public/logo.svg";

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
  const pathname = usePathname();

  return (
    <header className="flex flex-col items-center justify-between">
      <div className="text-absolute-white bg-orange-50 w-full text-center py-[14px] rounded-md 2xl:rounded-lg mb-4 2xl:mb-5">
        Free Courses 🌟 Sale Ends Soon,{" "}
        <Link className="mr-[46px] hover:underline" href="/pricing">
          <span>Get It Now</span>
          <ArrowRight className="inline-block lg:ml-5" />
        </Link>
      </div>
      <nav className="w-full">
        <ul className="flex items-center gap-1 lg:px-[60px] 2xl:px-[132px]">
          <Link className="mr-[46px]" href="/">
            <Logo />
          </Link>
          {contentNavigationItems.map(({ href, name }) => (
            <li key={href}>
              <LinkButton className={classNames("py-3 2xl:py-[14px]", { "bg-white-95": pathname === href })} variant={linkButtonVariants.link} href={href}>
                {name}
              </LinkButton>
            </li>
          ))}
          <div className="flex ml-auto">
            {credentialsNavigationItems.map(({ href, name, variant }) => (
              <li key={href}>
                <LinkButton className="py-3 2xl:py-[14px]" variant={variant} href={href}>
                  {name}
                </LinkButton>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}
