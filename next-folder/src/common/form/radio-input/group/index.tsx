import RadioInput from "..";
import { RadioInputGroupPropsType } from "./type";

function RadioInputGroup({
  register,
  watch,
  errors,
  configs,
}: RadioInputGroupPropsType) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }: { label: string; value: string }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RadioInputGroup;
