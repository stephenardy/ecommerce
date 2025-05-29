import Input from "../elements/Input";
import Button from "../elements/Button";

const LoginForm = () => {
  return (
    <form className="bg-white shadow-md rounded-2xl p-4 w-3/4">
      <div className="">
        <h1 className="font-bold text-xl text-blue-500">Login Form</h1>
        <p className="text-gray-500 font-light">Log into your account</p>
      </div>
      <div className="my-4">
        <Input
          name="email"
          type="email"
          placeholder="Input your email"
          title="Email"
        />
        <Input
          name="password"
          type="password"
          placeholder="*****"
          title="Password"
        />
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
