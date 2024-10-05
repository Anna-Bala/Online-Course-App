"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import type { FormEvent } from "react";

import { Checkbox, PasswordInput, TextInput } from "@/components/form";
import LinkIcon from "@/icons/Link";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

type Props = {
  isSignUp: boolean;
};

export default function LoginOrSignUpPanel({ isSignUp }: Props) {
  const router = useRouter();

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const signUpResponse = fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const loginResponse = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!loginResponse?.error) {
      router.push("/");
      router.refresh();
    }
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
          <form className="flex flex-col gap-5 2xl:gap-6" onSubmit={isSignUp ? handleRegister : handleLogin}>
            {isSignUp && <TextInput label="Full Name" labelClassName="mb-[10px] 2xl:mb-[14px]" name="fullName" placeholder="Enter your Name" />}
            <TextInput label="Email" labelClassName="mb-[10px] 2xl:mb-[14px]" name="email" placeholder="Enter your Email" />
            <PasswordInput label="Password" labelClassName="mb-[10px] 2xl:mb-[14px]" name="password" placeholder="Enter your Password" />
            {isSignUp ? (
              <Checkbox
                label={
                  <>
                    <span>I agree with&nbsp;</span>
                    <a className="underline">Terms of Use</a>
                    <span>&nbsp;and&nbsp;</span>
                    <a className="underline">Privacy Policy</a>
                  </>
                }
                name="termsOfUseAndPrivacyPolicyAgreement"
              />
            ) : (
              <Checkbox label="Remember Me" name="shouldRememberUser" />
            )}
            <button className="w-full text-absolute-white text-[14px] font-medium rounded-md bg-orange-50 hover:bg-orange-70 py-[14px] px-5 lg:mx-auto 2xl:text-[18px]" type="submit">
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
