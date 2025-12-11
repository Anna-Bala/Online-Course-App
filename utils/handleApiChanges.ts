"use server";

import { revalidatePath } from "next/cache";

import { BASE_API_URL } from "./constants";

type LikeCourseArguments = { courseId: number; revalidatePathUrl?: string; userId?: string };
export type CreateContactFormData = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
  subject: string;
};
type CreateContactFormEntryArguments = {
  formData: CreateContactFormData;
  revalidatePathUrl?: string;
};

export async function dislikeCourse({ courseId, revalidatePathUrl, userId }: LikeCourseArguments) {
  if (!BASE_API_URL) return;

  await fetch(`${BASE_API_URL}/api/like-courses`, {
    method: "DELETE",
    body: JSON.stringify({ courseId, userId }),
  });

  if (!!revalidatePathUrl) {
    revalidatePath(revalidatePathUrl);
  }
}

export async function likeCourse({ courseId, revalidatePathUrl, userId }: LikeCourseArguments) {
  if (!BASE_API_URL) return;

  await fetch(`${BASE_API_URL}/api/like-courses`, {
    method: "POST",
    body: JSON.stringify({ courseId, userId }),
  });

  if (!!revalidatePathUrl) {
    revalidatePath(revalidatePathUrl);
  }
}

export async function createContactFormEntry({ formData, revalidatePathUrl }: CreateContactFormEntryArguments) {
  if (!BASE_API_URL) return;

  const databaseResponse = await fetch(`${BASE_API_URL}/api/contact`, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  if (!!revalidatePathUrl) {
    revalidatePath(revalidatePathUrl);
  }

  return databaseResponse;
}
