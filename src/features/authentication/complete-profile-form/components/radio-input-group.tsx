import RadioInput from "@common/radio-input";

export default function RadioInputGroup({ watch, register, errors, config }) {
  const { option, validationSchema = {}, name } = config;
  return (
    <div>
      <div className="flex items-center justify-center gap-x-8">
        {option.map(({label, value}) => (
          <RadioInput
          key={value}
            label={label}
            value={value}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
            name={name}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-xs mt-1">
          {`${errors[name]?.message}`}
        </span>
      )}
    </div>
  );
}
