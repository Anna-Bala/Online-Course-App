import { notFound } from "next/navigation";

import { BASE_API_URL } from "./constants";

import type { Benefit, Course, PricingPlan, Testimonial } from "@/app/api/types";

export async function getBenefits() {
  const response = await fetch(`${BASE_API_URL}/api/benefits`);
  const benefits: Benefit[] | null = await response.json();

  if (!benefits) notFound();
  return benefits;
}

export async function getCourses() {
  const response = await fetch(`${BASE_API_URL}/api/courses`);
  const courses: Course[] | null = await response.json();

  if (!courses) notFound();
  return courses;
}

export async function getTestimonials() {
  const response = await fetch(`${BASE_API_URL}/api/testimonials`, { cache: "no-store" });
  const testimonials: Testimonial[] | null = await response.json();

  if (!testimonials) notFound();
  return testimonials;
}

export async function getPricingPlans() {
  const response = await fetch(`${BASE_API_URL}/api/pricing-plans`);
  const pricingPlans: PricingPlan[] | null = await response.json();

  if (!pricingPlans) notFound();
  return pricingPlans;
}
