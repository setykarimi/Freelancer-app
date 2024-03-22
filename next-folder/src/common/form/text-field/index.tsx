import { TextFieldPropsType } from "./type";

export default function TextField({
  label,
  name,
  register,
  type = "text",
  required,
  errors,
  validationSchema,
}: TextFieldPropsType) {

  return (
    <div>
      <label className="mb-2 block text-secondary-700 font-bold text-right" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        {...register(name, validationSchema)}
        className="textField__input"
        type={type}
        autoComplete="off"
      />

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
