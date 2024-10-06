import { getServerSession } from "next-auth";

import AvatarIcon from "@/icons/Avatar";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default async function Profile() {
  const activeSession = await getServerSession();

  const loggedInUser = activeSession?.user;

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="Your Skillbridge Account"
        info="Welcome to your SkillBridge account page, the central hub for managing your learning experience. Here, you can view and update your personal information, track your course progress, and access all the tools you need to enhance your skills. Whether you're checking your subscription status, reviewing your liked courses, or updating your preferences, everything is at your fingertips."
      />
      <div className="flex flex-row w-full lg:px-[60px] 2xl:px-[132px]">
        <div className="w-2/5">
          <div className="p-3 bg-white-97 border border-white-90 rounded-full w-min">
            <AvatarIcon size={56} />
          </div>
          <Typography className="mt-4" color={typographyColors.grey15} variant={typographyVariants.h2}>
            {loggedInUser?.name}
          </Typography>
          <Typography className="mt-2" color={typographyColors.grey35} variant={typographyVariants.body}>
            {loggedInUser?.email}
          </Typography>
        </div>

        <div className="w-3/5">
          <Typography className="mb-[6px]" color={typographyColors.grey15} variant={typographyVariants.h2}>
            Your liked courses
          </Typography>
          <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
            Here you can save courses you&apos;re interested in for the future. Browse and mark the ones you want to explore later. Once a course starts, you&apos;ll gain full access to all its
            lessons and materials. It&apos;s a simple way to keep track of courses you&apos;re excited about!
          </Typography>
        </div>
      </div>
    </main>
  );
}
