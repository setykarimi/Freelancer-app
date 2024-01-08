import Loading from "@common/loading";
import TextField from "@common/text-field";
import { completeProfile } from "@services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import RadioInputGroup from "./components/radio-input-group";

export default function CompleteProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (values: any) => {
    try {
      const { message } = await mutateAsync(values);
      toast.success(message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  console.log(errors["role"]?.message);

  return (
    <div className="w-full sm:max-w-sm mx-auto pt-10">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          errors={errors}
          register={register}
          validationSchema={{
            required: "نام و نام خانوادگی ضروری است.",
          }}
          required
        />
        <TextField
          label="ایمیل"
          name="email"
          errors={errors}
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است.",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "ایمیل نامعتبر است.",
            },
          }}
          required
        />
        <RadioInputGroup
          register={register}
          watch={watch}
          errors={errors}
          config={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است" },
            option: [
              {
                value: "OWNER",
                label: "کارفرما",
              },
              {
                value: "FREELANCE",
                label: "فریلنسر",
              },
            ],
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
