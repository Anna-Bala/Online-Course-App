import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginOrSignUpPanel from "@/components/LoginOrSignUpPanel";
import Testimonials from "@/components/testimonials/Testimonials";

export default async function SignUp() {
  const activeSession = await getServerSession();

  if (activeSession) redirect("/");

  return (
    <main className="flex flex-col items-baseline min-h-screen px-4 gap-[50px] lg:flex-row-reverse lg:gap-[80px] lg:px-[80px] 2xl:px-[165px] 2xl:gap-[100px]">
      <LoginOrSignUpPanel isSignUp />
      <Testimonials className="lg:w-3/6 lg:flex-grow lg:flex lg:flex-col lg:justify-center" showAll={false} title="Students Testimonials" />
    </main>
  );
}
