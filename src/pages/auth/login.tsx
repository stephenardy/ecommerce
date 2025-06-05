import AuthLayout from "@/components/layouts/AuthLayout";
import LoginForm from "@/components/fragments/LoginForm";
import BackgroundImage from "@/components/elements/AuthImage";
import login from "@/services/auth.services";
import { UserCredentials } from "@/services/auth.services";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState<string>("");

  const handleSubmit = async (credentials: UserCredentials): Promise<void> => {
    try {
      console.log("attempting to login with: ", credentials);
      const authData = await login(credentials);
      console.log(authData);
    } catch (err) {
      console.log(err);
      // setError(err);
    }
  };

  return (
    <AuthLayout>
      <div className="collapse bg-amber-200 md:visible md:col-span-2 md:w-full md:h-screen">
        <BackgroundImage />
      </div>
      <div className="w-full md:col-span-1">
        <div className="flex justify-center items-center h-screen">
          <LoginForm onFormSubmit={handleSubmit} />
        </div>
      </div>
    </AuthLayout>
  );
}
