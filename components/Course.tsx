import classNames from "classnames";
import Image from "next/image";

import CourseDislikeButton from "@/components/CourseDislikeButton";
import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

import type { Course } from "@/app/api/types";

type Props = {
  activeSessionUserId?: string;
  course: Course;
  shouldGrow?: boolean;
  showDislikeButton?: boolean;
};

export default function Course({ activeSessionUserId, course, shouldGrow = true, showDislikeButton = false }: Props) {
  return (
    <div className={classNames("p-6 bg-absolute-white rounded-[10px]", { "lg:w-5/12 lg:flex-grow": shouldGrow, "lg:w-[calc(50%-10px)]": !shouldGrow })} key={course.id}>
      <div className="h-[172px] lg:h-[266px] relative">
        <Image fill className="rounded-md" alt={course.title} src={course.images[0]} style={{ objectFit: "cover" }} sizes="(min-width: 1024px) 40vw, 90vw" />
      </div>
      <div className="flex flex-wrap gap-x-[10px] gap-y-[14px] my-6 lg:flex-nowrap lg:items-center">
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.weeks} Weeks
        </Typography>
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.level}
        </Typography>
        <Typography className="!text-[16px] !font-medium w-full lg:ml-auto lg:w-max 2xl:text-[20px]" color={typographyColors.grey15} variant={typographyVariants.body}>
          By {course.author}
        </Typography>
      </div>
      <Typography className="mb-[10px]" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
        {course.title}
      </Typography>
      <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
        {course.description}
      </Typography>
      <LinkButton className="bg-white-97 border border-white-95 font-medium mt-6" fullWidth href={`/courses/${course.id}`} variant={linkButtonVariants.link}>
        Show details
      </LinkButton>
      {showDislikeButton && <CourseDislikeButton activeSessionUserId={activeSessionUserId} courseId={course.id} />}
    </div>
  );
}
