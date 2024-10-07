import { getServerSession } from "next-auth";
import Image from "next/image";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DetailedCourseHeader from "@/components/DetailedCourseHeader";
import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

import type { Course } from "@/app/api/types";

type Props = {
  course: Course;
};

export default async function DetailedCourse({ course }: Props) {
  const activeSession = await getServerSession(authOptions);

  return (
    <div className="p-6 bg-absolute-white rounded-lg w-full lg:p-10 lg:rounded-[10px] 2xl:p-[50px] 2xl:rounded-xl" key={course.id}>
      <div className="flex flex-col lg:flex-row lg:gap-x-[50px] lg:items-center">
        <div className="mb-5 lg:mb-0">
          <DetailedCourseHeader activeSession={activeSession} courseId={course.id} courseTitle={course.title} isCourseLiked={course.isLiked} />
          <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
            {course.description}
          </Typography>
        </div>
        <LinkButton className="w-max h-max text-nowrap font-medium bg-white-99 border border-white-95 lg:ml-auto" href={`/courses/${course.id}`} variant={linkButtonVariants.link}>
          View Course
        </LinkButton>
      </div>

      <div className="w-full flex gap-[10px] my-6 2xl:my-[30px]">
        {course.images.map((image, index) => (
          <div className="relative w-2/6 h-[100px] lg:h-[325px] 2xl:h-[422px]" key={image}>
            <Image className="rounded" fill alt={`${course.title}${index}`} src={image} style={{ objectFit: "cover" }} sizes="30vw" />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-4 lg:flex-nowrap lg:items-center">
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.weeks} Weeks
        </Typography>
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.level}
        </Typography>
        <Typography className="!text-[16px] !font-medium w-full lg:ml-auto lg:w-max lg:!text-[18px] 2xl:!text-[20px]" color={typographyColors.grey15} variant={typographyVariants.body}>
          By {course.author}
        </Typography>
      </div>

      <div className="flex flex-col rounded-[10px] border border-white-95 mt-10">
        <Typography
          className="!text-[16px] !font-semibold border-b border-white-95 px-5 py-[14px] lg:!text-[18px] 2xl:!text-[22px] 2xl:px-[30px] 2xl:py-6"
          color={typographyColors.grey15}
          variant={typographyVariants.body}
        >
          Curriculum
        </Typography>
        <div className="p-6 flex flex-col lg:flex-row lg:px-0 lg:divide-x 2xl:py-[30px]">
          {course.sections.map(({ id, title }, index) => (
            <div className="basis-full lg:px-10 2xl:px-[50px]" key={id}>
              <Typography
                className="!font-extrabold !text-[30px] leading-[22px] lg:!text-[40px] lg:leading-[30px] 2xl:!text-[50px] 2xl:leading-[37px]"
                color={typographyColors.grey15}
                variant={typographyVariants.body}
              >
                {`0${++index}`}
              </Typography>
              <Typography className="mt-3 !font-medium lg:mt-4 2xl:mt-5" color={typographyColors.grey20} variant={typographyVariants.body}>
                {title}
              </Typography>
              {index < course.sections.length && <hr className="border-white-95 my-5 lg:hidden" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
