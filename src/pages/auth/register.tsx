import BackgroundImage from "@/components/elements/AuthImage";
import RegisterForm from "@/components/fragments/RegisterForm";
import AuthLayout from "@/components/layouts/AuthLayout";

export default function Register() {
  return (
    <AuthLayout>
      <div className="w-full md:col-span-1">
        <div className="flex justify-center items-center h-screen">
          <RegisterForm />
        </div>
      </div>
      <div className="collapse bg-amber-200 md:visible md:col-span-2 md:w-full md:h-screen">
        <BackgroundImage />
      </div>
    </AuthLayout>
  );
}
