import TextField from "@common/form/text-field";
import Loading from "@common/loading";
import { useForm } from "react-hook-form";

export default function CreateProposal({
  onClose,
  projectId,
}: {
  onClose: () => void;
  projectId: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    
  }
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="description"
          label="توضیحات"
          register={register}
          required
          validationSchema={{
            required: {
              value: true,
              message: "توضیحات ضروری است",
            },
            minLength: {
              value: 10,
              message: "طول عنوان نامعتبر است",
            },
          }}
          errors={errors}
        />

        <TextField
          name="price"
          label="قیمت"
          register={register}
          type="number"
          required
          validationSchema={{
            required: {
              value: true,
              message: "قیمت ضروری است",
            },
          }}
          errors={errors}
        />

        <TextField
          name="duration"
          label="مدت زمان"
          register={register}
          type="number"
          required
          validationSchema={{
            required: {
              value: true,
              message: "مدت زمات ضروری است",
            },
          }}
          errors={errors}
        />

        <div className="mt-8">
          {false ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
