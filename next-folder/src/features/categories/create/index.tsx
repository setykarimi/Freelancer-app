import RHFSelect from "@/common/form/rhf-select";
import TextField from "@/common/form/text-field";
import Loading from "@/common/loading";
import useCategories from "@/hooks/category/use-categories";
import useCreateCategory from "@/hooks/category/use-create-category";
import useEditProject from "@/hooks/projects/use-edit-project";
import { useState } from "react";
import { useForm } from "react-hook-form";

function CreateCategoryForm({
  onClose,
  projectToEdit = {},
}: {
  onClose: any;
  projectToEdit?: any;
}) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const { title, description, englishTitle, type } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      englishTitle,
      type,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const { categories } = useCategories();
  const { isCreating, createCategory } = useCreateCategory();
  const { editProject, isEditing } = useEditProject();

  const onSubmit = (data: any) => {
    const newProject = {
      ...data,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createCategory(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"
        type="text"
        register={register}
        required
        validationSchema={{
          required: "عنوان انگلیسی ضروری است",
        }}
        errors={errors}
      />
     <TextField
        label="تایپ"
        name="type"
        type="text"
        register={register}
        required
        validationSchema={{
          required: "تایپ ضروری است",
        }}
        errors={errors}
      />

      <div className="!mt-8">
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
