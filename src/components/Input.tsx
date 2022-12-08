interface InputProps {
  value?: string;
  onChange?: (value: any) => void;
  name?: string;
  placeholder?: string;
}

export function Input({
  value,
  name,
  onChange,
  placeholder,
  ...rest
}: InputProps) {
  return (
    <input
      className="bg-gray-800 text-gray-300 w-[638px] p-4 gap-2 rounded-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      {...rest}
    />
  );
}
