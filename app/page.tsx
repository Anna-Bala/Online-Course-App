import Image from "next/image";

import { benefits } from "@/data";
import { BoltIcon, LinesIcon } from "@/icons";
import HomePageSection from "@/components/HomePageSection";
import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import placeholderImg from "@/public/placeholder.png";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <div className="w-full relative">
        <div className="absolute -top-1/4 left-[-3%]">
          <LinesIcon />
        </div>
        <div className="flex items-center gap-[10px] p-[14px] bg-white-99 border border-white-95 rounded-lg">
          <div className="bg-orange-95 w-12 h-12 flex justify-center items-center rounded-md">
            <BoltIcon size={24} />
          </div>
          <div>
            <Typography color={typographyColors.orange50} htmlTag="span" variant={typographyVariants.h1}>
              Unlock&nbsp;
            </Typography>
            <Typography color={typographyColors.grey10} htmlTag="span" variant={typographyVariants.h1}>
              Your Creative Potential
            </Typography>
          </div>
        </div>
      </div>
      <Typography className="text-center mt-4 mb-[6px]" color={typographyColors.grey15} htmlTag="span" variant={typographyVariants.h2}>
        with Online Design and Development Courses.
      </Typography>
      <Typography className="text-center w-[80%]" color={typographyColors.grey15} htmlTag="span" variant={typographyVariants.body}>
        Learn from Industry Experts and Enhance Your Skills.
      </Typography>
      <div className="flex gap-3 mt-[50px] mb-[30px]">
        <LinkButton href="/courses">Explore Courses</LinkButton>
        <LinkButton href="/pricing" variant={linkButtonVariants.secondary}>
          View Pricing
        </LinkButton>
      </div>
      <Image className="rounded-[10px]" alt="Video placeholder" src={placeholderImg} />
      <HomePageSection
        title="Benefits"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      >
        {benefits.map(({ description, id, title }, index) => (
          <div className="p-[30px] bg-absolute-white rounded-[10px]" key={id}>
            <Typography className="text-right font-bold text-[50px] leading-9 mb-[30px]" color={typographyColors.grey15} variant={typographyVariants.body}>
              {`0${++index}`}
            </Typography>
            <Typography className="mb-[10px]" color={typographyColors.grey15} variant={typographyVariants.subtitle}>
              {title}
            </Typography>
            <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
              {description}
            </Typography>
          </div>
        ))}
      </HomePageSection>
    </main>
  );
}
