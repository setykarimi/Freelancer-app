import RadioInputGroup from "@/common/form/radio-input/group";
import TextField from "@/common/form/text-field";
import Loading from "@/common/loading";
import { completeProfile } from "@/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function CompleteProfileFrom() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data: any) => {
    try {
      const { user, message }: any = await mutateAsync(data);
      toast.success(message);
      if (!user.status !== 2) {
        router.push("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return router.push("/dashboard/owner");
      if (user.role === "FREELANCER")
        return router.push("/dashboard/freelancer");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-6 items-center p-10 rounded-lg mx-auto bg-secondary-0 w-full max-w-[30rem]">
      <h1 className="font-bold text-3xl text-secondary-700">تکمیل اطلاعات</h1>
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی  ضروری است",
            }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                {
                  value: "OWNER",
                  label: "کارفرما",
                },
                { value: "FREELANCER", label: "فریلنسر" },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default CompleteProfileFrom;
