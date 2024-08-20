import Image from "next/image";

import type { StaticImageData } from "next/image";

import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  course: {
    id: string;
    author: string;
    description: string;
    image: StaticImageData;
    level: string;
    title: string;
    weeks: number;
    sections: {
      id: string;
      title: string;
      lessons: {
        id: string;
        duration: string;
        title: string;
      }[];
    }[];
  };
};

export default function Course({ course }: Props) {
  return (
    <div className="p-6 bg-absolute-white rounded-[10px]" key={course.id}>
      <div className="h-[172px] relative">
        <Image fill className="rounded-md" alt={course.title} src={course.image.src} style={{ objectFit: "cover" }} sizes="(min-width: 1024px) 40vw, 90vw" />
      </div>
      <div className="flex flex-wrap gap-x-[10px] gap-y-[14px] my-6">
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.weeks} Weeks
        </Typography>
        <Typography className="rounded-md border border-white-95 py-2 px-[14px]" color={typographyColors.grey30} variant={typographyVariants.body}>
          {course.level}
        </Typography>
        <Typography className="text-[16px] !font-medium w-full" color={typographyColors.grey15} variant={typographyVariants.body}>
          By {course.author}
        </Typography>
      </div>
      <Typography className="mb-[10px]" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
        {course.title}
      </Typography>
      <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
        {course.description}
      </Typography>
      <LinkButton className="bg-white-97 border border-white-95 font-medium mt-6" fullWidth href="/courses" variant={linkButtonVariants.link}>
        Get it Now
      </LinkButton>
    </div>
  );
}
