import { notFound } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";

import { getCourses } from "@/utils/getApiData";
import ClockIcon from "@/icons/Clock";
import PageHeader from "@/components/PageHeader";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = { params: { id: string } };

export default async function CourseDetails({ params }: Props) {
  const courseId = params.id;
  const courses = await getCourses();
  const course = courses?.find((course) => course.id.toString() === courseId);

  if (!course) notFound();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader title={course.title} titleClassName="lg:mt-[30px] 2xl:mt-[18px]" info={course.intro} />
      <div className="flex flex-col gap-[50px] w-full lg:px-[60px] 2xl:px-[142px] lg:gap-[80px] 2xl:gap-[100px]">
        <div className="w-full h-[250px] relative min-[520px]:h-[350px] min-[720px]:h-[450px] min-[920px]:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[790px]">
          <Image fill className="rounded-[10px]" alt={course.title} src={course.images[0]} style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
        <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap 2xl:gap-[30px]">
          {course.sections.map((courseSection, index) => {
            const isLastSection = course.sections.length - 1 === index;

            return (
              <div
                className={classNames("bg-absolute-white rounded-[10px] p-[30px] xl:w-[45%] xl:flex-grow xl:p-10 2xl:p-[50px] 2xl:rounded-xl", {
                  "xl:flex-grow-0 xl:w-[calc(50%-10px)]": isLastSection,
                })}
                key={courseSection.id}
              >
                <Typography
                  className="w-full text-right !font-bold !text-[50px] !leading-9 xl:!text-[60px] xl:!leading-[44px] 2xl:!text-[80px] 2xl:!leading-[60px]"
                  color={typographyColors.grey15}
                  variant={typographyVariants.body}
                >
                  {`0${++index}`}
                </Typography>
                <Typography className="!text-lg my-[30px] xl:my-10 xl:!text-xl 2xl:my-[50px] 2xl:!text-2xl" color={typographyColors.grey20} variant={typographyVariants.subtitle}>
                  {courseSection.title}
                </Typography>
                <div className="flex flex-col gap-4 2xl:gap-5">
                  {courseSection.lessons.map((courseLesson, index) => (
                    <div
                      className="flex flex-col gap-6 p-6 rounded-md border border-white-95 xl:flex-row xl:justify-between xl:py-5 xl:gap-0 xl:items-center 2xl:px-[30px] 2xl:py-6 2xl:rounded-lg"
                      key={courseLesson.id}
                    >
                      <div>
                        <Typography className="!font-medium !text-base mb-[2px] 2xl:!text-xl" color={typographyColors.grey20} variant={typographyVariants.body}>
                          {courseLesson.title}
                        </Typography>
                        <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
                          {`Lesson 0${++index}`}
                        </Typography>
                      </div>
                      <div className="flex flex-row items-center gap-1 bg-white-97 rounded-md w-max p-[10px]">
                        <ClockIcon size={20} />
                        <Typography className="text-nowrap" color={typographyColors.grey35} variant={typographyVariants.body}>
                          {courseLesson.duration}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
