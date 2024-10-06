import { z } from "zod";

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
