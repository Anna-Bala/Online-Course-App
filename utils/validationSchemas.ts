import { z } from "zod";

const phoneNumberRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/);

export const contactValidationSchema = z.object({
  firstName: z.string().trim().min(2, "Your first name should contain at least 2 characters"),
  lastName: z.string().trim().min(2, "Your last name should contain at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().regex(phoneNumberRegex, "Please enter a valid phone number"),
  subject: z.string().trim().min(4, "Your subject is too short, it must contain at least 4 characters"),
  message: z.string().trim().min(10, "Your message is too short, it must contain at least 10 characters"),
});

export const signUpValidationSchema = z
  .object({
    confirmPassword: z.any(),
    email: z.string().email("Please enter a valid email"),
    fullName: z.string().trim().min(2, "Your name should contain at least 2 characters"),
    password: z.string().trim().min(8, "Password length must be at least 8 characters"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword)
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
  });

export const loginValidationSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().trim().min(1, "Required"),
});
