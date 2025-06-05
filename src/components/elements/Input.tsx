import { ChangeEvent } from "react";

type TInput = {
  name: string;
  type: string;
  placeholder: string;
  title: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: TInput) => {
  const { name, type, placeholder, title, value, onChange } = props;
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="font-medium" htmlFor={name}>
        {title}
      </label>

      <input
        className="border rounded-md py-1 pl-2"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
