import Link from "next/link";

import { LocationIcon, MailIcon, PhoneIcon } from "@/icons";
import Logo from "./Logo";
import SocialProfiles from "./SocialProfiles";
import Typography, { typographyColors, typographyVariants } from "../Typography";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-absolute-white px-5 pt-[50px] pb-6 lg:px-20 lg:pt-[60px] lg:pb-5 lg:flex-row lg:flex-wrap lg:justify-between 2xl:pt-[100px] 2xl:pb-[30px] 2xl:px-[162px]">
      <div className="flex flex-col gap-[30px]">
        <Logo />
        <div className="flex flex-col gap-3">
          <a className="flex items-center gap-[6px]" href="mailto:hello@skillbridge.com">
            <MailIcon />
            <Typography variant={typographyVariants.body} htmlTag="span" color={typographyColors.grey15}>
              hello@skillbridge.com
            </Typography>
          </a>
          <a className="flex items-center gap-[6px]" href="tel:+9191813232309">
            <PhoneIcon />
            <Typography variant={typographyVariants.body} htmlTag="span" color={typographyColors.grey15}>
              +91 91813 23 2309
            </Typography>
          </a>
          <a className="flex items-center gap-[6px]" href="https://earth.google.com/web/@54.81903745,56.24340367,-7608.18697546a,22347029.54528332d,35y,39.37498015h,0t,0r/data=OgMKATA">
            <LocationIcon />
            <Typography variant={typographyVariants.body} htmlTag="span" color={typographyColors.grey15}>
              Somewhere in the World
            </Typography>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-[30px] mt-6 lg:mt-0">
        <div className="flex flex-col gap-1 xl:w-[230px] 2xl:w-[250px]">
          <Link className="mb-[6px]" href="/">
            <Typography className="text-[18px] 2xl:text-xl" variant={typographyVariants.subtitle} color={typographyColors.grey15}>
              Home
            </Typography>
          </Link>
          <Link href="/#benefits">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Benefits
            </Typography>
          </Link>
          <Link href="/#courses">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Our Courses
            </Typography>
          </Link>
          <Link href="/#testimonials">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Our Testimonials
            </Typography>
          </Link>
          <Link href="/#faq">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Our FAQ
            </Typography>
          </Link>
        </div>
        <div className="flex flex-col gap-1 xl:w-[230px] 2xl:w-[250px]">
          <Link className="mb-[6px]" href="/about-us">
            <Typography className="text-[18px] 2xl:text-xl" variant={typographyVariants.subtitle} color={typographyColors.grey15}>
              About Us
            </Typography>
          </Link>
          <Link href="/about-us#company">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Company
            </Typography>
          </Link>
          <Link href="/about-us#achievements">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Achievements
            </Typography>
          </Link>
          <Link href="/about-us#goals">
            <Typography variant={typographyVariants.body} color={typographyColors.grey35}>
              Our Goals
            </Typography>
          </Link>
        </div>
        <SocialProfiles />
      </div>
      <hr className="border-white-95 my-5 w-full lg:my-[50px]" />
      <Typography className="text-center w-full" variant={typographyVariants.body} color={typographyColors.grey40}>
        &copy; 2023 Skillbridge. All rights reserved.
      </Typography>
    </footer>
  );
}
