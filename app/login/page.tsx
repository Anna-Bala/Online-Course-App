import LoginOrSignUpPanel from "@/components/LoginOrSignUpPanel";

export default function Login() {
  return (
    <main className="px-4">
      <LoginOrSignUpPanel isSignUp={false} />
    </main>
  );
}
