import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center md:grid md:grid-cols-3 w-full h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
