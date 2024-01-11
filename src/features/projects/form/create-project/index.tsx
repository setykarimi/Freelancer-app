import CustomDatePicker from "@common/form/date-picker";
import RHFSelect from "@common/form/rhf-select";
import TextField from "@common/form/text-field";
import Loading from "@common/loading";
import useCategories from "@hook/use-categories";
import useCreateProject from "@hook/use-create-project";
import useEditProject from "@hook/use-edit-project";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Value } from "react-multi-date-picker";
import { TagsInput } from "react-tag-input-component";

export default function CreateProjectForm({
  onclose,
  projectToEdit = {},
}: {
  projectToEdit?: any;
  onclose: () => void;
  
  
}) {

  
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: projectTags,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const { categories } = useCategories();
  const [tags, setTags] = useState(projectTags ? projectTags : []);
  const [date, setDate] = useState<Value>(deadline ? deadline : new Date());
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { createProject, isCreating } = useCreateProject();
  const { editPorject, isEditing } = useEditProject();

  const onSubmit = (values: any) => {
    const newProject = {
      ...values,
      deadline: date,
      tags,
    };

    if (isEditSession) {
      editPorject({id:editId, postData:newProject}, {
        onSuccess: () => {
          onclose();
          reset();
        },
      });
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onclose();
          reset();
        },
      });
    }
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
          {isCreating || isEditing? (
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
