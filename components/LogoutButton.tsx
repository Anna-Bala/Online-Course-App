"use client";

import { LogoutIcon } from "@/icons";
import { signOut } from "next-auth/react";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function LogoutButton() {
  return (
    <button
      className="flex items-center gap-1 hover:bg-orange-95 text-[14px] font-medium rounded-md py-[14px] px-5 transition-colors duration-300 ease-in-out lg:mx-auto 2xl:text-[18px]"
      onClick={() => signOut()}
    >
      <Typography className="hover:cursor-pointer" color={typographyColors.orange50} variant={typographyVariants.label}>
        Logout
      </Typography>
      <LogoutIcon size={24} />
    </button>
  );
}
