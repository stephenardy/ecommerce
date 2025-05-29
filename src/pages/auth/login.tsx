import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "@/components/fragments/LoginForm";
import BackgroundImage from "@/components/elements/AuthImage";

export default function Login() {
  return (
    <AuthLayout>
      <div className="collapse bg-amber-200 md:visible md:col-span-2 md:w-full md:h-screen">
        <BackgroundImage />
      </div>
      <div className="w-full md:col-span-1">
        <div className="flex justify-center items-center h-screen">
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
}
