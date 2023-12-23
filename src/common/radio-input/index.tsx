import { RadioInputPropsType } from "./type";

export default function RadioInput({
  label,
  value,
  onChange,
  name,
  id,
  checked
}: RadioInputPropsType) {

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 form-radio focus:ring-primary-900 text-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
