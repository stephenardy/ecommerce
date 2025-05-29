type TInput = {
  name: string;
  type: string;
  placeholder: string;
  title: string;
};

const Input = (props: TInput) => {
  const { name, type, placeholder, title } = props;
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
      />
    </div>
  );
};

export default Input;
