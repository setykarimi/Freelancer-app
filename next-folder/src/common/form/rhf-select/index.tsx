import { FC } from "react";
import { RHFSelectPropsType } from "./type";

const RHFSelect: FC<RHFSelectPropsType> = ({
  label,
  name,
  register,
  options,
  required,
  defaultValue,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-secondary-700 text-right"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textField__input"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;
