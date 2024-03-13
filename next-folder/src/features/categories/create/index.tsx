import TextField from "@/common/form/text-field";
import Loading from "@/common/loading";
import useCreateCategory from "@/hooks/category/use-create-category";
import useEditCategory from "@/hooks/category/use-edit-category";
import { useForm } from "react-hook-form";

function CreateCategoryForm({
  onClose,
  categoryToEdit = {},
}: {
  onClose: any;
  categoryToEdit?: any;
}) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { title, description, englishTitle, type } = categoryToEdit;

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

  const { isCreating, createCategory } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();

  const onSubmit = (data: any) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createCategory(data, {
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
            value: 5,
            message: "حداقل 5 کاراکتر را وارد کنید",
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
            value: 10,
            message: "حداقل 10 کاراکتر را وارد کنید",
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
