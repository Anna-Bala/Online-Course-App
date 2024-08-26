import classNames from "classnames";

import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export function renderTestimonial(testimonial: { author: string; content: string }, showAll: boolean) {
  return (
    <div className={classNames({ "lg:w-5/12 lg:flex-grow": showAll, "lg:w-full": !showAll })}>
      <div className="p-[30px] bg-absolute-white rounded-t-[10px] lg:p-10 2xl:p-[50px] 2xl:rounded-t-xl">
        <Typography color={typographyColors.grey30} variant={typographyVariants.body}>
          {testimonial.content}
        </Typography>
      </div>
      <hr className="border-white-95 w-full" />
      <div className="px-[30px] py-5 bg-white-99 rounded-b-[10px] lg:px-10 lg:py-6 2xl:px-[50px] 2xl:py-[30px] 2xl:rounded-b-xl">
        <Typography className="!text-[16px] !font-semibold lg:!text-[18px] 2xl:!text-[22px]" color={typographyColors.grey20} variant={typographyVariants.body}>
          {testimonial.author}
        </Typography>
      </div>
    </div>
  );
}
