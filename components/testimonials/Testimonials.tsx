import { renderTestimonial } from "./utils";
import { testimonials } from "@/data";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  className?: string;
  showAll: boolean;
  title: string;
};

export default function Testimonials({ className, showAll, title }: Props) {
  return (
    <section className={className}>
      <div className="mb-10 lg:mb-[60px] 2xl:mb-[80px]">
        <Typography className="mb-1 2xl:mb-[6px]" color={typographyColors.grey15} variant={typographyVariants.h3}>
          {title}
        </Typography>
        <Typography color={typographyColors.grey35} variant={typographyVariants.body}>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </Typography>
      </div>

      {showAll ? (
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap 2xl:gap-[30px]">{testimonials.map((testimonial) => renderTestimonial(testimonial, showAll))}</div>
      ) : (
        <TestimonialsCarousel />
      )}
    </section>
  );
}
