import { RadioInputPropsType } from "./type";

export default function RadioInput({
  label,
  value,
  name,
  register,
  validationSchema,
  watch,
}: RadioInputPropsType) {

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        {...register(name, validationSchema)}
        className="cursor-pointer w-4 h-4 form-radio focus:ring-primary-900 text-primary-900"
        type="radio"
        name={name}
        value={value}
        checked={watch(name) == value}
      />
      <label htmlFor={value}>{label}</label>
      
    </div>
  );
}
