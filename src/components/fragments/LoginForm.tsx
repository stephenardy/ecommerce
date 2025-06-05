import Input from "../elements/Input";
import Button from "../elements/Button";
import { UserCredentials } from "@/services/auth.services";
import { ChangeEvent, FormEvent, useState } from "react";

type LoginFormProps = {
  onFormSubmit: (credentials: UserCredentials) => Promise<void> | void;
};

const LoginForm = ({ onFormSubmit }: LoginFormProps) => {
  const [formData, setFormData] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onFormSubmit(formData);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white shadow-md rounded-2xl p-4 w-3/4"
    >
      <div className="">
        <h1 className="font-bold text-xl text-blue-500">Login Form</h1>
        <p className="text-gray-500 font-light">Log into your account</p>
      </div>
      <div className="my-4">
        <Input
          name="username"
          type="text"
          placeholder="Input your username"
          title="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <Input
          name="password"
          type="password"
          placeholder="*****"
          title="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
