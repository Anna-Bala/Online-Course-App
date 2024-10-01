import Image from "next/image";

import { BoltIcon, LinesIcon } from "@/icons";
import { getBenefits, getCourses } from "@/utils/getApiData";
import Benefit from "@/components/Benefit";
import Course from "@/components/Course";
import FAQ from "@/components/faq/FAQ";
import HomePageSection from "@/components/HomePageSection";
import LinkButton, { linkButtonVariants } from "@/components/LinkButton";
import placeholderImg from "@/public/placeholder.png";
import PricingPlans from "@/components/pricingPlans/PricingPlans";
import Testimonials from "@/components/testimonials/Testimonials";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default async function Home() {
  const benefits = await getBenefits();
  const courses = await getCourses();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-[80px] 2xl:px-[162px]">
      <div className="w-max relative">
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

      <Image className="rounded-[10px] w-full h-auto" alt="Video placeholder" src={placeholderImg} />

      <HomePageSection
        bigMarginBelow
        title="Benefits"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      >
        {benefits?.map((benefit, index) => (
          <Benefit benefit={benefit} index={index} key={benefit.id} />
        ))}
      </HomePageSection>

      <HomePageSection
        title="Our Courses"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        href="/courses"
      >
        {courses?.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </HomePageSection>

      <Testimonials className="mt-[50px] lg:mt-[100px]" showAll title="Our Testimonials" />

      <HomePageSection
        title="Our Pricing"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
      >
        <PricingPlans />
      </HomePageSection>

      <FAQ />
    </main>
  );
}
