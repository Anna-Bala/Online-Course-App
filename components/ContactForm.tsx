"use client";

import { useState } from "react";
import { z } from "zod";

import type { FormEvent } from "react";

import { contactValidationSchema } from "@/utils/validationSchemas";
import formatValidationErrors from "@/utils/formatValidationErrors";
import TextInput from "@/components/form/TextInput";
import Typography, { typographyColors, typographyVariants } from "@/components/Typography";

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string } | null>(null);

  const formatFormData = (unformattedData: FormData) => ({
    firstName: unformattedData.get("firstName"),
    lastName: unformattedData.get("lastName"),
    email: unformattedData.get("email"),
    phone: unformattedData.get("phone"),
    subject: unformattedData.get("subject"),
    message: unformattedData.get("message"),
  });

  const handleContactFormValidation = (formData: object) => {
    try {
      contactValidationSchema.parse(formData);
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

  const handleContactFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataFormatted = formatFormData(formData);

    const isValidationCorrect = handleContactFormValidation(formDataFormatted);

    if (!isValidationCorrect) return;

    const contactResponse = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formDataFormatted),
    });

    const contactResponseBody = await contactResponse.json();

    if (!!contactResponseBody?.error) {
      setError("Something went wrong while sending your message, please try again.");
    }
  };

  const handleContactFormChange = async (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formDataFormatted = formatFormData(formData);

    handleContactFormValidation(formDataFormatted);
  };

  return (
    <form
      className="flex flex-col gap-5 p-[30px] lg:p-[60px] lg:flex-row lg:flex-wrap lg:gap-6 lg:border-r lg:border-white-97 2xl:lg:p-[80px] 2xl:gap-[30px]"
      onSubmit={handleContactFormSubmit}
      onChange={!!validationErrors ? handleContactFormChange : undefined}
    >
      <TextInput error={validationErrors?.["firstName"]} className="lg:w-5/12 lg:flex-grow" label="First Name" labelClassName="mb-3 2xl:mb-4" name="firstName" placeholder="Enter First Name" />
      <TextInput error={validationErrors?.["lastName"]} className="lg:w-5/12 lg:flex-grow" label="Last Name" labelClassName="mb-3 2xl:mb-4" name="lastName" placeholder="Enter Last Name" />
      <TextInput error={validationErrors?.["email"]} className="lg:w-5/12 lg:flex-grow" label="Email" labelClassName="mb-3 2xl:mb-4" name="email" placeholder="Enter your Email" type="email" />
      <TextInput error={validationErrors?.["phone"]} className="lg:w-5/12 lg:flex-grow" label="Phone" labelClassName="mb-3 2xl:mb-4" name="phone" placeholder="Enter Phone Number" type="tel" />
      <TextInput error={validationErrors?.["subject"]} className="lg:w-full" label="Subject" labelClassName="mb-3 2xl:mb-4" name="subject" placeholder="Enter your Subject" />
      <TextInput error={validationErrors?.["message"]} className="lg:w-full lg:mt-4" label="Message" labelClassName="mb-3 2xl:mb-4" name="message" placeholder="Enter your Message here..." rows={5} />
      {!!error && (
        <Typography className="text-center" color={typographyColors.orange50} variant={typographyVariants.body}>
          {error}
        </Typography>
      )}
      <button className="text-absolute-white text-[14px] font-medium rounded-md bg-orange-50 hover:bg-orange-70 py-[14px] px-5 mt-[10px] lg:mx-auto 2xl:mt-5 2xl:text-[18px]" type="submit">
        Send Your Message
      </button>
    </form>
  );
}
