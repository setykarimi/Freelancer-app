import CustomDatePicker from "@common/form/date-picker";
import RHFSelect from "@common/form/rhf-select";
import TextField from "@common/form/text-field";
import Loading from "@common/loading";
import useCategories from "@hook/use-categories";
import useCreateProject from "@hook/use-create-project";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Value } from "react-multi-date-picker";
import { TagsInput } from "react-tag-input-component";

export default function CreateProjectForm({
  onclose,
}: {
  onclose: () => void;
}) {
  const { categories } = useCategories();
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState<Value>(new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { createProject, isCreating } = useCreateProject();

  const onSubmit = (values: any) => {
    const newProject = {
      ...values,
      deadline: new Date(date).toISOString(),
      tags,
    };

    createProject(newProject, {
      onSuccess: () => {
        onclose();
        reset();
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
        <TextField
          name="title"
          label="عنوان"
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
        <TextField
          name="description"
          label="توضیحات"
          register={register}
          required
          validationSchema={{
            required: {
              value: true,
              message: "بودجه ضروری است",
            },
            minLength: {
              value: 15,
              message: "حداقل ۱۵ کاراکتر وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          name="budget"
          label="بودجه"
          register={register}
          required
          validationSchema={{
            required: "بودجه ضروری است.",
          }}
          errors={errors}
        />

        <RHFSelect
          label="دسته بندی"
          name="category"
          register={register}
          options={categories}
          required
        />
        <div>
          <label className="mb-2 block text-secondary-700">تگ</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>

        <CustomDatePicker date={date} setDate={setDate} label="تاریخ" />
        <div className="mt-8">
          {isCreating ? (
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
