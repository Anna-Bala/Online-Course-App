"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import Link from "next/link";

import type { FormEvent } from "react";

import { PasswordInput, TextInput } from "@/components/form";
import { loginValidationSchema, signUpValidationSchema } from "@/utils/validationSchemas";
import formatValidationErrors from "@/utils/formatValidationErrors";
import LinkIcon from "@/icons/Link";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  isSignUp: boolean;
};

export default function LoginOrSignUpPanel({ isSignUp }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string } | null>(null);

  const router = useRouter();

  const formatFormData = (unformattedData: FormData) =>
    isSignUp
      ? {
          confirmPassword: unformattedData.get("confirmPassword"),
          email: unformattedData.get("email"),
          fullName: unformattedData.get("fullName"),
          password: unformattedData.get("password"),
        }
      : {
          email: unformattedData.get("email"),
          password: unformattedData.get("password"),
        };

  const handleSignUpFormValidation = (formData: object) => {
    try {
      signUpValidationSchema.parse(formData);
    } catch (validationError) {
      if (validationError instanceof z.ZodError && !!validationError.issues) {
        const newValidationErrors = formatValidationErrors(validationError.issues);

        setValidationErrors(newValidationErrors);
      }
      return false;
    }

    setValidationErrors(null);
    return true;
  };

  const handleLoginFormValidation = (formData: object) => {
    try {
      loginValidationSchema.parse(formData);
    } catch (validationError) {
      if (validationError instanceof z.ZodError && !!validationError.issues) {
        const newValidationErrors = formatValidationErrors(validationError.issues);

        setValidationErrors(newValidationErrors);
      }
      return false;
    }

    setValidationErrors(null);
    return true;
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataFormatted = formatFormData(formData);

    const isValidationCorrect = handleSignUpFormValidation(formDataFormatted);

    if (!isValidationCorrect) return;

    const signUpResponse = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(formDataFormatted),
    });

    const signUpResponseBody = await signUpResponse.json();

    if (!!signUpResponseBody?.error) {
      const isEmailAlreadyInUse = signUpResponseBody?.error.constraint === "unique_email";

      if (isEmailAlreadyInUse) setError("The email you have provided is already in use. Please try to login or send us a message through the contact page.");
      else setError("Something went wrong while creating an account, please try again.");
    }
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataFormatted = formatFormData(formData);

    const isValidationCorrect = handleLoginFormValidation(formDataFormatted);

    if (!isValidationCorrect) return;

    const loginResponse = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (loginResponse?.error === "CredentialsSignin") setError("Your email or password is incorrect. Please try again or send us a message through the contact page.");

    if (!loginResponse?.error) {
      router.push("/");
      router.refresh();
    }
  };

  const handleFormChange = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formDataFormatted = formatFormData(formData);

    isSignUp ? handleSignUpFormValidation(formDataFormatted) : handleLoginFormValidation(formDataFormatted);
  };

  return (
    <section className="flex flex-col h-max bg-absolute-white p-[30px] rounded-[10px] lg:p-10 lg:w-5/12 lg:flex-grow 2xl:p-[50px] 2xl:rounded-xl">
      <div className="flex flex-col gap-[30px] lg:gap-[40px] 2xl:gap-[50px]">
        <div className="flex flex-col gap-2 2xl:gap-3">
          <Typography className="text-center" color={typographyColors.grey15} variant={typographyVariants.h3}>
            {isSignUp ? "Sign Up" : "Login"}
          </Typography>
          <Typography className="text-center" color={typographyColors.grey20} variant={typographyVariants.body}>
            {isSignUp ? "Create an account to unlock exclusive features." : "Welcome back! Please log in to access your account."}
          </Typography>
        </div>

        <div className="flex flex-col gap-6 2xl:gap-[30px]">
          <form className="flex flex-col gap-5 2xl:gap-6" onSubmit={isSignUp ? handleRegister : handleLogin} onChange={!!validationErrors ? handleFormChange : undefined}>
            {isSignUp && <TextInput error={validationErrors?.["fullName"]} label="Full Name" labelClassName="mb-[10px] 2xl:mb-[14px]" name="fullName" placeholder="Enter your Name" />}
            <TextInput error={validationErrors?.["email"]} label="Email" labelClassName="mb-[10px] 2xl:mb-[14px]" name="email" placeholder="Enter your Email" />
            <PasswordInput error={validationErrors?.["password"]} label="Password" labelClassName="mb-[10px] 2xl:mb-[14px]" name="password" placeholder="Enter your Password" />
            {isSignUp && (
              <PasswordInput
                error={validationErrors?.["confirmPassword"]}
                label="Confirm Password"
                labelClassName="mb-[10px] 2xl:mb-[14px]"
                name="confirmPassword"
                placeholder="Confirm your Password"
              />
            )}
            {!!error && (
              <Typography className="text-center" color={typographyColors.orange50} variant={typographyVariants.body}>
                {error}
              </Typography>
            )}
            <button
              className="w-full text-absolute-white text-[14px] font-medium rounded-md bg-orange-50 hover:bg-orange-70 py-[14px] px-5 lg:mx-auto 2xl:text-[18px] disabled:bg-white-90"
              disabled={!!validationErrors}
              type="submit"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>
          {isSignUp ? (
            <Typography className="text-center" color={typographyColors.grey15} variant={typographyVariants.body}>
              Already have an account?&nbsp;
              <Link className="font-medium underline" href="/login">
                Login
                <LinkIcon className="inline-block ml-[6px]" size={20} />
              </Link>
            </Typography>
          ) : (
            <Typography className="text-center" color={typographyColors.grey15} variant={typographyVariants.body}>
              Don’t have an account?&nbsp;
              <Link className="font-medium underline" href="/sign-up">
                Sign Up
                <LinkIcon className="inline-block ml-[6px]" size={20} />
              </Link>
            </Typography>
          )}
        </div>
      </div>
    </section>
  );
}
