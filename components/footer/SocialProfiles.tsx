"use client";

import { socialLinks } from "@/app/constants";
import Typography, { typographyColors, typographyVariants } from "../Typography";
import useGetWindowSize from "@/hooks/useGetWindowSize";

export default function SocialProfiles() {
  const { is2Xl } = useGetWindowSize();

  return (
    <div className="w-full mt-6 lg:w-min lg:mt-0 2xl:w-[230px] 2xl:w-[250px]">
      <Typography className="text-[18px] 2xl:text-xl mb-[10px]" variant={typographyVariants.subtitle} color={typographyColors.grey15}>
        Social Profiles
      </Typography>
      <div className="flex gap-[14px]">
        {socialLinks.map(({ Icon, link }) => (
          <a className="block w-min p-3 bg-white-97 border border-white-95 rounded-lg" key={link} target="_blank" href={link}>
            <Icon size={is2Xl ? 24 : 20} />
          </a>
        ))}
      </div>
    </div>
  );
}
