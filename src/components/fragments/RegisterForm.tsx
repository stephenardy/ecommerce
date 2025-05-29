import Input from "../elements/Input";
import Button from "../elements/Button";

const RegisterForm = () => {
  return (
    <form className="bg-white shadow-md rounded-2xl p-4 w-3/4">
      <div className="">
        <h1 className="font-bold text-xl text-blue-500">Register Form</h1>
        <p className="text-gray-500 font-light">Create an accoount</p>
      </div>
      <div className="my-4">
        <Input
          name="email"
          type="email"
          placeholder="Input your email"
          title="Email"
        />
        <Input
          name="fullname"
          type="text"
          placeholder="Input your full name"
          title="Full Name"
        />
        <Input
          name="password"
          type="password"
          placeholder="*****"
          title="Password"
        />
        <Input
          name="passwordConfirmation"
          type="password"
          placeholder="*****"
          title="Confirm Password"
        />
      </div>
      <div>
        <Button>Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
