import { notFound } from "next/navigation";
import Image from "next/image";

import { courses } from "@/data";
import ClockIcon from "@/icons/Clock";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function CourseDetails({ params }: { params: { id: string } }) {
  const courseId = params.id;
  const course = courses.find((course) => course.id === courseId);

  if (!course) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader title={course.title} info={course.intro} />
      <div className="flex flex-col gap-5 w-full lg:px-[60px] 2xl:px-[142px] lg:gap-10 2xl:gap-[50px]">
        <Image className="rounded-[10px] w-full h-auto mb-[50px]" alt="Video placeholder" src={course.images[0]} />
        <div className="flex flex-col gap-5">
          {course.sections.map((courseSection, index) => (
            <div className="bg-absolute-white rounded-[10px] p-[30px]" key={courseSection.id}>
              <Typography className="w-full text-right !font-bold !text-[50px] !leading-9 2xl:!text-[80px] 2xl:!leading-[60px]" color={typographyColors.grey15} variant={typographyVariants.body}>
                {`0${++index}`}
              </Typography>
              <Typography className="!text-lg my-[30px]" color={typographyColors.grey20} variant={typographyVariants.subtitle}>
                {courseSection.title}
              </Typography>
              <div className="flex flex-col gap-4">
                {courseSection.lessons.map((courseLesson, index) => (
                  <div className="flex flex-col gap-6 p-6 rounded-md border border-white-95" key={courseLesson.id}>
                    <div>
                      <Typography className="!font-medium !text-base mb-[2px]" color={typographyColors.grey20} variant={typographyVariants.body}>
                        {courseLesson.title}
                      </Typography>
                      <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
                        {`Lesson 0${++index}`}
                      </Typography>
                    </div>
                    <div className="flex flex-row items-center gap-1 bg-white-97 rounded-md w-max p-[10px]">
                      <ClockIcon size={20} />
                      <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
                        {courseLesson.duration}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
