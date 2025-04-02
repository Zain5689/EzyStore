import { Path, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  name,
  type = "text",
  register,
  error,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFieldValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <div className="mb-4">
      <input
        type={type}
        id={name}
        {...register(name)}
        onBlur={onblurHandler}
        disabled={disabled}
        className={`mt-1 block w-full rounded-md shadow-sm border ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : success
            ? "border-green-500 focus:ring-green-500 focus:border-green-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        } ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        } px-3 py-2 text-sm`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      {success && <p className="mt-1 text-sm text-green-500">{success}</p>}
      {formText && <p className="mt-1 text-sm text-gray-500">{formText}</p>}
    </div>
  );
};

export default Input;
