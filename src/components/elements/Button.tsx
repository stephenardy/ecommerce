import { ReactNode } from "react";

type TButton = {
  children?: ReactNode;
  round?: string;
  onClick?: () => void;
};

const Button = (props: TButton) => {
  const { children, round = "md", onClick = () => {} } = props;
  return (
    <button
      className={`w-full rounded-${round} text-white py-2 bg-blue-500 hover:bg-blue-300 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
