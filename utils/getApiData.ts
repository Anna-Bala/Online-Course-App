import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

import { BASE_API_URL } from "./constants";
import authOptions from "@/app/lib/auth";

import type { Benefit, Course, PricingPlan, Testimonial } from "@/app/api/types";

export async function getBenefits() {
  if (!BASE_API_URL) return;

  const response = await fetch(`${BASE_API_URL}/api/benefits`);
  const benefits: Benefit[] | null = await response.json();

  if (!benefits) notFound();
  return benefits;
}

export async function getCourses() {
  if (!BASE_API_URL) return;

  const activeSession = await getServerSession(authOptions);

  const response = await fetch(`${BASE_API_URL}/api/courses?userId=${activeSession?.user?.id || ""}`);
  const courses: Course[] | null = await response.json();

  if (!courses) notFound();
  return courses;
}

export async function getLikedCourses() {
  if (!BASE_API_URL) return;

  const activeSession = await getServerSession(authOptions);

  const response = await fetch(`${BASE_API_URL}/api/liked-courses?userId=${activeSession?.user?.id || ""}`, { cache: "no-store" });
  const likedCourses: Course[] | null = await response.json();

  return likedCourses;
}

export async function getTestimonials() {
  if (!BASE_API_URL) return;

  const response = await fetch(`${BASE_API_URL}/api/testimonials`, { cache: "no-store" });
  const testimonials: Testimonial[] | null = await response.json();

  if (!testimonials) notFound();
  return testimonials;
}

export async function getPricingPlans() {
  if (!BASE_API_URL) return;

  const response = await fetch(`${BASE_API_URL}/api/pricing-plans`);
  const pricingPlans: PricingPlan[] | null = await response.json();

  if (!pricingPlans) notFound();
  return pricingPlans;
}
