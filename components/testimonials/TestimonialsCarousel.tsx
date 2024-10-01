"use client";

import { useState } from "react";

import { renderTestimonial } from "./utils";
import ArrowRightIcon from "@/icons/ArrowRight";

import type { Testimonial } from "@/app/api/types";

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const switchToNextTestimonial = () => setCurrentTestimonial((prevState) => (++prevState <= testimonials.length - 1 ? prevState++ : 0));
  const switchToPrevTestimonial = () => setCurrentTestimonial((prevState) => (--prevState > 0 ? prevState-- : 0));

  return (
    <div>
      {renderTestimonial(testimonials[currentTestimonial], false)}
      <div className="flex flex-row justify-center gap-[10px] mt-5 lg:justify-end lg:mt-6">
        <button className="p-3 bg-absolute-white border border-white-95 rounded-md hover:bg-white-95" onClick={switchToPrevTestimonial}>
          <ArrowRightIcon className="rotate-180" fill="#262626" isBold size={30} />
        </button>
        <button className="p-3 bg-absolute-white border border-white-95 rounded-md hover:bg-white-95" onClick={switchToNextTestimonial}>
          <ArrowRightIcon fill="#262626" isBold size={30} />
        </button>
      </div>
    </div>
  );
}
