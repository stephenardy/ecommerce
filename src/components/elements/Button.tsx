import { ReactNode } from "react";

type TButton = {
  children?: ReactNode;
};

const Button = (props: TButton) => {
  const { children } = props;
  return (
    <button className="w-full rounded-md text-white py-2 bg-blue-500 hover:bg-blue-300 cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
