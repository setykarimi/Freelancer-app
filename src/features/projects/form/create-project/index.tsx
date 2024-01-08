import TextField from "@common/text-field";
import { useForm } from "react-hook-form";

export default function CreateProjectForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="title"
          label="نام پروژه"
          register={register}
          required
          validationSchema={{
            required: {
              value: true,
              message: "عنوان ضروری است",
            },
            minLength: {
              value: 10,
              message: "طول عنوان نامعتبر است",
            },
          }}
          errors={errors}
        />

        <button className="btn btn--primary w-full" type="submit">
          تایید
        </button>
      </form>
    </div>
  );
}
