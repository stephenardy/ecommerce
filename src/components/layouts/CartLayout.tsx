import { Props } from "./AuthLayout";

const CartLayout = ({ children }: Props) => {
  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white border-l border-gray-200 shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
      <div className="flex flex-col gap-1 my-8">{children}</div>
    </div>
  );
};

export default CartLayout;
