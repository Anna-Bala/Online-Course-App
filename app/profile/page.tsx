import { getServerSession } from "next-auth";

import { getLikedCourses } from "@/utils/getApiData";
import authOptions from "@/app/lib/auth";
import AvatarIcon from "@/icons/Avatar";
import Course from "@/components/Course";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default async function Profile() {
  const activeSession = await getServerSession(authOptions);
  const likedCourses = await getLikedCourses();

  const loggedInUser = activeSession?.user;

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="Your Skillbridge Account"
        info="Welcome to your SkillBridge account page, the central hub for managing your learning experience. Here, you can view and update your personal information, track your course progress, and access all the tools you need to enhance your skills. Whether you're checking your subscription status, reviewing your liked courses, or updating your preferences, everything is at your fingertips."
      />
      <div className="flex flex-col w-full lg:px-[60px] 2xl:px-[132px]">
        <div className="flex items-center gap-4 lg:w-2/5">
          <div className="p-3 bg-white-97 border border-white-90 rounded-full w-min">
            <AvatarIcon size={56} />
          </div>
          <div>
            <Typography className="lg:mt-4" color={typographyColors.grey15} variant={typographyVariants.h2}>
              {loggedInUser?.name}
            </Typography>
            <Typography className="mt-1 lg:mt-2" color={typographyColors.grey35} variant={typographyVariants.body}>
              {loggedInUser?.email}
            </Typography>
          </div>
        </div>

        <hr className="border border-white-95 w-full mt-[40px] mb-[60px]" />

        <section>
          <Typography className="mb-[6px]" color={typographyColors.grey15} htmlTag="h3" variant={typographyVariants.h2}>
            Your liked courses
          </Typography>
          {!!likedCourses?.length ? (
            <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
              Here you can save courses you&apos;re interested in for the future. Browse and mark the ones you want to explore later. Once a course starts, you&apos;ll gain full access to all its
              lessons and materials. It&apos;s a simple way to keep track of courses you&apos;re excited about!
            </Typography>
          ) : (
            <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
              You haven&apos;t liked any courses yet. Browse our catalog and save the ones that catch your interest. Once you like a course, it will appear here for easy access when you&apos;re ready
              to start learning!
            </Typography>
          )}

          <div className="flex flex-col gap-5 mt-5 lg:mt-[60px] lg:flex-row lg:flex-wrap">
            {likedCourses?.map((course) => (
              <Course activeSessionUserId={activeSession?.user.id} course={course} key={course.id} shouldGrow={false} showDislikeButton />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
